import { useState } from 'react';

const useLocalStorage = (key, initialValue) => {
  const [state, setState] = useState(() => {
    if (window.localStorage.getItem(key)) {
      return JSON.parse(window.localStorage.getItem(key));
    }

    window.localStorage.setItem(key, JSON.stringify(initialValue));
    return initialValue;
  });

  const setValue = (value) => {
    window.localStorage.setItem(key, JSON.stringify(value));
    setState(value);
  }

  return([state, setValue]);
}

export default useLocalStorage;