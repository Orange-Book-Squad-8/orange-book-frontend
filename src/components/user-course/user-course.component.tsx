import React from 'react';
import {
  UserCourseContainer,
  StyledLink,
  Title,
  Image,
  Progress,
  ProgressRatio,
  ProgressBar
} from './index';

interface IUserCourse {
  title: string;
  image: string;
  totalLessons: number;
  finishedLessons: number;
}

function UserCourse(props: IUserCourse) {
  const { title, image, totalLessons, finishedLessons } = props;
  const progress = (100 * finishedLessons) / totalLessons;

  return (
    <UserCourseContainer>
      <StyledLink to="/home">
        <div>
          <Title>{title}</Title>

          <Image src={`/images/${image}`} />
        </div>

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
