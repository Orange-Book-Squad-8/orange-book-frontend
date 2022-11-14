import { createSlice, PayloadAction, createSelector } from '@reduxjs/toolkit';
import { RootState } from '../config/store';
import { Course } from '../../interfaces/api';

export const activeCourseSlice = createSlice({
  name: 'activeCourse',
  initialState: {
    activeCourse: null as null | Course
  },
  reducers: {
    setActiveCourse: (state, action: PayloadAction<Course>) => {
      state.activeCourse = action.payload;
    }
  }
});

export const { setActiveCourse } = activeCourseSlice.actions;

export const selectActiveCourse = (state: RootState) =>
  state.activeCourse.activeCourse;

export const selectCourseLesson = createSelector(
  [selectActiveCourse, (state: RootState, lessonId: number) => lessonId],
  (activeCourse, lessonId) => {
    const lesson = activeCourse?.sections
      .flatMap((section) => section.lessons)
      .filter((lesson) => lesson.id === lessonId);

    return lesson ? lesson[0] : null;
  }
);

export default activeCourseSlice.reducer;
