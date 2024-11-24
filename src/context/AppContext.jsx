import { createContext, useRef, useState } from "react";

export const AppContext = createContext({});

const AppProvider = ({ children }) => {
  const refs = {
    section1: useRef(null),
    section2: useRef(null),
    section3: useRef(null),
  };
  const [hasParentWithId, setHasParentWithId] = useState(false);

  const checkParentId = (element, id) => {
    while (element) {
      if (element.id === id) {
        return true;
      }
      element = element.parentElement;
    }
    return false;
  };

  return (
    <AppContext.Provider
      value={{ hasParentWithId, setHasParentWithId, checkParentId, refs }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
