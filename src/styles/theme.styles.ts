import { DefaultTheme } from 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    primary: string;
    primaryDarker: string;
    secondary: string;
    secondaryDarker: string;
    neutral: string;
    ubuntu: string;
  }
}

export const BASE_THEME = {
  ubuntu: "'Ubuntu', sans-serif"
};

export const DARK_THEME: DefaultTheme = {
  ...BASE_THEME,
  primary: '#303030',
  primaryDarker: '#202020',
  secondary: '#FFA000',
  secondaryDarker: '#FF7823',
  neutral: '#ccc'
};
