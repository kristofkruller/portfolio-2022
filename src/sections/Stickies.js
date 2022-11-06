import React from 'react'
import { useContext } from 'react'
import styled from 'styled-components'
import { LandingContext } from '../components/LandingContext'
import NavBar from '../components/NavBar'
import SmallLogo from '../components/SmallLogo'

const Section = styled.section`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    min-height: 10em;
    overflow: hidden;
    background-color: transparent;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 1;

    padding: 0 30px;
`


const Stickies = () => {
  const { landing } = useContext(LandingContext);
  return (
    <>
      {landing ? <Section><SmallLogo /> <NavBar /></Section> : null}
    </>
  )
}

export default Stickies