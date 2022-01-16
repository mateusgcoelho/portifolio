import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    :root {
        --background: #000000;
        --white: #f7f7f7;

        --general-texts: #888;

        --header-border-bottom: inset 0 -1px 0 0 hsla(0,0%,100%,0.1);

        --font: "Inter", -apple-system, BlinkMacSystemFont,"Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue",sans-serif;
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
    }

    :-moz-selection {
        z-index: 0;
        position: relative;

        min-height: 100%;

        background: var(--background);
        color: var(--white);

        font-family: var(--font);
        
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

        font-family: var(--font);

        overflow-x: hidden;
        scroll-behavior: smooth;
        
        -webkit-overflow-scrolling: touch;
    }

    button {
        cursor: pointer;
        border: 0;
    }
`;
