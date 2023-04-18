import { useEffect } from "react";
import EmailDetails from "./EmailsDetails";
import { useEmailsContext } from "../hooks/useEmailsContext";
const Email = () => {
  // const [emails, setEmails] = useState(null);
  const { emails, dispatch } = useEmailsContext();
  //////////////// DATA FETCH ////////////////////
  useEffect(() => {
    const fetchEmail = async () => {
      const response = await fetch("/api/emails");
      const json = await response.json();

      if (response.ok) {
        // setEmails(json);
        dispatch({ type: "SET_EMAILS", payload: json });
      }
    };

    fetchEmail();
  }, [dispatch]);
  ////////////////////////////////////////////////
  return (
    <>
      <h2>Email list</h2>
      {emails &&
        emails.map((email) => <EmailDetails key={email._id} email={email} />)}
    </>
  );
};

export default Email;
