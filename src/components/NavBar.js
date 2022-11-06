import React from 'react'
import styled from 'styled-components'
import { yNavFloatVar, basicOpacityVar } from '../styles/Themes'
import { motion } from 'framer-motion';


const Hamburger = styled(motion.nav)`

  width: 80px;
  height: 30px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

`
const HambChild = styled(motion.div)`
    height: 2px;
    width: 100%;
    background-color: ${props => props.theme.white};

`
const NavBar = () => {
  return (
    <Hamburger variants={yNavFloatVar} initial="hid" animate="show">
      <HambChild variants={basicOpacityVar} initial="hid" animate="show" transition={{delay:0.5}}/>
      <HambChild variants={basicOpacityVar} initial="hid" animate="show" transition={{delay:0.75}}/>
      <HambChild variants={basicOpacityVar} initial="hid" animate="show" transition={{delay:1.25}}/>
    </Hamburger>
  )
}

export default NavBar