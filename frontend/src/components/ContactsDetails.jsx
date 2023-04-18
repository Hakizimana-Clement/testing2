import React from "react";
import { useEmailsContext } from "../hooks/useEmailsContext";
export default function ContactsDetails({ contact }) {
  const { dispatch } = useEmailsContext();
  const handleClick = async () => {
    const response = await fetch("/api/contacts/" + contact._id, {
      method: "DELETE",
    });

    const json = await response.json();

    if (response.ok) {
      dispatch({ type: "DELETE_CONTACT", payload: json });
    }
  };

  return (
    <>
      <div className="card mt-4" style={{ width: "23rem" }}>
        <div className="card-body">
          <h5 className="card-title mb-2">Name: {contact.name}</h5>
          <h6 className="card-subtitle mb-1 ">
            <strong>Email: </strong> {contact.email}
          </h6>
          <p className="card-text mb-0">
            <strong>message: </strong>
            {contact.message}
          </p>
          <p className="card-text">
            <strong>Created: </strong>
            {contact.createdAt}
          </p>
          <button className="btn btn-outline-dark" onClick={handleClick}>
            Delete
          </button>
        </div>
      </div>
    </>
  );
}
