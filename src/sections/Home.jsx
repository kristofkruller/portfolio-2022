import React, { useRef, useEffect } from 'react'
import { useStateContext } from '../components/StateContext'

import styled from 'styled-components'
import Logo from '../components/Logo'
import kruboVid from '../assets/KRUBO-slow.mp4'

import { motion, useInView } from 'framer-motion'

const Section = styled.section`
  position: relative;
  height: 200vh;
  overflow: hidden;
  background-color: ${props => props.theme.dark};
  svg *:not(svg rect) {
        fill: #E6E6E6;
        stroke: #E6E6E6;
        stroke-width: 1;
        stroke-linecap: round;
  }
  #viewDiv {
    position: absolute;
    top: 0; right: 0; left: 0; bottom: 0;
    height: 60vh;
  }
  button {
    position: absolute;
    bottom: 20px; right: 44px;
    border: 1px solid ${props => props.theme.white};
    color: ${props => props.theme.white};
    font-size: ${props => props.theme.fontxs};
    background-color: transparent;
    z-index: 3;
    cursor: pointer;
    padding: 10px;

    transition: all .2s ease-in-out;
  }
`
const VidWrap = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  object-fit: cover;
  z-index: 1;
  video {
    width: inherit;
    height: 99vh;
    object-fit: cover;
  }
`
const Layer = styled.div`
  position: absolute;
  top: 0; right:0; 
  width: inherit;
  height: inherit;
  z-index: 2;
  background: linear-gradient(to top, rgba(22,13,28,1) 2%, rgba(${props => props.theme.darkRgb},.6)); /*160D1C*/
`
const Home = () => {

  const { setLogoViewState, language, setLang } = useStateContext();

  const viewId = useRef("onView");
  const isInView = useInView(viewId);

  const langSetter = () => {

    setLang("ENG");

    if (language !== "HU") {
      setLang("HU")
    } else if (language !== "ENG") {
      setLang("ENG")
    }

  }

  useEffect(() => {
    !isInView ? setLogoViewState(true) : setLogoViewState(false);
  }, [isInView])

  return (
    <Section>

      <motion.div id='viewDiv' ref={viewId}>
        <Logo />
      </motion.div>

      <VidWrap>
        <Layer />
        <motion.video src={kruboVid} type='video/mp4' autoPlay muted loop  initial={{opacity:0}} animate={{opacity:1}} transition={{duration:10}} />
      </VidWrap>

      <button style={isInView ? {opacity:1} : {opacity:0}} onClick={langSetter}>{language}</button> : <></>

    </Section>
  )
}

export default Home
