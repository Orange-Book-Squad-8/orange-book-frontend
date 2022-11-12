import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectActiveCourse,
  selectCourseList,
  setActiveCourse
} from '../../redux/reducers';
import { CourseTag } from '../../components/course-tag';
import { CustomDisclosure } from '../../components/custom-disclosure';
import { activeCourse } from '../../mock-data';
import { Timer, Book, CheckSquare } from 'phosphor-react';
import {
  UserCoursePageContainer,
  InfoSection,
  TagsContainer,
  CreatedBy,
  Creator,
  CourseDescription,
  CourseSectionsContainer,
  LessonsContainer,
  LessonItem,
  LessonTitle,
  StyledLink,
  LessonInfo,
  InfoItem
} from './index';

function UserCoursePage() {
  const course = useSelector(selectActiveCourse);
  const { watchedLesson } = useSelector(selectCourseList);
  const dispatch = useDispatch();
  const { courseId } = useParams() as { courseId: string };

  useEffect(() => {
    dispatch(setActiveCourse(activeCourse));
  }, []);

  return (
    course && (
      <UserCoursePageContainer title={course?.title || ' '}>
        <InfoSection>
          <TagsContainer>
            <CourseTag title="categoria">{course.category}</CourseTag>
            <CourseTag title="categoria">{course.difficulty}</CourseTag>
            <CreatedBy>
              Criado por <Creator>{course.creator}</Creator>
            </CreatedBy>
          </TagsContainer>
          <CourseDescription>{course.description}</CourseDescription>
        </InfoSection>

        <CourseSectionsContainer>
          {course.sections.map((section) => (
            <CustomDisclosure title={section.name} tag="div">
              <LessonsContainer>
                {section.lessons.map((lesson) => (
                  <LessonItem>
                    <LessonTitle>
                      <StyledLink to={`/user/lesson/${lesson.id}`}>
                        {lesson.title}
                      </StyledLink>
                    </LessonTitle>

                    <LessonInfo>
                      <InfoItem>
                        <CourseTag title="Lesson content type">
                          {lesson.contentType}
                        </CourseTag>
                      </InfoItem>

                      <InfoItem>
                        <Book weight="bold" />
                        {lesson.topic}
                      </InfoItem>

                      <InfoItem>
                        <Timer weight="bold" />
                        {lesson.durationInMinutes} minutos
                      </InfoItem>

                      {watchedLesson[courseId].includes(lesson.id) && (
                        <InfoItem>
                          <CheckSquare weight="bold" />
                          Concluída
                        </InfoItem>
                      )}
                    </LessonInfo>
                  </LessonItem>
                ))}
              </LessonsContainer>
            </CustomDisclosure>
          ))}
        </CourseSectionsContainer>
      </UserCoursePageContainer>
    )
  );
}

export default UserCoursePage;
