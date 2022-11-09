import { CoursePresentationContainer, Title, Description } from './index';

interface ICoursePresentationo {
  title: string;
  description: string;
  image: string;
}

function CoursePresentation(props: ICoursePresentationo) {
  const { title, description, image } = props;

  return (
    <CoursePresentationContainer image={`/images/${image}`}>
      <Title>{title}</Title>

      <Description>{description}</Description>
    </CoursePresentationContainer>
  );
}

export default CoursePresentation;
