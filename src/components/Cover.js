import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import SmallLogo from './SmallLogo';
import { useBoolContext } from './BoolContext';


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
        default: { duration: 1, ease: "easeInOut" }
      },
      transitionEnd: {
        display: "none",
      }
  }
}

// const Marquee = styled(motion.section)`
//   position: absolute;
//   top: 0;
//   width: 100vw;
//   max-width: 100%;

//   h2 {
//     position: absolute;
//     will-change: transform;
//     overflow: hidden;
//     background: ${props => `rgba(${props.theme.sailorRgba},.7)`};
//     margin: 0 auto;
//     white-space: nowrap;

//     text-transform: uppercase;
//     font-size: ${props => props.theme.fontxxl};
//     font-weight: 600;
//     color: ${props => `rgb(${props.theme.mintRgba})`};
//   }
// `
// const marqueeVariants = {
//   animate: {
//     x: [0, -1035],
//     transition: {
//       x: {
//         repeat: Infinity,
//         repeatType: "loop",
//         duration: 5,
//         ease: "linear",
//       },
//     },
//   },
// };
const CoverContainer = () => {

  const { landing, setLanding, destroyCover, setDestroyCover } = useBoolContext();
  const coverContent = useRef("coverContent");

  useEffect(() => {
    if (landing) setTimeout(() => { coverContent.current.style.display = "none" ? setDestroyCover(true) : setDestroyCover(false) }, 1000); 
  }, [landing])
  
  return (
    <>
      {!destroyCover ? <motion.section ref={coverContent} 
      variants={!landing ? null : hidOnClickVar} initial="hid" animate="show" 
      >
        <CoverWrap onClick={()=>{setLanding(true)}}>
          <motion.div 
          transition={{ type: 'spring', stiffness: 10, repeat: Infinity }}
          whileHover={{ opacity: 0 }}
          ><SmallLogo/></motion.div>
        </CoverWrap>
      </motion.section> : <></>}
    </>
  )
}

export default CoverContainer