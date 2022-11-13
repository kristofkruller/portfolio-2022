import {useRef} from "react";

import Home from './sections/Home';
import Stickies from "./sections/Stickies";

import './App.css';
import GlobalStyles from './styles/globalStyles';
import { dark } from './styles/Themes';

import {StateContextProvider} from "./components/StateContext";

import { ThemeProvider } from 'styled-components';
import { AnimatePresence } from 'framer-motion';
import Services from "./sections/Services";
import SmoothScroll from "./sections/SmoothScroll";

function App() {

  const stickyRef = useRef("stickyHeader");
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={dark}>

          <AnimatePresence>
            <StateContextProvider>
              <Stickies key={stickyRef}/>
            {/*custom smooth scroll*/} 
             <SmoothScroll>
                <Home />
                <Services />
              </SmoothScroll>

            </StateContextProvider>
          </AnimatePresence>            

      </ThemeProvider>
    </>
  );
}

export default App;
