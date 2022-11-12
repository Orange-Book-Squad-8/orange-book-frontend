import {
  AdminDashboardContainer,
  DashboardFilterBar,
  DashboardListContainer,
  DashboardListHeader,
  DashboardPanel,
  LessonActions
} from '.';
import { useSelector } from 'react-redux';
import { selectAllLessons } from '../../redux/reducers';
import { LessonInfo } from '../../components/create-pannel/lesson-info';
import { LessonEditDashboard } from '../../components/create-pannel/lesson-edit-dashboard';
import FixedLessonInfoHeader
  from '../../components/create-pannel/fixed-lesson-info-header/fixed-lesson-info-header.component';
import { useState } from 'react';


function AdminDashboard() {
  const [typedFilter, setTypedFilter] = useState('');

  const lessons = useSelector(selectAllLessons);
  const filteredList = filterLessons(typedFilter);

  function filterLessons(filter: string) {
    if (filter.length === 0) return lessons;
    return lessons.filter(lesson => lesson.title.includes(filter));
  }

  return (
    <AdminDashboardContainer>
      <DashboardPanel>
        <DashboardFilterBar>
          <div>
            <input value={typedFilter} onChange={(event) => setTypedFilter(event.target.value)} />
          </div>
          <div>filtros</div>
        </DashboardFilterBar>

        <DashboardListContainer>
          <DashboardListHeader>
            <FixedLessonInfoHeader />
            <LessonActions>
              Ver
            </LessonActions>
          </DashboardListHeader>
          {
            filteredList.map((lesson, index) => (<LessonInfo key={index} lesson={lesson} />))
          }
        </DashboardListContainer>
      </DashboardPanel>

      <LessonEditDashboard />

    </AdminDashboardContainer>
  );
}

export default AdminDashboard;