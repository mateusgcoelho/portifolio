import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    :root {
        --background: #202023;
        --backgroundHover: #1a1a1c;
        --techCard: #1d1d1f; 
        --white: #f7f7f7;
        --whiteHover: #d4d4d4;

        --primary: #F560BC;
    }

    * {
      padding: 0;
      margin: 0;
      
      box-sizing: border-box;
    }

    html {
        scroll-behavior: smooth;
    }

    a {
        text-decoration: none;
        color: var(--whiteHover);
    }

    p, li {
        color: var(--whiteHover);
    }

    b {
        color: var(--white);
    }

    :-moz-selection {
        z-index: 0;
        position: relative;

        min-height: 100%;

        background: var(--background);
        color: var(--white);

        font-family: "Fira Code", Arial, Helvetica, sans-serif;

        overflow-x: hidden;
        scroll-behavior: smooth;
        
        -webkit-overflow-scrolling: touch;
    }

    body {
        z-index: 0;
        position: relative;

        min-height: 100%;

        background: var(--background);
        color: var(--white);

        font-family: "Fira Code", Arial, Helvetica, sans-serif;

        overflow-x: hidden;
        scroll-behavior: smooth;
        
        -webkit-overflow-scrolling: touch;
    }

    button {
        border: 0;

        font-weight: bold;
    }
`;
