import { motion } from 'framer-motion'
import React, {useRef, useEffect, useState} from 'react'
import styled from 'styled-components'
import { contentProv } from '../App'
import { useStateContext } from '../components/StateContext'

const ServicesWrap = styled(motion.section)`

    &, & * { color: ${props => props.theme.white}; }

    background-color: ${props => props.theme.dark};
    justify-content: center;
    align-items: center;
    padding: 0 175px;

    .horizontalScroller {
        position: fixed;
        top: 35vh;
        display: flex;

        overflow: visible;

        ::-webkit-scrollbar {
            width: 0;
        }
    }

    .overflow {
        width: 100%;
    }

`
const ServicesBox = styled(motion.article)`

    display: flex;
    width: 100vw;
    padding: 20px;

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
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;    
    }
`
const Services = (props) => {

    const { language, logoViewState, servicesDisplay, setServices } = useStateContext();

    const content = contentProv(props,"Services",language)

    //scroll

    const refScroll = useRef(null)
    const refHorizontal = useRef(null)

    useEffect(() => {
        const element = refScroll.current;
        const horizontal = refHorizontal.current;

        const horLength = horizontal.scrollWidth - window.innerWidth/1.3;

        const onScroll = () => {

            const style = horizontal.style;
            let scrollPos = window.scrollY + window.innerHeight;
            const articles = horizontal.children;

            if ( scrollPos < horLength - scrollPos / 4) {
                
                Object.values(articles).forEach(e => e.style.transform =`translateX(-${scrollPos / 4}px)`)

                element.style.height = horLength + "px";

                style.transform = "translateX(-"+(scrollPos)+"px)"

            }

            if ( scrollPos > horLength - scrollPos / 4) {
                setServices(true); // this sets the services section on display none and opacity 0. will be setted back by portfolio section.
            }
   
        }

        window.addEventListener('scroll', onScroll)
        
        return () => window.removeEventListener('scroll', onScroll)
    }, [])
    
    return (
        <ServicesWrap
        id="servicesWrap"
        style={servicesDisplay ? {display:"none"} : {display:"flex"}}
        initial={{opacity: 0}} 
        animate={logoViewState && !servicesDisplay ? {opacity: 1} : {opacity:0}}
        >
            <motion.div className='overflow' ref={refScroll} >
                <motion.div 

                style={{
                    transform: `translateX(-${window.scrollY + window.innerHeight}px)`,
                    opacity: `${!logoViewState ? "0" : "1"}`
                }}

                className='horizontalScroller'
                ref={refHorizontal}
                >
                    <ServicesBox style={{visibility: "hidden"}} />  
                    {/* 465.5 to 1920 */}
                    <ServicesBox >  
                        <motion.div id="content" style={servicesDisplay ? {visibility:"hidden"} : {visibility:"visible"}}>
                            <h2>{content.Content1[0]}</h2>
                            <div>{content.Content1[1]}</div>
                            <button>{content.Content1[2]}</button>
                        </motion.div>
                        <motion.div id="illustration"
                            whileHover={{cursor: "grab"}}
                            whileDrag={{cursor: "grabbing"}}
                            drag
                            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                        >
                            <svg width="401" height="121" viewBox="0 0 401 121" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M40.6869 55.6V60.72L6.36688 72.4V67.52L40.6869 55.6ZM6.36688 70.96L40.6869 82.64V87.6L6.36688 75.76V70.96ZM10.6869 69.12V74.24H8.52688V69.12H10.6869Z" fill="#E6E6E6"/>
                                <path d="M306.188 92.8L322.508 25.6H328.108L311.788 92.8H306.188ZM360.367 77.68V72.56L394.687 60.88V65.76L360.367 77.68ZM394.687 62.32L360.367 50.64V45.68L394.687 57.52V62.32ZM390.367 64.16V59.04H392.527V64.16H390.367Z" fill="#E6E6E6"/>
                                <path d="M179.158 88.5824L178.945 79.2802L127.747 32.5576H118.187L152.178 64.2698L156.639 67.8638L179.158 88.5824ZM124.135 109.724L158.126 67.441L153.027 61.9442L115 109.724H124.135Z" fill="#E6E6E6"/>
                                <path d="M184.044 93.6566C183.832 93.0223 183.194 91.5424 183.194 91.5424C180.008 85.6228 180.433 79.069 180.433 71.2466C180.433 63.0015 181.92 56.0248 185.106 50.3166C188.293 44.397 192.754 39.9573 198.278 36.7861C203.801 33.6149 209.962 32.135 216.973 32.135C224.408 32.135 230.782 33.8263 236.518 37.2089C242.466 40.3801 246.927 45.0313 250.114 50.9509C253.513 56.8705 255.213 63.6357 255.213 71.4581C255.213 79.069 253.513 86.0457 250.114 91.9653C246.927 97.8849 242.253 102.536 236.518 105.919C230.782 109.09 224.196 110.781 216.973 110.781C209.962 110.358 196.578 108.456 184.044 93.6566ZM178.096 87.5256L177.704 0H178.945H184.044H185.106V57.5047C185.106 57.5047 185.106 57.5047 185.106 57.7161L183.619 71.0352V71.2466L184.894 84.5658L185.106 94.878M216.335 103.804C222.284 103.804 227.595 102.536 232.481 99.7876C237.155 97.0392 240.979 93.2337 243.741 88.1598C246.502 83.2973 247.989 77.5891 247.989 71.0352C247.989 64.4814 246.502 58.7732 243.741 54.1221C240.979 49.2596 237.367 45.4541 232.481 42.7057C227.807 39.9573 222.284 38.4774 216.335 38.4774C210.387 38.4774 205.076 39.9573 200.19 42.7057C195.516 45.4541 191.904 49.2596 188.93 54.1221C186.168 58.9846 184.894 64.6928 184.894 71.0352C184.894 77.3777 186.168 83.0859 188.93 88.1598C191.692 93.0223 195.516 97.0392 200.19 99.7876C205.076 102.325 210.387 103.804 216.335 103.804Z" fill="#E6E6E6"/>
                            </svg>
                        </motion.div>
                    </ServicesBox>
                    <ServicesBox style={{}} >    
                        <motion.div id="content" style={servicesDisplay ? {visibility:"hidden"} : {visibility:"visible"}}>
                            <h2>{content.Content2[0]}</h2>
                            <div>{content.Content2[1]}</div>
                            <button>{content.Content2[2]}</button>
                        </motion.div>
                        <motion.div id="illustration"
                            whileHover={{cursor: "grab"}}
                            whileDrag={{cursor: "grabbing"}}
                            drag
                            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                        >
                            <svg width="224" height="365" viewBox="0 0 224 365" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M109.158 151.582L108.945 142.28L57.7466 95.5576H48.1866L82.1775 127.27L86.6388 130.864L109.158 151.582ZM54.1351 172.724L88.1259 130.441L83.0273 124.944L45 172.724H54.1351Z" fill="#E6E6E6"/>
                                <path d="M114.044 156.657C113.832 156.022 113.194 154.542 113.194 154.542C110.008 148.623 110.433 142.069 110.433 134.247C110.433 126.001 111.92 119.025 115.106 113.317C118.293 107.397 122.754 102.957 128.278 99.7861C133.801 96.6149 139.962 95.135 146.973 95.135C154.408 95.135 160.782 96.8263 166.518 100.209C172.466 103.38 176.927 108.031 180.114 113.951C183.513 119.87 185.213 126.636 185.213 134.458C185.213 142.069 183.513 149.046 180.114 154.965C176.927 160.885 172.253 165.536 166.518 168.919C160.782 172.09 154.196 173.781 146.973 173.781C139.962 173.358 126.578 171.456 114.044 156.657ZM108.096 150.526L107.704 63H108.945H114.044H115.106V120.505C115.106 120.505 115.106 120.505 115.106 120.716L113.619 134.035V134.247L114.894 147.566L115.106 157.878M146.335 166.804C152.284 166.804 157.595 165.536 162.481 162.788C167.155 160.039 170.979 156.234 173.741 151.16C176.502 146.297 177.989 140.589 177.989 134.035C177.989 127.481 176.502 121.773 173.741 117.122C170.979 112.26 167.367 108.454 162.481 105.706C157.807 102.957 152.284 101.477 146.335 101.477C140.387 101.477 135.076 102.957 130.19 105.706C125.516 108.454 121.904 112.26 118.93 117.122C116.168 121.985 114.894 127.693 114.894 134.035C114.894 140.378 116.168 146.086 118.93 151.16C121.692 156.022 125.516 160.039 130.19 162.788C135.076 165.325 140.387 166.804 146.335 166.804Z" fill="#E6E6E6"/>
                                <rect x="1.5" y="1.5" width="221" height="362" rx="18.5" stroke="#E6E6E6" strokeWidth="3"/>
                                <circle cx="111.5" cy="329.5" r="14" stroke="#E6E6E6" strokeWidth="3"/>
                            </svg>
                        </motion.div>
                    </ServicesBox>
                    <ServicesBox >    
                        <motion.div id="content" style={servicesDisplay ? {visibility:"hidden"} : {visibility:"visible"}}>
                            <h2>{content.Content3[0]}</h2>
                            <div>{content.Content3[1]}</div>
                            <button>{content.Content3[2]}</button>
                        </motion.div>
                        <motion.div id="illustration"
                            whileHover={{cursor: "grab"}}
                            whileDrag={{cursor: "grabbing"}}
                            drag
                            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                        >
                            <svg width="268" height="227" viewBox="0 0 268 227" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M64.1578 204.475L63.9454 195.173L12.7466 148.45H3.18665L37.1775 180.162L41.6388 183.756L64.1578 204.475ZM9.13505 225.616L43.1259 183.333L38.0273 177.837L0 225.616H9.13505Z" fill="#E6E6E6"/>
                                <path d="M69.0441 209.549C68.8316 208.915 68.1943 207.435 68.1943 207.435C65.0076 201.515 65.4325 194.961 65.4325 187.139C65.4325 178.894 66.9196 171.917 70.1063 166.209C73.2929 160.289 77.7542 155.85 83.2778 152.678C88.8013 149.507 94.9621 148.027 101.973 148.027C109.408 148.027 115.782 149.719 121.518 153.101C127.466 156.272 131.927 160.924 135.114 166.843C138.513 172.763 140.213 179.528 140.213 187.35C140.213 194.961 138.513 201.938 135.114 207.858C131.927 213.777 127.253 218.428 121.518 221.811C115.782 224.982 109.196 226.673 101.973 226.673C94.9621 226.251 81.5782 224.348 69.0441 209.549ZM63.0957 203.418L62.7036 115.892H63.9454H69.0441H70.1063V173.397C70.1063 173.397 70.1063 173.397 70.1063 173.608L68.6192 186.928V187.139L69.8938 200.458L70.1063 210.77M101.335 219.697C107.284 219.697 112.595 218.428 117.481 215.68C122.155 212.932 125.979 209.126 128.741 204.052C131.502 199.19 132.989 193.481 132.989 186.928C132.989 180.374 131.502 174.666 128.741 170.014C125.979 165.152 122.367 161.346 117.481 158.598C112.807 155.85 107.284 154.37 101.335 154.37C95.387 154.37 90.0759 155.85 85.1897 158.598C80.516 161.346 76.9045 165.152 73.9303 170.014C71.1685 174.877 69.8938 180.585 69.8938 186.928C69.8938 193.27 71.1685 198.978 73.9303 204.052C76.692 208.915 80.516 212.932 85.1897 215.68C90.0759 218.217 95.387 219.697 101.335 219.697Z" fill="#E6E6E6"/>
                                <mask id="path-3-inside-1_0_1" fill="white">
                                    <path d="M220.026 20.5027L246.176 47.2025L154.487 137.003C153.698 137.776 152.431 137.763 151.658 136.973L128.307 113.131C127.535 112.342 127.548 111.076 128.337 110.303L220.026 20.5027Z"/>
                                </mask>
                                <path d="M220.026 20.5027L246.176 47.2025L154.487 137.003C153.698 137.776 152.431 137.763 151.658 136.973L128.307 113.131C127.535 112.342 127.548 111.076 128.337 110.303L220.026 20.5027Z" stroke="#E6E6E6" strokeWidth="6" mask="url(#path-3-inside-1_0_1)"/>
                                <path d="M154.236 135.74L113.365 150.682L129.573 110.558L154.236 135.74Z" stroke="#E6E6E6" strokeWidth="3"/>
                                <line x1="121.45" y1="132.742" x2="131.91" y2="143.421" stroke="#E6E6E6" strokeWidth="2"/>
                                <line x1="226.568" y1="31.1882" x2="137.456" y2="118.465" stroke="#E6E6E6" strokeWidth="2"/>
                                <path d="M227.751 15.0364C234.533 8.39503 245.414 8.50826 252.055 15.2894C258.696 22.0705 258.583 32.9515 251.802 39.593L244.196 47.0426L220.145 22.4861L227.751 15.0364Z" stroke="#E6E6E6" strokeWidth="3"/>
                            </svg>
                        </motion.div>
                    </ServicesBox>
                </motion.div> 
            </motion.div>
        </ServicesWrap>
    )
}

export default Services