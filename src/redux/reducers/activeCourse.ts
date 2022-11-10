import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../config/store';
import { Course } from '../../interfaces/api';

export const activeCourseSlice = createSlice({
  name: 'activeCourse',
  initialState: {
    activeCourse: {} as Course
  },
  reducers: {
    setActiveCourse: (state, action) => {
      state.activeCourse = action.payload;
    }
  }
});

export const { setActiveCourse } = activeCourseSlice.actions;

export const selectActiveCourse = (state: RootState) =>
  state.activeCourse.activeCourse;

export default activeCourseSlice.reducer;
