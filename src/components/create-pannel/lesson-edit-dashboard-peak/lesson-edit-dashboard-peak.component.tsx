import { useDispatch, useSelector } from 'react-redux';
import { selectLesson, setIsEditing, setIsOpen } from '../../../redux/reducers';
import { LessonEditDashboardPeakContainer } from '.';

function LessonDashboardPeak() {
  const lesson = useSelector(selectLesson);
  const dispatch = useDispatch();
  const { id, title, description, contentType, link, durationInMinutes, topic, author } = lesson;

  async function submit() {

    dispatch(setIsOpen(false));
  }

  function edit() {
    dispatch(setIsEditing(true));
  }

  return (
    <LessonEditDashboardPeakContainer>
      <div>Título</div>
      <div>{title}</div>
      <div>Tipo de conteúdo</div>
      <div>{contentType}</div>
      <div>Autor</div>
      <div>{author}</div>

      <div>Tópico</div>
      <div>{topic}</div>

      <div>Descrição</div>
      <div>{description}</div>

      <div>Link</div>
      <div>{link}</div>

      <div>Duração</div>
      <div>{durationInMinutes}</div>

      <button onClick={submit}>fechar</button>
      <button onClick={edit}>edit</button>
    </LessonEditDashboardPeakContainer>
  );
}

export default LessonDashboardPeak;