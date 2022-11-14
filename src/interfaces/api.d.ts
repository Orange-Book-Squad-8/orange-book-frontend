/* tslint:disable */
/* eslint-disable */

// Generated using typescript-generator version 2.35.1025 on 2022-11-09 09:28:25.

export interface AddCourseToUserDTO {
  userId: number;
  courseId: number;
}

export interface AppUserCourseDTO {
  subscribedCourses: CourseDTO[];
  archivedCourses: CourseDTO[];
  myCourses: CourseDTO[];
  watchedLesson: { [index: string]: number[] };
}

export interface AppUserDTO {
  id: number;
  username: string;
  email: string;
  stackCategories: StackCategories[];
  badges: string[];
  role: Role;
}

export interface UserCreateDTO {
  username: string;
  password: string;
  email: string;
  stackCategories: StackCategories[];
  role: string;
}

export interface UserLoginDTO {
  username: string;
  password: string;
}

export interface CourseCreateDTO {
  title: string;
  description: string;
  creator: string;
  category: StackCategories;
  difficulty: Difficulty;
  visible: boolean;
}

export interface CourseCreateDTOBuilder {}

export interface CourseCreateSectionDTO {
  courseId: number;
  sectionName: string;
}

export interface CourseDTO {
  id: number;
  title: string;
  description: string;
  creator: string;
  category: StackCategories;
  difficulty: Difficulty;
  visible: boolean;
  totalLessons: number;
}

export interface CourseEditDTO {
  id: number;
  title: string;
  description: string;
  creator: string;
  category: StackCategories;
  difficulty: Difficulty;
  visible: boolean;
  totalLessons: number;
  sections: Section[];
  deletedSectionIds: number[];
}

export interface CourseRemoveSectionDTO {
  courseId: number;
  sectionId: number;
}

export interface LessonCreateDTO {
  title: string;
  description: string;
  author: string;
  link: string;
  topic: string;
  contentType: ContentType;
  durationInMinutes: number;
}

export interface LessonDTO {
  id: number;
  title: string;
  description: string;
  author: string;
  link: string;
  topic: string;
  contentType: ContentType;
  durationInMinutes: number;
}

export interface RoleCreateDTO {
  roleName: string;
}

export interface RoleDTO {
  id: number;
  roleName: string;
}

export interface SectionAddLessonDTO {
  sectionId: number;
  lessonId: number;
}

export interface SectionCreateDTO {
  name: string;
}

export interface SectionCreateDTOBuilder {}

export interface SectionDTO {
  id: number;
  name: string;
}

export interface SetWatchedLessonDTO {
  userId: number;
  lessonId: number;
}

export interface Course {
  id: number;
  title: string;
  description: string;
  creator: string;
  category: StackCategories;
  difficulty: Difficulty;
  visible: boolean;
  sections: Section[];
}

export interface Role {
  id: number;
  name: string;
}

export interface Section {
  id: number;
  name: string;
  lessons: Lesson[];
}

export interface Lesson {
  id: number;
  title: string;
  description: string;
  author: string;
  link: string;
  topic: string;
  contentType: ContentType;
  durationInMinutes: number;
}

export type ContentType = 'VIDEO' | 'ARTICLE' | 'COURSE' | 'BOOK';

export type Difficulty =
  | 'BEGINNER'
  | 'INTERMEDIATE'
  | 'ADVANCED'
  | 'FULL_FORMATION';

export type StackCategories =
  | 'FRONT_END'
  | 'BACK_END'
  | 'FULLSTACK'
  | 'UI'
  | 'UX'
  | 'SOFT_SKILLS';
