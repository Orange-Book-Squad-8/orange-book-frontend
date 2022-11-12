import { CourseEditDashboard } from '../../components/create-pannel/course-edit-dashboard';
import { DashboardList } from '../../components/create-pannel/dashboard-list';
import { AdminDashboardContainer, DashboardFilterBar, DashboardPanel } from './course-constructor.styles';
import { useState } from 'react';

interface cardItemProps {
  type: string;
  lessonId: number;
  listIndex: number;
  listLastId: number;
}

function CourseConstructor() {
  const [typedFilter, setTypedFilter] = useState('');

  return (
    <AdminDashboardContainer>
      <DashboardPanel>
        <DashboardFilterBar>
          <div>
            <input value={typedFilter} onChange={(event) => setTypedFilter(event.target.value)} />
          </div>
          <div>filtros</div>
        </DashboardFilterBar>

        <DashboardList filterString={typedFilter} />
      </DashboardPanel>

      <CourseEditDashboard />
    </AdminDashboardContainer>
  );
}

export default CourseConstructor;
