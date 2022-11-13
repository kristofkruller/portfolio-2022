import { motion } from 'framer-motion'
import React from 'react'
import styled from 'styled-components'
import { useStateContext } from '../components/StateContext'

const ServicesWrap = styled.section`
    height: 100vh;
    width: 100%;
    overflow: hidden;
    background-color: ${props => props.theme.dark};
    h1 {
        font-size: ${props => props.theme.fontxxl};
        color: ${props => props.theme.white};
    }
`

const Services = () => {
    const { landing } = useStateContext();

    return (
        <>{ landing ? 
            <ServicesWrap>    <h1>Services</h1>     </ServicesWrap>
        : <></> } </>
    )
}

export default Services