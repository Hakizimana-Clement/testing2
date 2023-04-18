import { createContext, useReducer } from "react";

export const EmailsContext = createContext();
export const emailsReducer = (state, action) => {
  switch (action.type) {
    case "SET_EMAILS":
      return {
        emails: action.payload,
      };

    case "CREATE_EMAILS":
      return {
        emails: [action.type, ...state.emails],
      };
    case "DELETE_CONTACT":
      return {
        emails: state.emails.filter(
          (email) => email._id !== action.payload._id
        ),
      };

    default:
      return state;
  }
};
export const EmailsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(emailsReducer, {
    emails: null,
  });
  return (
    <EmailsContext.Provider value={{ ...state, dispatch }}>
      {children}
    </EmailsContext.Provider>
  );
};
