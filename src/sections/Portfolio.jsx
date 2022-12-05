import { motion } from 'framer-motion'
import React from 'react'
import { useRef } from 'react'
import styled from 'styled-components'
import { contentProv } from '../App'
import { useStateContext } from '../components/StateContext'


const PortfolioWrapper = styled(motion.section)`
  top: 0;
  left: 0;
  min-height: 100vh; 
  width: 100%;
  background-color: ${props => props.theme.dark};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    align-self: flex-start;
    margin-left: 175px;
  }
  #viewCheck {
    width: 10px;
    height: 10px;
  }
`
const PortfolioWrap = styled(motion.div)`
  height: 100vh;
  width: calc(100% - (175px * 2));
  display: grid;
  grid-template-columns: 1fr,1fr,1fr;
`
const PortfolioDiv = styled(motion.div)`
  background-color: pink;
`

const Portfolio = (props) => {
  const viewCheck = useRef(null);
  const { language, servicesDisplay } = useStateContext();

  const content = contentProv(props,"Portfolio",language)

  return (
    <PortfolioWrapper>
      <h1>{content.Title}</h1>
      <div id="viewCheck" ref={viewCheck}></div>
      <PortfolioWrap>
        <PortfolioDiv></PortfolioDiv>
        <PortfolioDiv></PortfolioDiv>
        <PortfolioDiv></PortfolioDiv>
        <PortfolioDiv></PortfolioDiv>
        <PortfolioDiv></PortfolioDiv>
        <PortfolioDiv></PortfolioDiv>
        <PortfolioDiv></PortfolioDiv>
      </PortfolioWrap>
    </PortfolioWrapper>
  )
}

export default Portfolio