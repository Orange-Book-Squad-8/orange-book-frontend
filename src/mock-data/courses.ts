import { AppUserCourseDTO, AppUserDTO, Course, Role } from '../interfaces/api';

export const userCourses = [
  {
    title: 'Trilha Fullstack',
    description:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.',
    totalLessons: 55,
    finishedLessons: 47,
    image: 'dev.png'
  },
  {
    title: 'Trilha UX/UI',
    description:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.',
    totalLessons: 72,
    finishedLessons: 39,
    image: 'ux.png'
  },
  {
    title: 'Trilha Quality Assurance',
    description:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.',
    totalLessons: 46,
    finishedLessons: 11,
    image: 'qa.png'
  }
];

export const orangeBooks = [
  {
    title: 'Trilha Fullstack',
    description:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.',
    image: 'dev.png'
  },
  {
    title: 'Trilha UX/UI',
    description:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.',
    image: 'ux.png'
  },
  {
    title: 'Trilha Quality Assurance',
    description:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.',
    image: 'qa.png'
  }
];

export const userRole: Role = {
  id: 12,
  name: 'user1'
};

export const adminRole: Role = {
  id: 13,
  name: 'admin'
};

export const mockedUser: AppUserDTO = {
  id: 1,
  badges: ['java'],
  email: 'email@email.com',
  role: userRole,
  stackCategories: ['FRONT_END', 'UX'],
  username: 'username'
};

export const mockedAdmin: AppUserDTO = {
  id: 1,
  badges: ['java'],
  email: 'admin@email.com',
  role: adminRole,
  stackCategories: ['FRONT_END', 'UX'],
  username: 'admin'
};

export const courseList: AppUserCourseDTO = {
  subscribedCourses: [
    {
      id: 3,
      category: 'FULLSTACK',
      creator: 'Orange Originals',
      description:
        'Essa trilha foi montada pensando em quem est?? come??ando na ??rea, ou passando por uma migra????o de carreira e ainda n??o sabe exatamente o que ?? esse mundo. Ent??o, aperta o cinto e vem com a gente nessa jornada!',
      difficulty: 'BEGINNER',
      title: 'Desenvolvimento Full Stack',
      totalLessons: 27,
      visible: true
    },
    {
      id: 1,
      category: 'UX',
      creator: 'Orange Originals',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et molestie ac feugiat sed lectus. Amet cursus sit amet dictum sit. Nibh ipsum consequat nisl vel pretium lectus quam id leo. Cras sed felis eget velit aliquet sagittis. Sed vulputate mi sit amet mauris commodo. Egestas dui id ornare arcu odio ut sem nulla. Interdum consectetur libero id faucibus.',
      difficulty: 'BEGINNER',
      title: 'Trilha UX',
      totalLessons: 47,
      visible: true
    },
    {
      id: 7,
      category: 'BACK_END',
      creator: 'creator32',
      description:
        'Blandit libero volutpat sed cras ornare arcu dui vivamus. Scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus et. At tellus at urna condimentum. Enim nulla aliquet porttitor lacus luctus. Ut diam quam nulla porttitor massa.',
      difficulty: 'BEGINNER',
      title: 'Tudo sobre Java & Springboot',
      totalLessons: 42,
      visible: true
    }
  ],
  archivedCourses: [
    {
      id: 4,
      category: 'UX',
      creator: 'Orange Originals',
      description:
        'Blandit libero volutpat sed cras ornare arcu dui vivamus. Scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus et. At tellus at urna condimentum. Enim nulla aliquet porttitor lacus luctus. Ut diam quam nulla porttitor massa.',
      difficulty: 'ADVANCED',
      title: 'UX, a experi??ncia ?? vida',
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
  watchedLesson: {
    '3': [200, 201]
  }
};

export const activeCourse: Course = {
  id: 3,
  category: 'FULLSTACK',
  creator: 'Orange Originals',
  description:
    'Essa trilha foi montada pensando em quem est?? come??ando na ??rea, ou passando por uma migra????o de carreira e ainda n??o sabe exatamente o que ?? esse mundo. Ent??o, aperta o cinto e vem com a gente nessa jornada!',
  difficulty: 'BEGINNER',
  title: 'Desenvolvimento Full Stack',
  visible: true,
  sections: [
    {
      id: 1000,
      lessons: [
        {
          id: 200,
          author: 'Orange Juice',
          contentType: 'ARTICLE',
          description:
            'Risus viverra adipiscing at in tellus integer. Aliquet nec ullamcorper sit amet. Sed adipiscing diam donec adipiscing tristique risus nec. Nibh tortor id aliquet lectus proin nibh nisl condimentum id. Lacinia quis vel eros donec ac odio tempor. Mus mauris vitae ultricies leo integer malesuada nunc. Risus nullam eget felis eget.',
          durationInMinutes: 5,
          link: 'www.site.com',
          title: 'Migra????o de Carreira',
          topic: 'Carreira'
        },
        {
          id: 201,
          author: 'Orange Juice',
          contentType: 'VIDEO',
          description:
            'Risus viverra adipiscing at in tellus integer. Aliquet nec ullamcorper sit amet. Sed adipiscing diam donec adipiscing tristique risus nec. Nibh tortor id aliquet lectus proin nibh nisl condimentum id. Lacinia quis vel eros donec ac odio tempor. Mus mauris vitae ultricies leo integer malesuada nunc. Risus nullam eget felis eget.',
          durationInMinutes: 57,
          link: 'www.site.com',
          title: 'Metodologia ??gil',
          topic: 'Kanban'
        },
        {
          id: 202,
          author: '',
          contentType: 'COURSE',
          description:
            'Risus viverra adipiscing at in tellus integer. Aliquet nec ullamcorper sit amet. Sed adipiscing diam donec adipiscing tristique risus nec. Nibh tortor id aliquet lectus proin nibh nisl condimentum id. Lacinia quis vel eros donec ac odio tempor. Mus mauris vitae ultricies leo integer malesuada nunc. Risus nullam eget felis eget.',
          durationInMinutes: 40,
          link: 'https://www.google.com',
          title: 'Curso de L??gica de Programa????o',
          topic: 'L??gica'
        }
      ],
      name: 'O in??cio'
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
      name: 'Conceitos B??sicos'
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
      name: 'Opcional'
    }
  ]
};
