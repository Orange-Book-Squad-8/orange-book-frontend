import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectActiveCourse, selectCourseList, setActiveCourse } from '../../redux/reducers';
import { CourseTag } from '../../components/course-tag';
import { CustomDisclosure } from '../../components/custom-disclosure';
import { Book, CheckSquare, Timer } from 'phosphor-react';
import {
  CourseDescription,
  CourseSectionsContainer,
  CreatedBy,
  Creator,
  InfoItem,
  InfoSection,
  LessonInfo,
  LessonItem,
  LessonsContainer,
  LessonTitle,
  StyledLink,
  TagsContainer,
  UserCoursePageContainer
} from './index';
import { api } from '../../lib/axios';
import { CourseDTO, Lesson } from '../../interfaces/api';

interface ServerCourseResponse {
  courseDTO: CourseDTO;
  completeSectionDTO: CompleteSectionDTO[];
}

interface CompleteSectionDTO {
  id: number;
  name: string;
  lessons: Lesson[];
}

function UserCoursePage() {
  const course = useSelector(selectActiveCourse);
  const { watchedLesson } = useSelector(selectCourseList);
  const dispatch = useDispatch();
  const { courseId } = useParams() as { courseId: string };

  useEffect(() => {
    fetchActiveCourse();
  }, []);

  async function fetchActiveCourse() {
    try {
      const response = await api.get<ServerCourseResponse>(`/courses/${courseId}`);
      const { id, title, description, category, difficulty, visible, totalLessons, creator } = response.data.courseDTO;

      console.log({
        id,
        title,
        category,
        difficulty,
        visible,
        description,
        creator,
        sections: response.data.completeSectionDTO
      });
      dispatch(setActiveCourse({
        id,
        title,
        category,
        difficulty,
        visible,
        description,
        creator,
        sections: response.data.completeSectionDTO
      }));

    } catch (err) {
      console.error(err);
    }
  }

  return (
    course && (
      <UserCoursePageContainer title={course?.title || ' '}>
        <InfoSection>
          <TagsContainer>
            <CourseTag title='categoria'>{course.category}</CourseTag>
            <CourseTag title='categoria'>{course.difficulty}</CourseTag>
            <CreatedBy>
              Criado por <Creator>{course.creator}</Creator>
            </CreatedBy>
          </TagsContainer>
          <CourseDescription>{course.description}</CourseDescription>
        </InfoSection>

        <CourseSectionsContainer>
          {course.sections.map((section) => (
            <CustomDisclosure title={section.name} tag='div'>
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
                        <CourseTag title='Lesson content type'>
                          {lesson.contentType}
                        </CourseTag>
                      </InfoItem>

                      <InfoItem>
                        <Book weight='bold' />
                        {lesson.topic}
                      </InfoItem>

                      <InfoItem>
                        <Timer weight='bold' />
                        {lesson.durationInMinutes} minutos
                      </InfoItem>

                      {watchedLesson[courseId].includes(lesson.id) && (
                        <InfoItem>
                          <CheckSquare weight='bold' />
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
