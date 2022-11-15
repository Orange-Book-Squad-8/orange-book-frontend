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

export const selectPrevAndNextLessons = createSelector(
  [selectActiveCourse, (state: RootState, lessonId: number) => lessonId],
  (activeCourse, lessonId) => {
    const result =
      activeCourse?.sections
        ?.flatMap((section) => section.lessons)
        ?.map((lesson, index, lessons) => {
          if (lesson.id !== lessonId) return null;

          const prevAndNext = { prev: NaN, next: NaN };

          if (index - 1 >= 0) {
            prevAndNext.prev = lessons[index - 1]?.id;
          }

          if (index + 1 < lessons.length) {
            prevAndNext.next = lessons[index + 1]?.id;
          }

          return prevAndNext;
        })
        ?.filter(Boolean) || [];

    return result[0] || { prev: NaN, next: NaN };
  }
);

export default activeCourseSlice.reducer;
