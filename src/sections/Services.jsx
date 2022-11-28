import { motion, useInView
} from 'framer-motion'
import React, {useRef, useEffect} from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import { contentProv } from '../App'
import { useStateContext } from '../components/StateContext'

const ServicesWrap = styled(motion.section)`
    &, & * { color: ${props => props.theme.white}; }
    /* height: 100vh; */

    background-color: ${props => props.theme.dark};
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 175px;
    & > h1 {
        width: 100%;
        position: fixed;
        top: 0;
        left: 175px;
        /*sync with Stickies pos*/
        min-height: 160px;
        display: flex;
        align-items: center;
    }
    .horizontalScroller {
        /*gird based scroller version*/

        position: fixed;
        top: 35vh;
        /* display: grid;
        grid-auto-flow: column;
        grid-auto-columns: 100%; */
        display: flex;
        overflow: visible;
        /* overflow-x: auto; */
        overscroll-behavior-inline: contain;

        scroll-snap-type: inline mandatory;

        & > * {
            scroll-snap-align: start;
        } 

        ::-webkit-scrollbar {
            width: 0;
        }
    }
    .overflow {
        position: sticky;
        top: 0;
        left: 0;
        width: 100%;
        overflow: hidden; 
    }

`
const ServicesBox = styled(motion.article)`
    display: flex;
    width: 100vw;
    #content {
        width: 50%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        h2 {
            margin: 20px 0;
        }
        div {
            font-weight: 400;
            font-size: ${props => props.theme.fontlg};
        }
        button {
            margin: 40px 0;
            padding: .4em 2em;

            letter-spacing: 0.1em;
            text-transform: uppercase;

            font-weight: 300;
            font-size: ${props => props.theme.fontxl};
            line-height: 38px;
            background-color: ${props => props.theme.purple};
            align-self: flex-start;
        }
    }
    #illustration {
        width: 50%;
        background-color: pink;
    }
`

const Services = (props) => {
    const { language, logoViewState } = useStateContext();
    const content = contentProv(props,"Services",language)

    //scroll
    const refScroll = useRef(null)
    const refHorizontal = useRef(null)

    useEffect(() => {
        const element = refScroll.current;
        const horizontal = refHorizontal.current;

        const windowWidth = window.innerWidth;
        const horLength = horizontal.scrollWidth;
        const distFromTop = horizontal.offsetTop;
        const scrollDistance = distFromTop + horLength - windowWidth;
        
        const onScroll = (e) => {
            const scrollPos = window.scrollY + window.innerHeight
            const scrollTop = window.pageYOffset;
            const style = horizontal.style;
            // scrollTop >= distFromTop && scrollTop <= scrollDistance
            console.log(distFromTop)
            if (logoViewState) {
                element.style.height = horLength + "px"
                style.transform = "translateX(-"+(scrollPos)+"px)";
            } else {

            }
        }

        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])
    
    return (
        <ServicesWrap initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1.75}} >
            <h1>{content.Title}</h1>
            <motion.div className='overflow'ref={refScroll}>
                <motion.div whileTap={{ cursor: "grabbing" }} 
                className='horizontalScroller' 
                ref={refHorizontal}
                >
                    <ServicesBox>  
                        <div id="content">
                            <h2>{content.Content1[0]}</h2>
                            <div>{content.Content1[1]}</div>
                            <button>{content.Content1[2]}</button>
                        </div>
                        <div id="illustration"></div>
                    </ServicesBox>
                    <ServicesBox>    
                        <div id="content">
                            <h2>{content.Content2[0]}</h2>
                            <div>{content.Content2[1]}</div>
                            <button>{content.Content2[2]}</button>
                        </div>
                        <div id="illustration"></div>
                    </ServicesBox>
                    <ServicesBox>    
                        <div id="content">
                            <h2>{content.Content3[0]}</h2>
                            <div>{content.Content3[1]}</div>
                            <button>{content.Content3[2]}</button>
                        </div>
                        <div id="illustration"></div>
                    </ServicesBox>
                </motion.div> 
            </motion.div>
        </ServicesWrap>
    )
}

export default Services