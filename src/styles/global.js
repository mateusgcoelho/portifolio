import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
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
        color: #202023;
    }

    :-moz-selection {
        z-index: 0;
        position: relative;

        min-height: 100%;

        background: #ffff;
        color: #202023;

        font-family: "Fira Code", Arial, Helvetica, sans-serif;

        overflow-x: hidden;
        scroll-behavior: smooth;
        
        -webkit-overflow-scrolling: touch;
    }

    body {
        z-index: 0;
        position: relative;

        min-height: 100%;

        background: #ffff;
        color: #202023;

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
