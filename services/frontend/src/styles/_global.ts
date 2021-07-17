import { createGlobalStyle } from "styled-components"
import { normalize } from "styled-normalize"

const GlobalStyle = createGlobalStyle`
    ${normalize}

    * {
        -webkit-tap-highlight-color: transparent;
        outline: none;

        font-family: 'Comfortaa', sans-serif;
        font-size: 16px;
        font-weight: 400;
        line-height: 1.75;
        font-smooth: antialiased !important;
        -webkit-font-smoothing: antialiased !important;
    }

    button { cursor: pointer; }

    h1, h2, h3, h4, h5, h6, p, button {
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }

    h1, h2, h3, h4, h5 {
        margin: 3rem 0 1.38rem;
        line-height: 1.3;
    }

    h1 {
        margin-top: 0;
        font-size: 3.052rem;
    }
    h2 { font-size: 2.441rem; }
    h3 { font-size: 1.953rem; }
    h4 { font-size: 1.563rem; }
    h5 { font-size: 1.25rem; }
    p { margin-bottom: 1rem; }
    small { font-size: 0.8rem; }
`

export default GlobalStyle