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

export const selectOriginalCourses = (state: RootState) =>
  state.courseList.courseList.subscribedCourses?.filter(
    (course) => course.creator === 'Orange Originals'
  );

export const selectPlaylists = (state: RootState) =>
  state.courseList.courseList.subscribedCourses?.filter(
    (course) => course.creator !== 'Orange Originals'
  );

export default courseListSlice.reducer;
