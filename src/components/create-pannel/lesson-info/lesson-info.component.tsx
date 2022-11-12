import { LessonActions, LessonInfoContainer } from './lesson-info.styles';
import { Lesson } from '../../../interfaces/api';
import { Eye } from 'phosphor-react';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsEditing, setIsOpen, setLesson } from '../../../redux/reducers';
import { LessonCardListInfo } from '../lesson-card-list-info';

interface LessonInfoProps {
  lesson: Lesson;
}

function LessonInfo({ lesson }: LessonInfoProps) {
  const dispatch = useDispatch();
  const isEditing = useSelector(selectIsEditing);

  function peekLesson() {
    dispatch(setLesson(lesson));
    dispatch(setIsOpen(true));
  }

  return (
    <LessonInfoContainer>
      <LessonCardListInfo lesson={lesson} />
      <LessonActions>
        <button onClick={peekLesson} disabled={isEditing}><Eye /></button>
      </LessonActions>
    </LessonInfoContainer>
  );
}

export default LessonInfo;