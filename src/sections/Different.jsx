import { motion, useInView } from 'framer-motion'
import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { useStateContext } from '../components/StateContext';

const H1 = styled(motion.h1) `
  position: relative;
  padding-left: 165px;
`
const DiffWrapper = styled(motion.section)`
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
const DiffWrap = styled(motion.div)`
  min-height: 100vh;
  width: calc(100% - (175px * 2));
  display: grid;
  grid-template-columns: 1fr,2fr;
  grid-template-rows: 1fr 2fr 2fr;
  grid-gap: 20px;
  background-color: purple;
`
const Different = () => {
  const { servicesDisplay, endOfPortfolio } = useStateContext();
  const nextCheck = useRef(null);

  const isInView = useInView(nextCheck);

  const [nextCheckShow, setShow] = useState(false);

  useEffect(() => {
    // !isInView ? setEndOf(false) : setEndOf(true);
    return () => {
    }
  }, [isInView])
  
  return ( <>
    <H1
    ref={nextCheck}
    style={endOfPortfolio ? {opacity: 1} : {opacity: 0}}
    >title</H1>

    <DiffWrapper style={
      endOfPortfolio ? {display:"flex"} : {display: "none"}}>
        <DiffWrap></DiffWrap>

    </DiffWrapper>
  </>)
}

export default Different