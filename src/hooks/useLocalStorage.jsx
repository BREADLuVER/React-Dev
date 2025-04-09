import { useState, useEffect } from "react";

export function useLocalStorage({ key, defaultValue }) {
  const [value, setValueState] = useState(() => {
    if (typeof window === "undefined") {
      return defaultValue;
    }

    try {
      const stored = window.localStorage.getItem(key);
      return stored !== null ? JSON.parse(stored) : defaultValue;
    } catch (error) {
      console.error("Error reading localStorage key:", key, error);
      return defaultValue;
    }
  });

  useEffect(() => {
    if (typeof window === "undefined") return;

    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error("Error setting localStorage key:", key, error);
    }
  }, [key, value]);

  const setValue = (newValue) => {
    setValueState((currentValue) =>
      typeof newValue === "function" ? newValue(currentValue) : newValue
    );
  };

  return [value, setValue];
}
