import { configureStore } from '@reduxjs/toolkit';
import {
  user,
  activeCourse,
  courseList,
  courseManager,
  availableCourses
} from '../reducers';

export const store = configureStore({
  reducer: {
    user,
    activeCourse,
    courseList,
    courseManager,
    availableCourses
  }
});

export type RootState = ReturnType<typeof store.getState>;
