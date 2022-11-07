import { useReducer } from "react";

import { appContext } from "./store";

const initialState = {
  isLogged: false,
  name: "",
  mail: "",
  password: "",
  currentLanguage: "en",
};

const stateInitializer = (initialState) => {
  const state = JSON.parse(localStorage.getItem("user"));

  return state ? state : initialState;
};

const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        name: action.payload.name,
        mail: action.payload.mail,
        password: action.payload.password,
        isLogged: true,
      };
    case "LOGOUT":
      return {
        ...state,
        name: "",
        mail: "",
        password: "",
        isLogged: false,
      };

    case "SET_CURRENT_LANGUAGE":
      return {
        ...state,
        currentLanguage: action.payload,
      };
    default:
      return state;
  }
};

export const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState, stateInitializer);

  return (
    <appContext.Provider value={{ state, dispatch }}>
      {children}
    </appContext.Provider>
  );
};
