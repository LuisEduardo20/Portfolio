import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --black: #212529;
    --white: #DEE2E6;

    --input-background: #F8F9FA;
    --input-placeholder: #ADB5BD;
    --send-button-background: #495057;
  }

  * {
    margin: 0;
    padding: 0;
    
    box-sizing: border-box;
    
    font-family: 'Poppins', sans-serif;

    overflow-x: hidden;
  }

  html {
    @media (max-width: 1080px) {
      //? 93.75% de 16px igual 15px;
      //? ideal para acessibilidade em dispositivos que estão com a fonte maior ou menor
      font-size: 93.75%;
    }
    
    @media (max-width: 720px) {
      //? 87.5% de 16px igual 14px;
      //? ideal para acessibilidade em dispositivos que estão com a fonte maior ou menor
      font-size: 87.5%;
    }
  }

  body {
    width: 100vw;
    height: 100vh;
  }
`;
