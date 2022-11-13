import { useDispatch, useSelector } from 'react-redux';
import { Lesson } from '../../../interfaces/api';
import { moveLesson, selectSectionList } from '../../../redux/reducers';
import { ItemCard } from '../item-card';
import { useDrop } from 'react-dnd';
import { DashboardListContainer, DashboardListHeader } from './dashboard-list.styles';
import FixedLessonInfoHeader from '../fixed-lesson-info-header/fixed-lesson-info-header.component';

interface cardItemProps {
  type: string;
  id: number;
  listIndex: number;
  lessonLocation: number;
}

interface dashboardListItemProps {
  filterString: string;
}

function DashboardList({ filterString }: dashboardListItemProps) {
  const dispatch = useDispatch();
  const sections = useSelector(selectSectionList);
  const filteredList = filterLessons(filterString);

  function filterLessons(filter: string) {
    if (filter.length === 0) return sections.sections[0].lessons;
    return sections.sections[0].lessons.filter(lesson => lesson.title.includes(filter));
  }

  const [, dropRef] = useDrop({
    accept: 'CARD',
    hover(item: cardItemProps) {
      if (item.lessonLocation === 0) return;

      dispatch(
        moveLesson({
          moveFrom: item.lessonLocation,
          moveTo: 0,
          prevIndex: item.listIndex,
          newIndex: sections.sections[0].lessons.length
        })
      );

      item.listIndex = sections.sections[0].lessons.length;
      item.lessonLocation = 0;
    }
  });

  return (
    <DashboardListContainer ref={dropRef}>
      <DashboardListHeader>
        <FixedLessonInfoHeader />
      </DashboardListHeader>
      {sections.sections[0].lessons.map((lesson: Lesson, index: number) => (
        filteredList.includes(lesson) ? <ItemCard
          lesson={lesson}
          listIndex={index}
          lessonLocation={0}
          key={index}
        /> : <></>
      ))}
    </DashboardListContainer>
  );
}

export default DashboardList;
