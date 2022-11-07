import { createContext, useContext } from "react";

const defaultValues = {
  isLogged: false,
  name: "",
  mail: "",
  password: "",
  currentLanguage: "en",
};

export const appContext = createContext(defaultValues);

export const useAppContext = () => useContext(appContext);
