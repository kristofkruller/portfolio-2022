import { createGlobalStyle } from "styled-components";


// font-family: 'Raleway', sans-serif;
// font-family: 'Sora', sans-serif;
const GlobalStyles = createGlobalStyle`

    *,*::before,*::after, h2,h3,h4,h5,h6, a {
        padding:0;
        margin:0;
        font-family: 'Raleway', sans-serif;
        color: inherit;
        text-decoration: none;
    }
    li {
        list-style: none;
    }
    h1 {
        font-family: 'Sora', sans-serif;
    }
    body {
        overflow-x: hidden;
    }
` 

export default GlobalStyles;