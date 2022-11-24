import React, { useEffect, useRef } from 'react'
import { useStateContext } from '../components/StateContext'

import { motion } from 'framer-motion'

import { Link } from 'react-router-dom'
import styled from 'styled-components'

import NavBar from '../components/NavBar'
import NavBody from '../components/NavBody'
import SmallLogo from '../components/SmallLogo'

const Section = styled(motion.section)`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    min-height: 10em;
    overflow: visible;
    background-color: transparent;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 30px;
    z-index: 3;

    & > div {
      z-index: 10;
    }
`

const Stickies = (props) => {
  const { landing, logoViewState, display, setDisplay } = useStateContext();
  const motionLogo = useRef("motionLogo");

  useEffect(() => {
    if (motionLogo.current.style !== undefined) {

      setTimeout(() => {
        setDisplay("block"); //display for delayed nav menu
      }, 750);

    }
  }, [landing])
  
  return (
    <>

      { !landing ? <></> :  

      (landing && !logoViewState) ? // if landing logo not in view logoViewState true

      <Section >
        <NavBody data={props.data} />      

        <motion.div // initial val because of scrolling up and down 
          ref={motionLogo} 
          initial={{scale:0, opacity:0}} 
          transition={{duration:.175}}>

          <SmallLogo />

        </motion.div>

        <section style={{minHeight: "10em", display:display, zIndex:10}}><NavBar /></section>
      </Section> 
      
      : 

      <Section >
        <NavBody  data={props.data} />  

        <motion.div 
          initial={{scale:0, opacity:0}} 
          animate={{scale:1, opacity: 1}} 
          transition={{duration:.175}}> 

          <Link to="/"><SmallLogo /></Link>

        </motion.div>

        <section style={{minHeight: "10em", display:display, zIndex:10}}><NavBar /></section>
      </Section> 
      
      }

    </>
  )
}

export default Stickies