import { createGlobalStyle } from "styled-components";


// font-family: 'Raleway', sans-serif;
// font-family: 'Sora', sans-serif;
// font-family: 'Montserrat', sans-serif;

const GlobalStyles = createGlobalStyle`

    *,*::before,*::after, h2,h3,h4,h5,h6, a {
        padding:0;
        margin:0;
        font-family: 'Sora', sans-serif;
        color: inherit;
        text-decoration: none;
    }
    li {
        list-style: none;
    }
    h1 {
        font-family: 'Sora', sans-serif;
        font-weight: 300;
        letter-spacing: .3em;
        text-transform: uppercase;
        font-size: 5em;
        color: #E6E6E6;
        min-height: 160px;
        display: flex;
        align-items: center;
    }
    h2 {
        font-family: 'Montserrat', sans-serif;
        font-weight: 900;
        font-size: 40px;
        line-height: 49px;
        letter-spacing: 0.1em;
        text-transform: uppercase;
    }
    body {
        overflow-x: hidden;

        //for smoothScroll
        overscroll-behavior-y: none;
        user-select: none;

        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;

        background-color: #160D1C;

        &::-webkit-scrollbar-track {
            background-color: transparent;
        }

        &::-webkit-scrollbar {
            width: 0;
            background-color: transparent;
        }

        &::-webkit-scrollbar-thumb {
            background-color: transparent;
        }
    }
` 

export default GlobalStyles;