import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../config/store';
import { DARK_THEME, LIGHT_THEME } from '../../styles';

export const themeChangeSlice = createSlice({
  name: 'themeChange',
  initialState: {
    theme: DARK_THEME,
    current: 'dark'
  },
  reducers: {
    toggleTheme: (state) => {
      if (state.current === 'dark') {
        state.theme = LIGHT_THEME;
        state.current = 'light';
      } else {
        state.theme = DARK_THEME;
        state.current = 'dark';
      }
    }
  }
});

export const { toggleTheme } = themeChangeSlice.actions;

export const selectTheme = (state: RootState) => state.themeChange;

export default themeChangeSlice.reducer;
