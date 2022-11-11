import React from 'react';
import { useState, createContext, useContext } from 'react';

export const BoolContext = createContext();

export const ContextProvider = ({ children }) => {

    const [landing, setLanding] = useState(false);
    const [destroyCover, setDestroyCover] = useState(false);
    const [logoViewState, setLogoViewState] = useState(false);


    return (
      <BoolContext.Provider value={{landing, setLanding, destroyCover, setDestroyCover, logoViewState, setLogoViewState}}>
        {children}
      </BoolContext.Provider>
    );
}
export const useBoolContext = () => {
  // get the context
  const context = useContext(BoolContext);

  // if `undefined`, throw an error
  if (context === undefined) {
    throw new Error("useUserContext was used outside of its Provider");
  }

  return context;
};
