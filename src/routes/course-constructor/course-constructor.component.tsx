import { CourseEditDashboard } from '../../components/create-pannel/course-edit-dashboard';
import { AdminDashboardContainer } from './course-constructor.styles';
import { useDispatch, useSelector } from 'react-redux';
import { api } from '../../lib/axios';
import { selectUser, setCourse, setSectionList } from '../../redux/reducers';
import { CourseEditPanel } from '../../components/create-pannel/course-edit-panel';
import { useParams } from 'react-router-dom';
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

function CourseConstructor() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const { courseId } = useParams() as { courseId: string };


  async function fetchLessons() {
    try {
      if (courseId == 'new') {
        const responseAllLessons = await api.get<Lesson[]>('/lessons/all');

        dispatch(setSectionList([{
          lessons: responseAllLessons.data,
          name: 'adm lessons',
          id: 0
        }]));

        dispatch(setCourse({
          id: NaN,
          title: '',
          creator: user.username,
          visible: true,
          totalLessons: 0,
          difficulty: 'BEGINNER',
          category: 'UX',
          description: ''
        }));
      } else {
        const responseAllLessons = await api.get<Lesson[]>('/lessons/all');
        const responseCourse = await api.get<ServerCourseResponse>(`/courses/${courseId}`);

        let allLessons: number[] = [];
        const courseSections = responseCourse.data.completeSectionDTO;
        courseSections.forEach(section => {
          section.lessons.forEach(lesson => {
            allLessons.push(lesson.id);
          });
        });

        const admLessons: Lesson[] = responseAllLessons.data.filter(lesson => !allLessons.includes(lesson.id));

        dispatch(setSectionList([{
          lessons: admLessons,
          name: 'adm lessons',
          id: 0
        }, ...responseCourse.data.completeSectionDTO]));

        dispatch(setCourse(responseCourse.data.courseDTO));
      }

    } catch (err) {
      console.error(err);
    }
  }

  fetchLessons();

  return (
    <AdminDashboardContainer>
      <CourseEditPanel />

      <CourseEditDashboard />
    </AdminDashboardContainer>
  );
}

export default CourseConstructor;
