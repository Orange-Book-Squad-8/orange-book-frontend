import { CoursePresentationContainer, Description, Title } from './index';
import { StackCategories } from '../../interfaces/api';

interface ICCoursePresentation {
  title: string;
  description: string;
  category: StackCategories;
}

function CoursePresentation(props: ICCoursePresentation) {
  const { title, description, category } = props;
  const courseCategory = category?.split('_').join('').toLowerCase();

  return (
    <CoursePresentationContainer image={`/images/${courseCategory}.png`}>
      <Title>{title}</Title>

      <Description>{description}</Description>
    </CoursePresentationContainer>
  );
}

export default CoursePresentation;
