// src/styles/GlobalStyles.js
import { createGlobalStyle } from 'styled-components';
import bg from "../../images/bg.jpg";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background: url(${bg}) no-repeat center center fixed;
    background-size: cover;
    height: 100vh;
    overflow-x: hidden;
  }
`;
