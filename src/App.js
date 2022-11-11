import {useRef} from "react";

import Home from './sections/Home';
import Stickies from "./sections/Stickies";

import './App.css';
import GlobalStyles from './styles/globalStyles';
import { dark } from './styles/Themes';

import {BoolContextProvider} from "./components/BoolContext";

import { ThemeProvider } from 'styled-components';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import { AnimatePresence } from 'framer-motion';

function App() {

  const containerRef = useRef(null);
  const stickyRef = useRef("stickyHeader");
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={dark}>
        <LocomotiveScrollProvider
          options={
            {
              smooth: true,
              // ... all available Locomotive Scroll instance options 
            }
          }
          watch={
            [
              //..all the dependencies you want to watch to update the scroll.
              //  Basicaly, you would want to watch page/location changes
              //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
            ]
          }
          containerRef={containerRef}
        >
          <AnimatePresence>
            <BoolContextProvider>
              <Stickies key={stickyRef}/>
              <main data-scroll-container ref={containerRef}>
                <Home />
              </main>
            </BoolContextProvider>
          </AnimatePresence>            

        </LocomotiveScrollProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
