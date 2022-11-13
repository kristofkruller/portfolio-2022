import React, { useRef, useEffect } from 'react'
import { useStateContext } from '../components/StateContext'

import styled from 'styled-components'
import CoverContainer from '../components/Cover'
import Logo from '../components/Logo'
import kruboVid from '../assets/KRUBO-slow.mp4'

import { motion, useInView } from 'framer-motion'

const Section = styled.section`
  position: relative;
  height: 100vh;
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
  background: linear-gradient(to top, rgba(22,13,28,1) 15%, rgba(22,13,28,.6)); /*160D1C*/
`
const Home = () => {
  const { landing, setLogoViewState } = useStateContext();

  const viewId = useRef("onView");
  const isInView = useInView(viewId);
  useEffect(() => {
    !isInView ? setLogoViewState(true) : setLogoViewState(false)
  }, [isInView])

  return (
    <Section>
      <CoverContainer id='coverSection'/>
      <motion.div id='viewDiv' ref={viewId}><Logo /></motion.div>
      { landing ? 
        <VidWrap>
          <Layer />
          <motion.video src={kruboVid} type='video/mp4' autoPlay muted loop  initial={{opacity:0}} animate={{opacity:1}} transition={{duration:10}} />
        </VidWrap> 
      : null }
    </Section>
  )
}

export default Home
