import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import {motion} from 'framer-motion'

const Container = styled.section`
  position: absolute;
  top: 0;
      left: 0;
      right: 0;
      bottom: 0;  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  width: 100%;

  #logo {

    path {
      fill: ${props => props.theme.white};
      stroke:${props => props.theme.white};
      stroke-width:2;
      stroke-miterlimit:10;
    }
  }
`
const pathVar = {
  hidden : {
    opacity: 0,
    pathlenght: 0,
  },
  visible : {
    opacity: 1,
    pathlenght: 1,
    transition : {
      duration : 2,
      ease : 'easeInOut'
    },

  },

}
const Logo = () => {

  return (
    <Container>
      <Link to="/">
          <motion.svg id="logo"
>
          </motion.svg>
      </Link>
    </Container>
  )
}

export default Logo