import { motion } from 'framer-motion'
import React from 'react'
import { useRef, useEffect } from 'react'
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
  position: relative;

  h1 {
    width: 100%;
    position: absolute;
    top: -160px;
    left: 175px;
    align-self: flex-start;
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
  const { language, servicesDisplay, setServices } = useStateContext();

  const content = contentProv(props,"Portfolio",language)

  useEffect(() => {
    
    const onScroll = () => {

      const scrollTreshold = window.innerHeight * 0.8;

      const pos = viewCheck.current.getBoundingClientRect().top;

      if (servicesDisplay) viewCheck.current.parentElement.scrollTo({
        top: "50%",
        left: 0,
        behavior: 'smooth'
      });

      if ( pos > scrollTreshold ) {
          
          setServices(false);

      }

    }

    window.addEventListener('scroll', onScroll)
  
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  

  return (
    <PortfolioWrapper
    ref={viewCheck}
    id="portfolioWrap"
    style={!servicesDisplay ? {display:"none", opacity: 0} : {display:"flex", opacity: 1}}
    transition={{type: "spring", bounce: .3, mass: .75, delay: 0}}
    >
      <h1>{content.Title}</h1>
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