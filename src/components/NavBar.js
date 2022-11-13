import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import { yNavFloatVar, basicOpacityVar } from '../styles/Themes'
import { motion } from 'framer-motion';
import { useStateContext } from './StateContext';


const Hamburger = styled(motion.nav)`

  position: relative;
  width: 120px;
  min-height: inherit;

  display: flex;
  justify-content: center;
  align-items: center;

  #menu_button {
    position: relative;
  
    width: 80px;
    height: 30px;

    overflow: hidden;
    
    * {
      position: absolute;
      left: 0;
      width: 100%;
      height: 2px;
      background-color: ${props => props.theme.white};
    }
  }

  #menu_line_one,
  #menu_line_two {
    transition: 0.4s cubic-bezier(0.68, -0.55, 0.27, 1.55) left;
  }

  #menu_line_one {
    top: 0;
  }

  #menu_line_two {
    top: 12px;
  }

  #menu_text_bar {
    top: 24px;
  }

  #menu_text_bar:before {
    content: "MENU";
    position: absolute;
    top: 10px;
    right: 0;
    left: 0;
    color: ${props => props.theme.white};
    font-size: 18px;
    font-weight: medium;
    font-family: "Sora", sans-serif;
    text-align: center;
  }

  &.closed:hover #menu_line_one {
    left: -100px;
  }

  &.closed:hover #menu_line_two {
    left: 100px;
  }

  &.closed:hover, &.closed:hover #menu_text_bar:before {
    animation: 
      shakeWhileMovingUp 0.8s ease 0.2s forwards,
      shakeWhileMovingDown 0.2s ease 0.8s forwards;
  }
  &.closed:hover {
    animation: moveUpThenDownBar 0.8s ease 0.2s forwards;
    cursor: pointer;

  }
  &.closed:hover #menu_text_bar:before {
    animation: moveUpThenDownText 1s ease 0.4s forwards;
  }

  @keyframes moveUpThenDownBar {
    0% {
      top: 0;
    }
    50% {
      top: -27px;
    }
    100% {
      top: 0;
    }
  }
  @keyframes moveUpThenDownText {
    0% {
      top: 0;
    }
    50% {
      top: -27px;
    }
    100% {
      top: -19px;
    }
  }
  @keyframes shakeWhileMovingUp {
    0% {
      transform: rotateZ(0);
    }
    25% {
      transform: rotateZ(-10deg);
    }
    50% {
      transform: rotateZ(0deg);
    }
    75% {
      transform: rotateZ(10deg);
    }
    100% {
      transform: rotateZ(0);
    }
  }

  @keyframes shakeWhileMovingDown {
    0% {
      transform: rotateZ(0);
    }
    80% {
      transform: rotateZ(3deg);
    }
    90% {
      transform: rotateZ(-3deg);
    }
    100% {
      transform: rotateZ(0);
    }
  }
  // click event handeling
  &.opened #menu_line_one {
    animation: openLeftRot 1s ease 0.2s forwards,
    openLeftPos 1s ease 0.2s forwards;
  }
  &.opened #menu_line_two {
    animation: openRightRot 1s ease 0.2s forwards,
    openRightPos 1s ease 0.2s forwards;
  }
  @keyframes openLeftRot {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(45deg);
    }
  }
  @keyframes openLeftPos {
    0% {
      left: 0px;
    }
    100% {
      left: -12px;
    }
  }
  @keyframes openRightRot {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(-45deg);
    }
  }
  @keyframes openRightPos {
    0% {
      left: 0px;
    }
    100% {
      left: 2px;
    }
  }
`
const NavBar = () => {

  const { navopen, setNavOpen } = useStateContext(); 
  const [navclass, setNavClass] = useState("closed")

  const classSetter = () => {

    setNavOpen(!navopen);
    setNavClass("opened");

    if (!navopen) {
      setNavClass("opened")
    } else if (navopen) {
      setNavClass("closed")
    }

  }
  
  useEffect(() => {
    setNavClass("opened");
    setNavOpen(!navopen);
  }, [])
  
  return (
      
      <Hamburger id="menu_wrap" variants={yNavFloatVar} initial="hid" animate="show" className={navclass} onClick={classSetter}>
        <div id="menu_button">
          <motion.div id="menu_line_one" variants={basicOpacityVar} initial="hid" animate="show" transition={{delay:1.5}} />
          <motion.div id="menu_line_two" variants={basicOpacityVar} initial="hid" animate="show" transition={{delay:1.75}} />
          <motion.div id="menu_text_bar" variants={basicOpacityVar} initial="hid" animate="show" transition={{delay:2.25}} />
        </div>
      </Hamburger>
      
  )
}

export default NavBar