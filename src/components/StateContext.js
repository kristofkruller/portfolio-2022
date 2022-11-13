import React from 'react';
import { useState, createContext, useContext } from 'react';

export const StateContext = createContext();

export const StateContextProvider = ({ children }) => {

    const [landing, setLanding] = useState(false);
    const [destroyCover, setDestroyCover] = useState(false);
    const [logoViewState, setLogoViewState] = useState(false);
    const [display, setDisplay] = useState("none");
    const [navopen, setNavOpen] = useState(false);

    return (
      <StateContext.Provider value={{
        landing, setLanding, destroyCover, setDestroyCover, logoViewState, setLogoViewState, display, setDisplay, navopen, setNavOpen
      }}>
        {children}
      </StateContext.Provider>
    );
}
export const useStateContext = () => {
  // get the context
  const context = useContext(StateContext);

  // if `undefined`, throw an error
  if (context === undefined) {
    throw new Error("useUserContext was used outside of its Provider");
  }

  return context;
};
