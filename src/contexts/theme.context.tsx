import React from 'react';
import { ThemeProvider } from 'styled-components';
import { DARK_THEME } from '../styles';

interface IThemeProps {
  children: React.ReactNode;
}

function ThemeContextProvider({ children }: IThemeProps) {
  return <ThemeProvider theme={DARK_THEME}>{children}</ThemeProvider>;
}

export default ThemeContextProvider;
