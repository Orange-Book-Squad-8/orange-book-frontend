import { configureStore } from '@reduxjs/toolkit';
import { user, activeCourse, courseList, courseManager } from '../reducers';

export const store = configureStore({
  reducer: {
    user,
    activeCourse,
    courseList,
    courseManager
  }
});

export type RootState = ReturnType<typeof store.getState>;
