import { AdminDashboardContainer } from '.';
import { LessonEditDashboard } from '../../components/create-pannel/lesson-edit-dashboard';
import { LessonEditPanel } from '../../components/create-pannel/lesson-edit-panel';
import { api } from '../../lib/axios';
import { useDispatch } from 'react-redux';
import { setSectionList } from '../../redux/reducers';
import { Section } from '../../interfaces/api';

interface sectionListProps {
  sections: Section[],
  deletedSectionIds: number[]
}

function AdminDashboard() {
  const dispatch = useDispatch();

  async function fetchLessons() {
    try {
      const response = await api.get('/lessons/all');
      dispatch(setSectionList([{ lessons: response.data, name: 'adm lessons', id: 0 }]));
    } catch (err) {
      console.error(err);
    }
  }

  fetchLessons();

  return (
    <AdminDashboardContainer>
      <LessonEditPanel />
      <LessonEditDashboard />
    </AdminDashboardContainer>
  );
}

export default AdminDashboard;