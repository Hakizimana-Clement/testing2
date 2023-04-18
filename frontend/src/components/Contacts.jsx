import React, { useEffect, useState } from "react";
import ContactsDetails from "./ContactsDetails";
const Contacts = () => {
  ///////////////// FETCH DATA /////////////////////////
  const [contacts, setContacts] = useState(null);
  useEffect(() => {
    const fetchContacts = async () => {
      const response = await fetch("/api/contacts");
      const json = await response.json();

      if (response.ok) {
        setContacts(json);
      }
    };
    fetchContacts();
  }, []);
  ///////////////////////////////////////////////////////
  return (
    <>
      <h2>Contacts List:</h2>
      {contacts &&
        contacts.map((contact) => (
          <ContactsDetails key={contact._id} contact={contact} />
        ))}
    </>
  );
};

export default Contacts;
