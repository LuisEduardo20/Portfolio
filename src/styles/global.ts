import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --black: #212529;
    --white: #DEE2E6;

    --input-background: #F8F9FA;
    --input-placeholder: #ADB5BD;
    --button-background: #495057;
  }

  * {
    margin: 0;
    padding: 0;
    
    box-sizing: border-box;
    
    font-family: 'Poppins', sans-serif;

    
  }

  *::-webkit-scrollbar {
    width: 15px;
  }

  *::-webkit-scrollbar-track {
    background: var(--black);
  }

  *::-webkit-scrollbar-thumb {
    background-color: var(--button-background);
    border-radius: 10px;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }
    
    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    width: 100vw;
    height: 100vh;

    overflow-x: hidden;
  }
`;
