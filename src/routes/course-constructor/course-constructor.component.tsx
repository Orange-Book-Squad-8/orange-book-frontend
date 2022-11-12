import { useDispatch } from 'react-redux';
import { CourseEditDashboard } from '../../components/create-pannel/course-edit-dashboard';
import { DashboardList } from '../../components/create-pannel/dashboard-list';
import { Lesson, Section } from '../../interfaces/api';
import { getLesson, getSection } from '../../mock-data/mockCourse';
import { setSectionList } from '../../redux/reducers';
import { AdminDashboardContainer, DashboardFilterBar, DashbordPannel } from './course-constructor.styles';

interface cardItemProps {
  type: string;
  lessonId: number;
  listIndex: number;
  listLastId: number;
}

function CourseConstructor() {
  const dispatch = useDispatch();

  const list: Lesson[] = getLesson(25);
  const section: Section[] = getSection(5, list);

  dispatch(setSectionList(section));
  return (
    <AdminDashboardContainer>
      <DashbordPannel>
        <DashboardFilterBar>
          <div>
            <input />
          </div>
          <div>filtros</div>
        </DashboardFilterBar>

        <DashboardList />
      </DashbordPannel>

      <CourseEditDashboard />
    </AdminDashboardContainer>
  );
}

export default CourseConstructor;
