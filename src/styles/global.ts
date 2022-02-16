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
  }

  body {
    width: 100vw;
    height: 100vh;
  }
`;
