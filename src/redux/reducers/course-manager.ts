import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../config/store';
import produce from 'immer';
import {
  AppUserCourseDTO,
  Course,
  CourseCreateDTO,
  CourseDTO,
  Lesson,
  Section
} from '../../interfaces/api';

interface moveLessonProps {
  moveFrom: number;
  moveTo: number;
  prevIndex: number;
  newIndex: number;
}

export const courseManagerSlice = createSlice({
  name: 'courseManager',
  initialState: {
    sectionList: [] as Section[],
    course: {} as CourseDTO,
    lesson: {} as Lesson
  },
  reducers: {
    setSectionList: (state, action) => {
      state.sectionList = action.payload;
    },
    setCourse: (state, action) => {
      state.course = action.payload;
    },
    setLesson: (state, action) => {
      state.lesson = action.payload;
    },
    moveLesson: (state, action: PayloadAction<moveLessonProps>) => {
      const { moveFrom, moveTo, prevIndex, newIndex } = action.payload;
      state.sectionList = produce(state.sectionList, (draft) => {
        const lesson: Lesson = draft[moveFrom].lessons[prevIndex];
        draft[moveFrom].lessons.splice(prevIndex, 1);
        draft[moveTo].lessons.splice(newIndex, 0, lesson);
      });
    }
  }
});

export const { setSectionList, setCourse, setLesson, moveLesson } =
  courseManagerSlice.actions;

export const selectSectionList = (state: RootState) =>
  state.courseManager.sectionList;
export const selectCourse = (state: RootState) => state.courseManager.course;
export const selectLesson = (state: RootState) => state.courseManager.lesson;

export default courseManagerSlice.reducer;
