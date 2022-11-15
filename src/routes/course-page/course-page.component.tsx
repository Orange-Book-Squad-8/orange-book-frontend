import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { CourseTag } from '../../components/course-tag';
import {
  selectActiveCourse,
  selectCourseList,
  selectUser,
  setActiveCourse,
  setUserCourseList
} from '../../redux/reducers';
import { Button } from '../../components/button';
import {
  CourseDescription,
  CoursePageContainer,
  CourseSectionsContainer,
  CreatedBy,
  Creator,
  InfoSection,
  TagsContainer
} from './index';
import { api } from '../../lib/axios';
import { AppUserCourseDTO, CourseDTO, Lesson } from '../../interfaces/api';
import { CourseCustomDisclosure } from '../../components/course-page-custom-disclosure';

interface ServerCourseResponse {
  courseDTO: CourseDTO;
  completeSectionDTO: CompleteSectionDTO[];
}

interface CompleteSectionDTO {
  id: number;
  name: string;
  lessons: Lesson[];
}

function CoursePage() {
  const course = useSelector(selectActiveCourse);
  const user = useSelector(selectUser);
  const { watchedLesson, subscribedCourses } = useSelector(selectCourseList);
  const dispatch = useDispatch();
  const { courseId } = useParams();
  const isSubscribed = subscribedCourses?.some(
    (course) => course.id === Number(courseId)
  );

  useEffect(() => {
    fetchActiveCourse();
  }, [subscribedCourses]);

  async function fetchActiveCourse() {
    try {
      const response = await api.get<ServerCourseResponse>(
        `/courses/${courseId}`
      );
      const {
        id,
        title,
        description,
        category,
        difficulty,
        visible,
        creator
      } = response.data.courseDTO;

      dispatch(
        setActiveCourse({
          id,
          title,
          category,
          difficulty,
          visible,
          description,
          creator,
          sections: response.data.completeSectionDTO
        })
      );
    } catch (err) {
      console.error(err);
    }
  }

  async function registerCourse() {
    try {
      await api.post('/users/addSubscribedCourses', { courseId, userId: user.id });
      const response = await api.get<AppUserCourseDTO>(`/users/${user.id}/courses`);
      dispatch(setUserCourseList(response.data));
    } catch (err) {
      console.error(err);
    }
  }

  return (
    course && (
      <CoursePageContainer title={course?.title || ' '}>
        <InfoSection>
          <TagsContainer>
            <CourseTag title='categoria'>{course.category}</CourseTag>
            <CourseTag title='categoria'>{course.difficulty}</CourseTag>
            <CreatedBy>
              Criado por <Creator>{course.creator}</Creator>
            </CreatedBy>

            {!isSubscribed && <Button standard onClick={registerCourse}>Matricular</Button>}
          </TagsContainer>
          <CourseDescription>{course.description}</CourseDescription>
        </InfoSection>

        <CourseSectionsContainer>
          {course.sections.map((section) => (
            <CourseCustomDisclosure section={section} isSubscribed={isSubscribed} watchedLesson={watchedLesson}
                                    courseId={courseId} key={section.id} />
          ))}
        </CourseSectionsContainer>
      </CoursePageContainer>
    )
  );
}

export default CoursePage;
