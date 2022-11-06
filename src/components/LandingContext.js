import React from 'react';
import { useState, createContext } from 'react';

export const LandingContext = createContext(true);

export const LandingProvider = ({ children }) => {

    const [landing, setLanding] = useState(false);
    const setLandingStatus = () => {
      setLanding(true);
    }
    const [destroyCover, setDestroyCover] = useState(false);
    // const setForDestroyCover = (element) => {
    //   element.style.display = "none" ? setDestroyCover(true) : setDestroyCover(false)
    // }
    
    return (
      <LandingContext.Provider value={{landing, setLandingStatus, destroyCover, setDestroyCover}}>
        {children}
      </LandingContext.Provider>
    );
}
