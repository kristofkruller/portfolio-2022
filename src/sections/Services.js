import { motion } from 'framer-motion'
import React, {useEffect} from 'react'
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
        display: grid;
        gap: 20px;
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
        max-width: calc(100% - 350px); 
        overflow: hidden;
    }

`
const ServicesBox = styled.article`
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
    }
`

const Services = (props) => {
    const { landing, language } = useStateContext();
    const content = contentProv(props,"Services",language)
      
    return (
        <>{ landing ? 
            <ServicesWrap>
                <h1>{content.Title}</h1>
                <div className='overflow'> 
                <div className='horizontalScroller'>
                     
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
                    </div> 
                </div>
            </ServicesWrap>
        : <></> } </>
    )
}

export default Services