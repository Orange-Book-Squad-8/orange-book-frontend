import { configureStore } from '@reduxjs/toolkit';
import {
  user,
  activeCourse,
  courseList,
  courseManager,
  availableCourses,
  themeChange
} from '../reducers';

export const store = configureStore({
  reducer: {
    user,
    activeCourse,
    courseList,
    courseManager,
    availableCourses,
    themeChange
  }
});

export type RootState = ReturnType<typeof store.getState>;
