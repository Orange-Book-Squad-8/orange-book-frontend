import { configureStore } from '@reduxjs/toolkit';
import activeCourse from '../reducers/activeCourse';
import user from '../reducers/user';
import courseList from '../reducers/courseList';

export const store = configureStore({
  reducer: {
    user,
    activeCourse,
    courseList
  }
});

export type RootState = ReturnType<typeof store.getState>;
