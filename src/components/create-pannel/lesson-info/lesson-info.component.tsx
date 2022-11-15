import { ButtonPeak, LessonActions, LessonInfoContainer } from './lesson-info.styles';
import { Lesson } from '../../../interfaces/api';
import { Eye } from 'phosphor-react';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsEditing, setLesson } from '../../../redux/reducers';
import { LessonCardListInfo } from '../lesson-card-list-info';

interface LessonInfoProps {
  lesson: Lesson;
}

function LessonInfo({ lesson }: LessonInfoProps) {
  const dispatch = useDispatch();
  const isEditing = useSelector(selectIsEditing);

  function peekLesson() {
    dispatch(setLesson(lesson));
  }

  return (
    <LessonInfoContainer>
      <LessonCardListInfo lesson={lesson} />
      <LessonActions>
        <ButtonPeak isEditing={isEditing} onClick={peekLesson} disabled={isEditing}>
          <Eye size={24} weight={'bold'} />
        </ButtonPeak>
      </LessonActions>
    </LessonInfoContainer>
  );
}

export default LessonInfo;