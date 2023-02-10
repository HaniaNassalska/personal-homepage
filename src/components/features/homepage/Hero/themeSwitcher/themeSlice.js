import { createSlice } from '@reduxjs/toolkit';
import { getThemeFromLocalStorage } from './themeLocalStorage';

const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    lightTheme: getThemeFromLocalStorage(),

  },
  reducers: {
    toggleTheme: state => {
      state.lightTheme = !state.lightTheme;
    }
  }
});

export const {
  toggleTheme
} = themeSlice.actions;

export const selectThemeState = state => state.theme;
export const selectTheme = state => selectThemeState(state).lightTheme;

export default themeSlice.reducer;

