import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../config/store';
import { AppUserDTO } from '../../interfaces/api';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: {} as AppUserDTO
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = {} as AppUserDTO;
    }
  }
});

export const { login, logout } = userSlice.actions;

export const selectUser = (state: RootState) => state.user.user;

export default userSlice.reducer;
