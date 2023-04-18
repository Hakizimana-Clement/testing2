import { useContext } from "react";
import { EmailsContext } from "../context/EmailContext";

export const useEmailsContext = () => {
  const context = useContext(EmailsContext);

  if (!context) {
    throw Error("useEmailsContext must be inside EmailContextProvider");
  }

  return context;
};
