import React from 'react';

import Services from './Services';

import { useStateContext } from '../components/StateContext'
import { contentProv } from '../App';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const WrapR = styled.section`

    background-color: ${props => props.theme.dark};

    & > h1 {
        width: 100%;
        position: fixed;
        left: 175px;
        color: ${props => props.theme.white};
        /*sync with Stickies pos*/
        min-height: 160px;
        display: flex;
        align-items: center;
        opacity:0;
    }

`
const NonSmooth = (props) => {

    const { logoViewState, language, landing } = useStateContext();
    const content = contentProv(props,"Services",language)

    return (
        <WrapR>  
            {landing ?
            <>
                <motion.h1 
                initial={{top: "-180px"}} 
                animate={logoViewState ? {top: 0, opacity: 1} : {opacity:0}} 
                transition={{type: "spring", bounce: .3, mass: .75}}
                >{content.Title}</motion.h1>
                {logoViewState ? <Services data={props.data} /> : <></>}
            </> 
            : <></>}
        </WrapR>
    )
}

export default NonSmooth