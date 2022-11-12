import { useDispatch, useSelector } from 'react-redux';
import { selectLesson, setIsEditing, setIsOpen } from '../../../redux/reducers';
import { LessonEditDashboardPeakContainer } from '.';

function LessonDashboardPeak() {
  const lesson = useSelector(selectLesson);
  const dispatch = useDispatch();

  function submit() {
    dispatch(setIsOpen(false));
  }

  function edit() {
    dispatch(setIsEditing(true));
  }

  return (
    <LessonEditDashboardPeakContainer>
      <div>Título</div>
      <div>{lesson.title}</div>
      <div>Tipo de conteúdo</div>
      <div>{lesson.contentType}</div>
      <div>Autor</div>
      <div>{lesson.author}</div>

      <div>Tópico</div>
      <div>{lesson.topic}</div>

      <div>Descrição</div>
      <div>{lesson.description}</div>

      <div>Link</div>
      <div>{lesson.link}</div>

      <div>Duração</div>
      <div>{lesson.durationInMinutes}</div>

      <button onClick={submit}>submit</button>
      <button onClick={edit}>edit</button>
    </LessonEditDashboardPeakContainer>
  );
}

export default LessonDashboardPeak;