import { motion, useInView } from 'framer-motion'
import React from 'react'
import { useRef, useEffect, useState } from 'react'
import styled from 'styled-components'
import { contentProv } from '../App'
import { useStateContext } from '../components/StateContext'

const H1 = styled(motion.h1) `
  position: relative;
  padding-left: 165px;
`
const PortfolioWrapper = styled(motion.section)`
  top: 0;
  left: 0;
  width: 100%;
  background-color: ${props => props.theme.dark};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`
const PortfolioWrap = styled(motion.div)`
  min-height: 100vh;
  width: calc(100% - (175px * 2));
  display: grid;
  grid-template-columns: 1fr,2fr;
  grid-template-rows: 1fr 2fr 2fr;
  grid-gap: 20px;
`
const PortfolioDiv = styled(motion.div)`
  background-color: pink;
`

const Portfolio = (props) => {
  const topCheck = useRef(null);
  const scrollCheck = useRef(null);
  const { language, servicesDisplay, setServices, setEndOf } = useStateContext();

  const content = contentProv(props,"Portfolio",language)

  useEffect(() => {
    const body = document.body.style;
    // const scrollRelease = () => setTimeout(() => {body.overflow = 'auto';});
    // const scrollStop = cb => {
    //   scrollCheck.current.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"}); 
    //   body.overflow = 'hidden';
    //   //cb for callback - release scroll again 
    //   cb();
    // }
    // if (servicesDisplay) scrollStop(scrollRelease)

    const onScroll = () => {
      if (servicesDisplay) {
        const scrollTreshold = window.innerHeight;
        const pos = topCheck.current.getBoundingClientRect().top;

        if ( pos > scrollTreshold ) {
            
            setEndOf(false);
            setServices(false);

        }
      }

    }
  
    setter();

    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)

  }, [servicesDisplay])
  
  const setter = () => {
    !servicesDisplay ? topCheck.current.style.display = "none" : setTimeout(() => {
      topCheck.current.style.display = "flex";
      setEndOf(true) //escalates Different section
    }, 1000);
  }

  return (
  <>
    <H1     
    ref={scrollCheck}
    style={!servicesDisplay ? {opacity: 0} : {opacity: 1}}
    >{content.Title}</H1>

    <PortfolioWrapper
    ref={topCheck}
    id="portfolioWrap"
    >
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
  </>
  )
}

export default Portfolio