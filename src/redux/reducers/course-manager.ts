import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../config/store';
import produce from 'immer';
import { CourseDTO, Lesson, Section } from '../../interfaces/api';

interface moveLessonProps {
  moveFrom: number;
  moveTo: number;
  prevIndex: number;
  newIndex: number;
}

export const courseManagerSlice = createSlice({
  name: 'courseManager',
  initialState: {
    sectionList: {
      sections: [] as Section[],
      deletedSectionIds: [] as number[]
    },
    course: {} as CourseDTO,
    lesson: {
      lesson: {} as Lesson,
      isEditing: false,
      isOpen: false
    }
  },
  reducers: {
    setSectionList: (state, action) => {
      state.sectionList.sections = action.payload;
    },
    setDeletedSectionIds: (state, action) => {
      state.sectionList.deletedSectionIds = action.payload;
    },
    setCourse: (state, action) => {
      state.course = action.payload;
    },
    setLesson: (state, action) => {
      state.lesson.lesson = action.payload;
    },
    setIsOpen: (state, action) => {
      state.lesson.isOpen = action.payload;
    },
    setIsEditing: (state, action) => {
      state.lesson.isEditing = action.payload;
    },
    moveLesson: (state, action: PayloadAction<moveLessonProps>) => {
      const { moveFrom, moveTo, prevIndex, newIndex } = action.payload;
      state.sectionList.sections = produce(state.sectionList.sections, (draft) => {
        const lesson: Lesson = draft[moveFrom].lessons[prevIndex];
        draft[moveFrom].lessons.splice(prevIndex, 1);
        draft[moveTo].lessons.splice(newIndex, 0, lesson);
      });
    },
    editLesson: (state, action) => {
      state.sectionList.sections[0].lessons = produce(state.sectionList.sections[0].lessons, (draft) => {

        const editedLesson = draft.filter(lesson => lesson.id === action.payload.id);
        if (editedLesson.length > 0) {
          const editedLessonId = draft.indexOf(editedLesson[0]);
          draft.splice(editedLessonId, 1, action.payload);
        }
      });
    }
  }
});

export const {
  setSectionList,
  setCourse,
  setLesson,
  moveLesson,
  setDeletedSectionIds,
  setIsOpen,
  setIsEditing,
  editLesson
} =
  courseManagerSlice.actions;

export const selectSectionList = (state: RootState) =>
  state.courseManager.sectionList.sections;
export const selectAllLessons = (state: RootState) =>
  state.courseManager.sectionList.sections[0].lessons;
export const selectCourse = (state: RootState) => state.courseManager.course;
export const selectLesson = (state: RootState) => state.courseManager.lesson.lesson;
export const selectIsOpen = (state: RootState) => state.courseManager.lesson.isOpen;
export const selectIsEditing = (state: RootState) => state.courseManager.lesson.isEditing;
export const selectDeletedSectionIds = (state: RootState) => state.courseManager.sectionList.deletedSectionIds;

export default courseManagerSlice.reducer;
