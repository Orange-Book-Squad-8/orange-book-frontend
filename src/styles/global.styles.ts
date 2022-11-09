import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  html {
    min-height: 100%;
  }

  body {
    min-height: 100vh;
    font-family: ${({ theme }) => theme.ubuntu};
    background-color: ${({ theme }) => theme.primaryDarker};
  }

  div#root {
    min-height: 100vh;
  }
`;
