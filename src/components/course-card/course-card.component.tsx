import { Difficulty, StackCategories } from '../../interfaces/api';
import { CourseTag } from '../course-tag';
import {
  CourseContainer,
  StyledLink,
  TitleImageContainer,
  Title,
  Image,
  TagsContainer,
  OriginalStamp
} from './index';

interface ICourse {
  id: number;
  title: string;
  category: StackCategories;
  difficulty: Difficulty;
  original?: boolean;
}

function UserCourse(props: ICourse) {
  const { id, title, category, difficulty, original = false } = props;
  const courseCategory = category?.split('_').join('').toLowerCase();

  return (
    <CourseContainer original={original}>
      {original && (
        <OriginalStamp
          src="/images/orange.png"
          alt="selo indicando que este curso é original da plataforma"
        />
      )}

      <StyledLink to={`/course/${id}`}>
        <TitleImageContainer>
          <Title>{title}</Title>

          <Image src={`/images/${courseCategory}.png`} />
        </TitleImageContainer>

        <TagsContainer>
          <CourseTag title="categoria">{category}</CourseTag>
          <CourseTag title="dificuldade">{difficulty}</CourseTag>
        </TagsContainer>
      </StyledLink>
    </CourseContainer>
  );
}

export default UserCourse;
