import React from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import { useStateContext } from './StateContext'

const NavLayer = styled(motion.section)`
  position: absolute;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: 3;
  background-color: ${props => props.theme.pruple};
  right: -100%;
  opacity: 0;
`

const NavBody = () => {
  const { navopen } = useStateContext()
  return (
    <>
    <NavLayer 
      initial={`right : -`+window.innerWidth} 
      animate={navopen ? {right:0, opacity: 1} : {opacity:0}} 
      transition={{type: "spring", bounce: 0.25, mass: 1}}>
    </NavLayer> 
    </>
  )
}

export default NavBody