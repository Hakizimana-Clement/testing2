import { useState } from "react";

const ContactForm = () => {
  // POST DATA TO SERVER
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(null);
  // LOGIC FOR SUBMITTING

  const submitContacts = async (e) => {
    e.preventDefault();

    const contacts = { name, email, message };

    const response = await fetch("/api/contacts", {
      method: "POST",
      body: JSON.stringify(contacts),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
    }

    if (response.ok) {
      setName("");
      setEmail("");
      setMessage("");

      setError(null);
      console.log("new contact added!!", json);
    }
  };
  return (
    <form onSubmit={submitContacts}>
      <div className="form-floating mb-3">
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          className="form-control"
          required
          value={name}
        />
        <label for="floatinginput">name</label>
      </div>
      <div className="form-floating mb-3">
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          className="form-control"
          required
          value={email}
        />
        <label for="floatingInput">Email address</label>
      </div>
      <div className="form-floating">
        <textarea
          className="form-control"
          onChange={(e) => setMessage(e.target.value)}
          id="floatingTextarea2"
          style={{ height: 173, marginTop: 20 }}
          required
          value={message}
        ></textarea>
        <label for="floatingTextarea2">Message</label>
      </div>
      <button type="submit" className="btn btn-danger mt-4 mb-4">
        Submit
      </button>
      {error && <p>{error}</p>}
    </form>
  );
};

export default ContactForm;
