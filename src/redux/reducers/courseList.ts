import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../config/store';
import { AppUserCourseDTO } from '../../interfaces/api';

export const courseListSlice = createSlice({
  name: 'courseList',
  initialState: {
    courseList: {} as AppUserCourseDTO
  },
  reducers: {
    setUserCourseList: (state, action) => {
      state.courseList = action.payload;
    }
  }
});

export const { setUserCourseList } = courseListSlice.actions;

export const selectCourseList = (state: RootState) =>
  state.courseList.courseList;

export default courseListSlice.reducer;
