import { AppUserCourseDTO, AppUserDTO, Course, Role } from '../interfaces/api';

export const userCourses = [
  {
    title: 'Trilha Fullstack',
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
    totalLessons: 55,
    finishedLessons: 47,
    image: 'dev.png'
  },
  {
    title: 'Trilha UX/UI',
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
    totalLessons: 72,
    finishedLessons: 39,
    image: 'ux.png'
  },
  {
    title: 'Trilha Quality Assurance',
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
    totalLessons: 46,
    finishedLessons: 11,
    image: 'qa.png'
  }
];

export const orangeBooks = [
  {
    title: 'Trilha Fullstack',
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
    image: 'dev.png'
  },
  {
    title: 'Trilha UX/UI',
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
    image: 'ux.png'
  },
  {
    title: 'Trilha Quality Assurance',
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
    image: 'qa.png'
  }
];

export const userRole: Role = {
  id: 10000,
  name: 'user'
};

export const adminRole: Role = {
  id: 10001,
  name: 'user'
};

export const mockedUser: AppUserDTO = {
  id: 1,
  badges: ['java'],
  email: 'email@email.com',
  role: userRole,
  stackCategories: ['FRONT_END', 'UX'],
  username: 'username'
};

export const courseList: AppUserCourseDTO = {
  subscribedCourses: [
    {
      id: 3,
      category: 'FRONT_END',
      creator: 'Orange Originals',
      description: 'asd',
      difficulty: 'BEGINNER',
      title: 'Do Front ao Fim, tudo sobre React',
      totalLessons: 9,
      visible: true
    }
  ],
  archivedCourses: [
    {
      id: 4,
      category: 'UX',
      creator: 'Orange Originals',
      description: 'asd',
      difficulty: 'ADVANCED',
      title: 'UX, a experiência é vida',
      totalLessons: 12,
      visible: true
    }
  ],
  myCourses: [
    {
      id: 5,
      category: 'UI',
      creator: 'username',
      description: 'asd',
      difficulty: 'FULL_FORMATION',
      title: 'teste',
      totalLessons: 2,
      visible: true
    }
  ],
  watchedLesson: [
    100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 200, 201
  ]
};

export const activeCourse: Course = {
  id: 3,
  category: 'FRONT_END',
  creator: 'Orange Originals',
  description: 'asd',
  difficulty: 'BEGINNER',
  title: 'Do Front ao Fim, tudo sobre React',
  visible: true,
  sections: [
    {
      id: 1000,
      lessons: [
        {
          id: 200,
          author: '',
          contentType: 'ARTICLE',
          description: '',
          durationInMinutes: 5,
          link: 'www.site.com',
          title: 'lorem 1',
          topic: ''
        },
        {
          id: 201,
          author: '',
          contentType: 'ARTICLE',
          description: '',
          durationInMinutes: 5,
          link: 'www.site.com',
          title: 'lorem 2',
          topic: ''
        },
        {
          id: 202,
          author: '',
          contentType: 'ARTICLE',
          description: '',
          durationInMinutes: 5,
          link: 'www.site.com',
          title: 'lorem 3',
          topic: ''
        }
      ],
      name: 'inicio'
    },
    {
      id: 1001,
      lessons: [
        {
          id: 204,
          author: '',
          contentType: 'ARTICLE',
          description: '',
          durationInMinutes: 5,
          link: 'www.site.com',
          title: 'lorem 4',
          topic: ''
        },
        {
          id: 205,
          author: '',
          contentType: 'ARTICLE',
          description: '',
          durationInMinutes: 5,
          link: 'www.site.com',
          title: 'lorem 5',
          topic: ''
        },
        {
          id: 206,
          author: '',
          contentType: 'ARTICLE',
          description: '',
          durationInMinutes: 5,
          link: 'www.site.com',
          title: 'lorem 6',
          topic: ''
        }
      ],
      name: 'meio'
    },
    {
      id: 1000,
      lessons: [
        {
          id: 207,
          author: '',
          contentType: 'ARTICLE',
          description: '',
          durationInMinutes: 5,
          link: 'www.site.com',
          title: 'lorem 6',
          topic: ''
        },
        {
          id: 208,
          author: '',
          contentType: 'ARTICLE',
          description: '',
          durationInMinutes: 5,
          link: 'www.site.com',
          title: 'lorem 8',
          topic: ''
        },
        {
          id: 209,
          author: '',
          contentType: 'ARTICLE',
          description: '',
          durationInMinutes: 5,
          link: 'www.site.com',
          title: 'lorem 9',
          topic: ''
        }
      ],
      name: 'fim'
    }
  ]
};
