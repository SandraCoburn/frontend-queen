import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    body {
    
         box-sizing: border-box;
         min-height: cal(100vh - 40px)
    
    }

    html, body {
        font-family:  Helvetica, Arial, sans-serif;
        font-style: normal;
        font-weight: 200;
        margin: 0;
        padding: 0;
       
        overflow: auto;
        overflow-x: hidden;
    }
    main {
         box-sizing: border-box;
        
    }

`;
