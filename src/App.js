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

import contentData from "./assets/Content.json"

export const contentProv = (props, section, language) => {
  // for example: contentProv(props,"Services","HU"), flat important because of empty arrays, find to search in flattened object
  const table = props.data.filter(e => e.id.indexOf(section) !== -1)
  const lang = table.map(e => e.Primary.filter(e => e.id.indexOf(language) !== -1))
  return lang.flat().find(e => e.id === language);
}

function App() {

  const stickyRef = useRef("stickyHeader");
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={dark}>

          <AnimatePresence>
            <StateContextProvider>
              <Stickies key={stickyRef} data={contentData}/>
            {/*custom smooth scroll*/} 
              <SmoothScroll>
                <Home />
                <Services data={contentData} />
              </SmoothScroll>

            </StateContextProvider>
          </AnimatePresence>            

      </ThemeProvider>
    </>
  );
}

export default App;
