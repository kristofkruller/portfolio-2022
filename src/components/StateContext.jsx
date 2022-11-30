import React from 'react';
import { useState, createContext, useContext } from 'react';

export const StateContext = createContext();

export const StateContextProvider = ({ children }) => {

    const [landing, setLanding] = useState(false);
    const [logoViewState, setLogoViewState] = useState(false);
    const [navopen, setNavOpen] = useState(false);
    const [language, setLang] = useState("ENG");
    const [servicesDisplay, setServices] = useState(false); //for services scroll handeling


    return (
      <StateContext.Provider value={{
        landing, setLanding, logoViewState, setLogoViewState, navopen, setNavOpen, language, setLang, servicesDisplay, setServices
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
