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
    font: 100%/1.5 ${({ theme }) => theme.ubuntu};
    background-color: ${({ theme }) => theme.primaryDarker};

    &::-webkit-scrollbar {
      background-color: ${({ theme }) => theme.primary};
      width: 10px;
      height: 10px;
      border: 1px solid black;
    }

    &::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) => theme.secondaryDarker};
      width: 5px;
      height: 5px;
      border: 1px solid black;
      border-radius: 3px;
    }

  }

  div#root {
    min-height: 100vh;
  }
`;
