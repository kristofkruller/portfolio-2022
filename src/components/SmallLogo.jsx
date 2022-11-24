import { motion } from 'framer-motion'
import React from 'react'
import styled from 'styled-components'
import { useStateContext } from './StateContext'

const SvgWrapper = styled.section`
    height: 115px;
    width: 92px;
    *:not(svg rect) {
        fill: #E6E6E6;
        stroke: #E6E6E6;
        stroke-width: 1;
        stroke-linecap: round;
    }
    transition: all ease-in-out .4s;
`
export const pathVar = { // for border & welcome logo anim
    hid:{ pathLength: 0, fillOpacity: 0 },
    show:{ pathLength: 1, fillOpacity: 1,
        transition:{
            default: { duration: 2, ease: "easeInOut" },
            fill: { duration: 2, ease: "easeInOut" }
        }
    }
}
const opacVar = { // for border & left top logo anim
    hid:{ fillOpacity: 0 },
    show:{ fillOpacity: 1,
        transition:{
            default: { duration: 0.175, ease: "easeInOut" },
            fill: { duration: 0.175, ease: "easeInOut" }
        }
    }
}
const SmallLogo = () => {

    const { landing } = useStateContext(); // landing state for switching anim mode 

    return (
        <SvgWrapper>
            <motion.svg
            version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 92 115" xmlSpace="preserve">
                <motion.path className="st0 kruboText" 
                    d="M14.3,108l-7.9-8.6H4l8.6-9.6h2.2l-7.9,8.8l-0.2-1.4l10,10.8H14.3z M2.8,108V89.7h1.9V108H2.8z M19.3,    108V89.7
                    h1.9V108H19.3z M30.6,108l-6.2-8.1h2.2L33,108H30.6z M20.4,101.1v-1.7h4.9c0.9,0,1.7-0.2,2.3-0.5c0.6-0.3,1.1-0.8,1.4-1.4
                    c0.3-0.6,0.5-1.3,0.5-2.1s-0.1-1.4-0.5-2.1c-0.3-0.6-0.8-1.1-1.4-1.4c-0.6-0.4-1.3-0.6-2.3-0.6h-4.9v-1.7H25c1.4,0,2.5,0.2,3.4,0.6
                    c1,0.4,1.7,1,2.1,1.9c0.5,0.8,0.8,1.8,0.8,3v0.4c0,1.2-0.3,2.2-0.8,3c-0.5,0.8-1.2,1.4-2.1,1.9c-0.9,0.4-2.1,0.6-3.4,0.6H20.4z
                    M43.5,108.4c-1.7,0-3-0.3-4.2-1c-1.1-0.6-1.9-1.5-2.5-2.7c-0.5-1.1-0.8-2.5-0.8-3.9V89.7h1.9v11.3c0,1.1,0.2,2.1,0.6,2.9
                    c0.4,0.8,1,1.5,1.9,1.9c0.8,0.5,1.9,0.7,3.1,0.7c1.2,0,2.2-0.2,3-0.7c0.8-0.5,1.4-1.1,1.9-1.9c0.4-0.9,0.6-1.8,0.6-3V89.7h1.9v11.1
                    c0,1.5-0.3,2.8-0.8,3.9c-0.5,1.1-1.4,2-2.5,2.7C46.5,108.1,45.2,108.4,43.5,108.4z M57.7,108.1v-1.7H63c1.1,0,1.9-0.3,2.5-0.9
                    c0.6-0.6,0.9-1.5,0.9-2.5c0-1-0.3-1.8-0.9-2.4c-0.6-0.6-1.5-1-2.6-1h-5.3v-1.3h5.1c1.1,0,2.1,0.2,2.9,0.5c0.8,0.3,1.5,0.8,2,1.4
                    c0.5,0.7,0.7,1.5,0.7,2.6v0.3c0,1-0.2,1.8-0.6,2.6c-0.4,0.7-1,1.3-1.9,1.7c-0.8,0.4-1.9,0.6-3.1,0.6H57.7z M56.3,108.1V89.7h1.9
                    v18.4H56.3z M57.7,99.2V98h4.7c1.2,0,2-0.3,2.5-0.9c0.6-0.6,0.8-1.4,0.8-2.4c0-1-0.3-1.8-0.8-2.4s-1.4-0.9-2.5-0.9h-4.7v-1.7H62
                    c1.9,0,3.3,0.4,4.2,1.3c0.9,0.9,1.4,2,1.4,3.5v0.3c0,1-0.2,1.9-0.7,2.6c-0.5,0.7-1.1,1.1-2,1.4c-0.8,0.3-1.8,0.4-2.9,0.4H57.7z
                    M81,108.4c-1.6,0-3-0.3-4.1-0.9c-1.2-0.6-2.1-1.3-2.9-2.3c-0.8-0.9-1.3-1.9-1.7-3s-0.6-2.2-0.6-3.2v-0.5c0-1.1,0.2-2.2,0.6-3.3
                    c0.4-1.1,1-2.1,1.8-3c0.8-0.9,1.8-1.6,2.9-2.2c1.2-0.5,2.5-0.8,4.1-0.8c1.5,0,2.9,0.3,4,0.8c1.2,0.5,2.1,1.3,2.9,2.2s1.4,1.9,1.8,3
                    c0.4,1.1,0.6,2.2,0.6,3.3v0.5c0,1.1-0.2,2.1-0.6,3.2c-0.4,1.1-0.9,2.1-1.7,3c-0.8,0.9-1.7,1.7-2.9,2.3
                    C83.9,108.1,82.6,108.4,81,108.4z M81,106.7c1.2,0,2.2-0.2,3.1-0.6c0.9-0.4,1.7-1,2.3-1.8c0.6-0.8,1.1-1.6,1.5-2.5
                    c0.3-0.9,0.5-1.9,0.5-2.9c0-1.1-0.2-2.1-0.5-3c-0.3-0.9-0.8-1.8-1.5-2.5c-0.6-0.7-1.4-1.3-2.3-1.7S82.1,91,81,91
                    c-1.1,0-2.2,0.2-3.1,0.6c-0.9,0.4-1.7,1-2.3,1.7c-0.6,0.7-1.1,1.5-1.5,2.5c-0.3,0.9-0.5,1.9-0.5,3c0,1,0.2,2,0.5,2.9
                    s0.8,1.8,1.4,2.5c0.6,0.7,1.4,1.3,2.3,1.8C78.8,106.5,79.8,106.7,81,106.7z"
                    
                    variants={landing ? opacVar : pathVar}
                    initial="hid"
                    animate="show"
                    
                />
                <motion.polygon className="st0 highEndK" points="49,66.3 44,56.8 15.1,30.4 10,30.4 28.2,47.4 30.6,49.4"
                    variants={landing ? opacVar : pathVar}
                    initial="hid"
                    animate="show"                        
                />
                <motion.polygon className="st0 lowEndK" points="13.2,71.8 31.4,49.1 28.6,46.2 8.3,71.8"
                    variants={landing ? opacVar : pathVar}
                    initial="hid"
                    animate="show"
                />
                <motion.path className="st0 iOfB" d="M42.1,55l-0.2-42h0.7h2.7h0.6v30.8c0,0-2.5,12.3-2.5,12.4"
                    variants={landing ? opacVar : pathVar}
                    initial="hid"
                    animate="show"
                />
                <motion.path className="st0 circleOfB" 
                    d="M62.5,71.5c-11.2,0-20-9-20-20.6c0-11.4,9-20.2,20.4-20.2c11.3,0,19.8,8.8,19.8,20.5
                    C82.7,62.5,73.8,71.5,62.5,71.5z M63,33.6c-9.8,0-17.4,7.6-17.4,17.2c0,9.8,7.5,17.6,17,17.6c9.7,0,17.2-7.6,17.2-17.3
                    C79.7,41.2,72.5,33.6,63,33.6z"
                    variants={landing ? opacVar : pathVar}
                    initial="hid"
                    animate="show"
                />
                <motion.rect x="4.5" y="1.5" className="st2 rectangle-frame" width="83" height="83"

                    fill = "none"
                    strokeWidth="3"
                    stroke="#E6E6E6"
                    strokeLinecap="round"

                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={landing ? {
                        default: { duration: .5, ease: "easeInOut" }
                    } : {
                        default: { duration: 1.75, ease: "easeInOut" }
                    }}
                />
            </motion.svg>
        </SvgWrapper>
    )
}

export default SmallLogo