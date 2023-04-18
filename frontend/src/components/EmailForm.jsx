import { useState } from "react";

import { useEmailsContext } from "../hooks/useEmailsContext";
const EmailFrom = () => {
  const { dispatch } = useEmailsContext();
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);
  const submitEmails = async (e) => {
    e.preventDefault();

    const emails = { email };

    const response = await fetch("/api/emails", {
      method: "POST",
      body: JSON.stringify(emails),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const json = await response.json();
    if (!response.ok) {
      setError(json.error);
    }

    if (response.ok) {
      setEmail("");
      setError(null);
      console.log("new email added!!", json);
      dispatch({ type: "CREATE_EMAIL", payload: json });
    }
  };
  return (
    <form action="" onSubmit={submitEmails}>
      <div className="input-group mb-3">
        <input
          type="email"
          required
          onChange={(e) => setEmail(e.target.value)}
          className="form-control"
          placeholder=" Email Address"
          aria-label=" Email Address"
          aria-describedby="basic-addon2"
          value={email}
        />
        <button type="submit" className="btn btn-danger ml-3">
          SUBSCRIBE
        </button>
        {error && <p>{error}</p>}
      </div>
    </form>
  );
};

export default EmailFrom;
