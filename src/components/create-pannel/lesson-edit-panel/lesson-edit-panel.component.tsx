import {
  DashboardFilterBar,
  DashboardListContainer,
  DashboardListHeader,
  DashboardPanel,
  InputNameFilter,
  LessonActions
} from '.';
import FixedLessonInfoHeader from '../fixed-lesson-info-header/fixed-lesson-info-header.component';
import { LessonInfo } from '../lesson-info';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectSectionList } from '../../../redux/reducers';


function LessonEditPanel() {
  const [typedFilter, setTypedFilter] = useState('');
  const sections = useSelector(selectSectionList);
  const filteredList = filterLessons(typedFilter);

  function filterLessons(filter: string) {
    if (filter.length === 0) return sections.sections[0].lessons;
    return sections.sections[0].lessons.filter(lesson => lesson.title.toLowerCase().includes(filter.toLowerCase()));
  }

  return (
    <DashboardPanel>
      <DashboardFilterBar>
        <div>
          <InputNameFilter placeholder={'Título'} value={typedFilter}
                           onChange={(event) => setTypedFilter(event.target.value)} />
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
  );
}

export default LessonEditPanel;