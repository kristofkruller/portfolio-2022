import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import SmallLogo from './SmallLogo';
import { useStateContext } from './StateContext';


const CoverWrap = styled.section`
    width: 100%;
    height: 100vh;
    background-color: ${props => props.theme.dark};
    z-index: 9;
    position: relative;
    display: flex;    justify-content: center;    align-items: center;    flex-direction: column;
    cursor: pointer;
`
const hidOnClickVar = {
  hid:{ opacity: 1, scale: 1, borderRadius: 0 },
  show:{ opacity: 0, scale: 2, y:"-100%",
      transition:{
        default: { duration: .75, ease: "easeInOut" }
      },
      transitionEnd: {
        display: "none",
      }
  }
}

const CoverContainer = () => {

  const { landing, setLanding, destroyCover, setDestroyCover } = useStateContext();
  const coverContent = useRef("coverContent");

  useEffect(() => {
    if (landing) setTimeout(() => { coverContent.current.style.display = "none" ? setDestroyCover(true) : setDestroyCover(false) }, 450);
  }, [landing])
  
  return (
    <>
      {!destroyCover ? <motion.section ref={coverContent} 
      variants={!landing ? null : hidOnClickVar} initial="hid" animate="show" 
      >
        <CoverWrap onClick={()=>{setLanding(true)}}>
          <motion.div 
          style={{backgroundColor: `${props => props.theme.dark}`}}
          transition={{ type: 'spring', stiffness: 15, repeat: Infinity }}
          whileHover={{ opacity: 0 }}
          ><SmallLogo/></motion.div>
        </CoverWrap>
      </motion.section> : <></>}
    </>
  )
}

export default CoverContainer