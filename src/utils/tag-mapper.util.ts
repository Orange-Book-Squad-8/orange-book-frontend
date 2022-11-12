import { ContentType, Difficulty, StackCategories } from '../interfaces/api';

const TRANSFORMATION = {
  BEGINNER: 'Iniciante',
  INTERMEDIATE: 'Intermediário',
  ADVANCED: 'Avançado',
  FULL_FORMATION: 'Formação completa',
  FRONT_END: 'Frontend',
  BACK_END: 'Backend',
  FULLSTACK: 'Fullstack',
  UI: 'Ui',
  UX: 'Ux',
  SOFT_SKILLS: 'Soft Skills',
  VIDEO: 'Vídeo',
  ARTICLE: 'Artigo',
  COURSE: 'Curso',
  BOOK: 'Livro'
};

export function tagMapper(tagValue: Difficulty | StackCategories | ContentType) {
  return TRANSFORMATION[tagValue];
}
