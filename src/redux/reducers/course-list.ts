import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../config/store';
import { AppUserCourseDTO } from '../../interfaces/api';

export const courseListSlice = createSlice({
  name: 'courseList',
  initialState: {
    courseList: {} as AppUserCourseDTO
  },
  reducers: {
    setUserCourseList: (state, action: PayloadAction<AppUserCourseDTO>) => {
      state.courseList = action.payload;
    },
    setWatchedLesson: (state, action) => {
      state.courseList.watchedLesson = action.payload;
    }
  }
});

export const { setUserCourseList, setWatchedLesson } = courseListSlice.actions;

export const selectCourseList = (state: RootState) =>
  state.courseList.courseList;
export const selectWatchedLessons = (state: RootState) =>
  state.courseList.courseList.watchedLesson;

export const selectOriginalCourses = (state: RootState) =>
  state.courseList.courseList.subscribedCourses?.filter(
    (course) => course.creator === 'Orange Originals'
  );

export const selectPlaylists = (state: RootState) =>
  state.courseList.courseList.subscribedCourses?.filter(
    (course) => course.creator !== 'Orange Originals'
  );
export const selectMyCourses = (state: RootState) =>
  state.courseList.courseList?.myCourses;

export default courseListSlice.reducer;
