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

interface sectionListProps {
  sections: Section[],
  deletedSectionIds: number[],
}

const initialSectionList: sectionListProps = {
  deletedSectionIds: [],
  sections: [{
    name: 'list',
    id: 0,
    lessons: [{
      title: '',
      author: '',
      durationInMinutes: 0,
      id: 1,
      link: '',
      topic: '',
      contentType: 'BOOK',
      description: ''
    }]
  }]
};

export const courseManagerSlice = createSlice({
  name: 'courseManager',
  initialState: {
    sectionList: initialSectionList as sectionListProps,
    course: {} as CourseDTO,
    lesson: {
      lesson: {} as Lesson,
      isEditing: false,
      isOpen: false
    }
  },
  reducers: {
    setSectionList: (state, action: PayloadAction<Section[]>) => {
      state.sectionList.sections = action.payload;
    },
    setDeletedSectionIds: (state, action: PayloadAction<number[]>) => {
      state.sectionList.deletedSectionIds = action.payload;
    },
    setCourse: (state, action: PayloadAction<CourseDTO>) => {
      state.course = action.payload;
    },
    setLesson: (state, action: PayloadAction<Lesson>) => {
      state.lesson.lesson = action.payload;
    },
    setIsOpen: (state, action: PayloadAction<boolean>) => {
      state.lesson.isOpen = action.payload;
    },
    setIsEditing: (state, action: PayloadAction<boolean>) => {
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
  state.courseManager.sectionList;
export const selectCourse = (state: RootState) => state.courseManager.course;
export const selectLesson = (state: RootState) => state.courseManager.lesson.lesson;
export const selectIsOpen = (state: RootState) => state.courseManager.lesson.isOpen;
export const selectIsEditing = (state: RootState) => state.courseManager.lesson.isEditing;
export const selectDeletedSectionIds = (state: RootState) => state.courseManager.sectionList.deletedSectionIds;

export default courseManagerSlice.reducer;
