import React, { useContext } from 'react'
import { LandingContext } from '../components/LandingContext'

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

    padding: 0 30px;
    #empty {
      height: auto;
      width: 92px;
    }
`


const Stickies = () => {
  const { landing, logoViewState } = useContext(LandingContext);

  return (
    <>
      { !landing ? <></> :  
      (landing && !logoViewState) ? 
      <Section >      
        <div id="empty" />
        <NavBar />
      </Section> : 
      <Section >      
        <Link to="/"><SmallLogo></SmallLogo></Link>
        <NavBar />
      </Section> }
    </>
  )
}

export default Stickies