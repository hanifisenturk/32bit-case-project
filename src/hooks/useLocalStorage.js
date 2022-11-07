import { useState } from "react";

const useLocalStorage = (key, initialValue) => {
  const getData = () => {
    const item = window.localStorage.getItem(key);

    return item ? JSON.parse(item) : initialValue;
  };
  const [storedValue, setStoredValue] = useState(getData());

  const setValue = (value) => {
    setStoredValue(value);

    window.localStorage.setItem(key, JSON.stringify(value));
  };

  return [storedValue, setValue];
};

export default useLocalStorage;
