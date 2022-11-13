import { motion } from 'framer-motion'
import React from 'react'
import styled from 'styled-components'
import { useStateContext } from '../components/StateContext'

const ServicesWrap = styled.section`
    height: 100vh;
    width: 100%;
    padding: 0 19em;
    overflow: hidden;

    background-color: ${props => props.theme.dark};
    &, & * { color: ${props => props.theme.white}; }
`

const Services = () => {
    const { landing } = useStateContext();

    return (
        <>{ landing ? 
            <ServicesWrap>    <h1 id="ServicesTitle">Services</h1>     </ServicesWrap>
        : <></> } </>
    )
}

export default Services