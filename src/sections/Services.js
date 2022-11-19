import { motion } from 'framer-motion'
import React, {useEffect} from 'react'
import styled from 'styled-components'
import { contentProv } from '../App'
import { useStateContext } from '../components/StateContext'

const ServicesWrap = styled.section`
    height: 100vh;
    width: 100%;
    padding: 0 19em;
    overflow: hidden;

    background-color: ${props => props.theme.dark};
    &, & * { color: ${props => props.theme.white}; }
`

const Services = (props) => {
    const { landing, language } = useStateContext();
    const content = contentProv(props,"Services",language)
      
    return (
        <>{ landing ? 
            <ServicesWrap>    
                <h1 id="ServicesTitle">{content.Content[0]}</h1>
                <div id="Content">
                    <h2>{content.Content[1]}</h2>
                    <div>{content.Content[2]}</div>
                    <button>{content.Content[3]}</button>
                </div> 
            </ServicesWrap>
        : <></> } </>
    )
}

export default Services