import React from 'react';
import { ThemeProvider } from 'styled-components';
import { useSelector } from 'react-redux';
import { selectTheme } from '../redux/reducers';

interface IThemeProps {
  children: React.ReactNode;
}

function ThemeContextProvider({ children }: IThemeProps) {
  const { theme } = useSelector(selectTheme);

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export default ThemeContextProvider;
