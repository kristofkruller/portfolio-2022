import React from 'react'
import styled from 'styled-components'
import CoverContainer from '../components/Cover'
import Logo from '../components/Logo'

const Section = styled.section`
  position: relative;
  min-height: 200vh;
  overflow: hidden;
  background-color: ${props => props.theme.pruple};
`

const Home = () => {
 

  return (
    <Section>
      <CoverContainer id='coverSection'/>
      <Logo data-scroll data-scroll-delay='1' data-scroll-speed='4' />
    </Section>
  )
}

export default Home
