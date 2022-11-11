import React from 'react'
import { useBoolContext } from '../components/BoolContext'

import { motion } from 'framer-motion'

import { Link } from 'react-router-dom'
import styled from 'styled-components'

import NavBar from '../components/NavBar'
import SmallLogo from '../components/SmallLogo'

const Section = styled(motion.section)`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    min-height: 10em;
    overflow-x: hidden;
    overflow-y: visible;
    background-color: transparent;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 10;
    overflow: hidden;
    padding: 0 30px;
    #empty {
      height: auto;
      width: 92px;
    }
`


const Stickies = () => {
  const { landing, logoViewState } = useBoolContext();

  return (
    <>
      { !landing ? <></> :  
      (landing && !logoViewState) ? 
      <Section >      
        <motion.div initial={{scale:1, opacity: 1}} animate={{scale:0, opacity:0}} transition={{duration:.175}}> <Link to="/"><SmallLogo></SmallLogo></Link></motion.div>
        <NavBar />
      </Section> : 
      <Section >      
        <motion.div initial={{scale:0, opacity:0}} animate={{scale:1, opacity: 1}} transition={{duration:.175}}> <Link to="/"><SmallLogo></SmallLogo></Link></motion.div>
        <NavBar />
      </Section> }
    </>
  )
}

export default Stickies