import { motion } from 'framer-motion'
import React from 'react'
import styled from 'styled-components'
import { useStateContext } from '../components/StateContext'

const Portfolio = () => {

  const { language } = useStateContext();

  return (
    <div style={{height: "100vh", width: "100%", backgroundColor: props => props.theme.dark}}></div>
  )
}

export default Portfolio