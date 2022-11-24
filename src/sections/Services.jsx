import { motion, useInView, 
    // useMotionValue 
} from 'framer-motion'
import React, {useRef, useLayoutEffect} from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import { contentProv } from '../App'
import { useStateContext } from '../components/StateContext'

const ServicesWrap = styled.section`
    &, & * { color: ${props => props.theme.white}; }
    position: relative;
    height: 100vh;
    width: 100%;
    background-color: ${props => props.theme.dark};

    display: grid;
    justify-content: center;
    align-items: center;
    padding: 0 175px;
    & > h1 {
        width: 100%;

        /*sync with Stickies pos*/
        min-height: 160px;
        display: flex;
        align-items: center;
    }
    .horizontalScroller {
        /*grab based scroller version*/
        /* display: flex;
        width: 300%;
        overflow-x: auto; */

        /*gird based scroller version*/
        display: grid;
        grid-auto-flow: column;
        grid-auto-columns: 100%;
        overflow-x: auto;
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
        /* max-width: calc(100% - 350px); 
        overflow: hidden; */
    }

`
const ServicesBox = styled(motion.article)`
    height: 100%;
    width: 100%;
    overflow: hidden;
    display: flex;

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
    const { language } = useStateContext();
    const content = contentProv(props,"Services",language)
    // const scrollX = useMotionValue(0);
    // const scale = useTransform(scrollX, [0, 100], [0, 1]);

    const refScroll = useRef(null)
    const isInView = useInView(refScroll);

    useLayoutEffect(() => {
        const element = refScroll.current;
        const topPos = element.getBoundingClientRect().top
        const divHeight = element.offsetHeight
    
        const onScroll = () => {
            const scrollPos = window.scrollY + window.innerHeight
            
        }

        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [isInView])
    
    return (
        <ServicesWrap>
            <h1>{content.Title}</h1>
            <motion.div className='overflow'>
                <motion.div whileTap={{ cursor: "grabbing" }} 
                className='horizontalScroller' 
                ref={refScroll}
                // grab based scrolling version

                // drag="x"
                // dragConstraints={ref} style={{x: scrollX, cursor: "grab"}} 
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