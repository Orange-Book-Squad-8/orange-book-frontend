import { useDispatch, useSelector } from 'react-redux';
import { selectLesson, setIsEditing, setIsOpen } from '../../../redux/reducers';
import { ContentBox, LessonEditDashboardPeakContainer, OptionButton, OptionButtons } from '.';

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
      <div>
        <div>Título:</div>
        <ContentBox>{title}</ContentBox>
        <div>Tipo de conteúdo:</div>
        <ContentBox>{contentType}</ContentBox>
        <div>Autor:</div>
        <ContentBox>{author}</ContentBox>

        <div>Tópico:</div>
        <ContentBox>{topic}</ContentBox>

        <div>Descrição:</div>
        <ContentBox>{description}</ContentBox>

        <div>Link:</div>
        <ContentBox>{link}</ContentBox>

        <div>Duração:</div>
        <ContentBox>{durationInMinutes}</ContentBox>
      </div>

      <OptionButtons>
        <OptionButton onClick={edit}>edit</OptionButton>
        <OptionButton onClick={submit}>fechar</OptionButton>
      </OptionButtons>
    </LessonEditDashboardPeakContainer>
  );
}

export default LessonDashboardPeak;