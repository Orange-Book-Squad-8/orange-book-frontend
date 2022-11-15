import { StackCategories } from '../../interfaces/api';
import {
  UserCourseContainer,
  StyledLink,
  TitleImageContainer,
  Title,
  Image,
  Progress,
  ProgressRatio,
  ProgressBar,
  OriginalStamp
} from './index';

interface IUserCourse {
  id: number;
  title: string;
  category: StackCategories;
  original?: boolean;
  totalLessons: number;
  finishedLessons?: number;
}

function UserCourse(props: IUserCourse) {
  const {
    id,
    title,
    category,
    original = false,
    totalLessons,
    finishedLessons = 0
  } = props;
  const progress = (100 * finishedLessons) / totalLessons;
  const courseCategory = category?.split('_').join('').toLowerCase();

  return (
    <UserCourseContainer original={original}>
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

        <Progress>
          <ProgressRatio>
            {finishedLessons} / {totalLessons}
          </ProgressRatio>

          <ProgressBar progress={progress} />
        </Progress>
      </StyledLink>
    </UserCourseContainer>
  );
}

export default UserCourse;
