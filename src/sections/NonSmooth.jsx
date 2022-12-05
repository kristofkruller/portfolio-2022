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
        /*sync with Stickies pos*/
        display: flex;
        align-items: center;
        opacity:0;
    }

`

const NonSmooth = (props) => {

    const { logoViewState, language, landing, servicesDisplay } = useStateContext();
    const content = contentProv(props,"Services",language)

    return (
        <WrapR>  

                <motion.h1 
                initial={{top: "-180px"}} 
                animate={logoViewState && !servicesDisplay ? {top: 0, opacity: 1} : {opacity:0}} 
                transition={{type: "spring", bounce: .3, mass: .75, delay: 0}}
                >{content.Title}</motion.h1>
                {landing ?
                    <Services data={props.data} /> : <></> 
                }

        </WrapR>
    )
}

export default NonSmooth