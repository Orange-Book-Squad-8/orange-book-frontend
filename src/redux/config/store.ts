import { configureStore } from '@reduxjs/toolkit';
import activeCourse from '../reducers/activeCourse';
import user from '../reducers/user';
import courseList from '../reducers/courseList';
import courseManager from '../reducers/courseManager';

export const store = configureStore({
  reducer: {
    user,
    activeCourse,
    courseList,
    courseManager
  }
});

export type RootState = ReturnType<typeof store.getState>;
