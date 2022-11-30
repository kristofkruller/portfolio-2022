import { motion } from 'framer-motion'
import React from 'react'
import styled from 'styled-components'
import { useStateContext } from '../components/StateContext'


const PortfolioWrapper = styled(motion.section)`
  top: 0;
  left: 0;
  height: 100vh; 
  width: 100%;
  background-color: ${props => props.theme.dark};
`

const Portfolio = () => {

  const { language, servicesDisplay } = useStateContext();

  return (
    <PortfolioWrapper>

    </PortfolioWrapper>
  )
}

export default Portfolio