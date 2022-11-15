import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../config/store';
import { Course, StackCategories } from '../../interfaces/api';
import { toCamelCase } from '../../utils';

export const availableCoursesSlice = createSlice({
  name: 'availableCourses',
  initialState: {
    courses: [] as Course[]
  },
  reducers: {
    setAvailableCourses: (state, action) => {
      state.courses = action.payload;
    }
  }
});

export const { setAvailableCourses } = availableCoursesSlice.actions;

export const selectOriginals = (state: RootState) => {
  return state.availableCourses.courses.filter(
    (course) => course.creator === 'Orange Originals'
  );
};

export const selectByUserPrefference = (state: RootState) => {
  return state.availableCourses.courses
    .filter((course) =>
      state.user.user.stackCategories?.includes(course.category)
    )
    .sort((courseA, courseB) => {
      if (
        courseA.creator === 'Orange Originals' &&
        courseB.creator !== 'Orange Originals'
      ) {
        return -1;
      }

      if (
        courseA.creator !== 'Orange Originals' &&
        courseB.creator === 'Orange Originals'
      ) {
        return 1;
      }

      return 0;
    });
};

export const selectFilteredByCategory = (state: RootState) => {
  const CATEGORIES: StackCategories[] = [
    'FRONT_END',
    'BACK_END',
    'FULLSTACK',
    'UI',
    'UX',
    'SOFT_SKILLS'
  ];
  const filteredCourses = {} as any;

  CATEGORIES.forEach((category) => {
    filteredCourses[toCamelCase(category)] = state.availableCourses.courses
      .filter((course) => course.category === category)
      .sort((courseA, courseB) => {
        if (
          courseA.creator === 'Orange Originals' &&
          courseB.creator !== 'Orange Originals'
        ) {
          return -1;
        }

        if (
          courseA.creator !== 'Orange Originals' &&
          courseB.creator === 'Orange Originals'
        ) {
          return 1;
        }

        return 0;
      });
  });

  return filteredCourses;
};

export default availableCoursesSlice.reducer;
