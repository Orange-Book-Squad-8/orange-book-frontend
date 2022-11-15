import { DashboardFilterBar, DashboardPanel, InputNameFilter } from '.';
import { DashboardList } from '../dashboard-list';
import { useState } from 'react';


function CourseEditPanel() {
  const [typedFilter, setTypedFilter] = useState('');


  return (
    <DashboardPanel>
      <DashboardFilterBar>
        <div>
          <InputNameFilter placeholder={'Título'} value={typedFilter}
                           onChange={(event) => setTypedFilter(event.target.value)} />
        </div>
        <div>filtros</div>
      </DashboardFilterBar>

      <DashboardList filterString={typedFilter} />
    </DashboardPanel>
  );
}

export default CourseEditPanel;