import {
  AppUserCourseDTO,
  Course,
  CourseDTO,
  Difficulty,
  Lesson,
  Section,
  StackCategories
} from '../interfaces/api';

const CATEGORIES: StackCategories[] = [
  'FRONT_END',
  'BACK_END',
  'FULLSTACK',
  'UI',
  'UX',
  'SOFT_SKILLS'
];

const DIFFICULTY: Difficulty[] = [
  'BEGINNER',
  'INTERMEDIATE',
  'ADVANCED',
  'FULL_FORMATION'
];

const CREATORS: string[] = [
  'CREATOR 1',
  'CREATOR 2',
  'CREATOR 3',
  'Orange Originals'
];

function sumLessons(total: number, section: Section): number {
  return total + section.lessons.length;
}

function randomValue(arr: string[] | Difficulty[] | StackCategories[]) {
  const { length } = arr;
  const index = Math.floor(Math.random() * length);
  return arr[index];
}

export function getLesson(times: number) {
  let lessons: Lesson[] = [];
  for (let i = 0; i < times; i++) {
    lessons.push({
      id: 100 + 1 * i,
      author: 'author' + i,
      contentType: 'ARTICLE',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer facilisis non velit non fringilla. Nunc sit amet risus pellentesque, aliquam quam eget, laoreet ex. Vestibulum volutpat mi nec quam aliquet, in tincidunt lectus scelerisque. Nullam viverra malesuada varius. Quisque non metus molestie tortor mollis bibendum et quis tortor. Duis eu bibendum sapien, a gravida turpis. Praesent non dolor est. Cras ultrices, nisl vel feugiat placerat, arcu mauris consectetur nisi, tincidunt vehicula ex augue ac nisl. Proin massa erat, mollis vitae interdum ac, venenatis eget lectus. Nunc volutpat sapien tortor, at fermentum ex congue ac.',
      durationInMinutes: Math.round(Math.random() * 10),
      link: 'www.site.com',
      title: 'title ' + i,
      topic: 'topic ' + i
    });
  }
  return lessons;
}

export function getSection(times: number, lessons: Lesson[]) {
  let sections: Section[] = [];
  let lessonPerSection = Math.floor(lessons.length / times);
  for (let i = 0; i < times; i++) {
    let tempLesson: Lesson[] = [];

    for (let index = 0; index < lessonPerSection; index++) {
      tempLesson[index] = lessons[index + i * lessonPerSection];
    }

    sections.push({
      id: 1000 + i * 1,
      name: 'section ' + i,
      lessons: tempLesson
    });
  }
  return sections;
}

export function getCourse(
  times: number,
  sections: Section[],
  category: StackCategories,
  creator: string
) {
  let courses: Course[] = [];
  let sectionPerCourse = Math.floor(sections.length / times);

  for (let i = 0; i < times; i++) {
    let tempSection: Section[] = [];

    for (let index = 0; index < sectionPerCourse; index++) {
      tempSection[index] = sections[index + i * sectionPerCourse];
    }

    courses.push({
      id: 1000 + i * 1,
      title: 'title ' + i,
      category: category,
      creator: creator,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer facilisis non velit non fringilla. Nunc sit amet risus pellentesque, aliquam quam eget, laoreet ex. Vestibulum volutpat mi nec quam aliquet, in tincidunt lectus scelerisque. Nullam viverra malesuada varius. Quisque non metus molestie tortor mollis bibendum et quis tortor. Duis eu bibendum sapien, a gravida turpis. Praesent non dolor est. Cras ultrices, nisl vel feugiat placerat, arcu mauris consectetur nisi, tincidunt vehicula ex augue ac nisl. Proin massa erat, mollis vitae interdum ac, venenatis eget lectus. Nunc volutpat sapien tortor, at fermentum ex congue ac.',
      difficulty: randomValue(DIFFICULTY) as Difficulty,
      visible: true,
      sections: tempSection
    });
  }
  return courses;
}

export function courseMapper(course: Course) {
  const { category, creator, description, difficulty, id, title, visible } =
    course;
  //const totalLessons = 0;

  const totalLessons = course.sections.reduce(sumLessons, 0);
  const courseDTO: CourseDTO = {
    category,
    creator,
    description,
    difficulty,
    id,
    title,
    visible,
    totalLessons
  };
  return courseDTO;
}

export const createCourses = (times = 10) => {
  const lessons = getLesson(1);
  const sections = getSection(1, lessons);
  const courses = [];
  for (let i = 0; i < times; i++) {
    courses.push(
      ...getCourse(
        1,
        sections,
        randomValue(CATEGORIES) as StackCategories,
        randomValue(CREATORS)
      )
    );
  }

  return courses;
};

export const createUserCourse = () => {};
