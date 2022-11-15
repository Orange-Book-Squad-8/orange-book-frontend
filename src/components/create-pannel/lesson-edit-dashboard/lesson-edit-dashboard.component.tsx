import { BaseTextField, DashboardPanel, LessonEditDashboardContainer, SectionButton } from '.';
import { useDispatch, useSelector } from 'react-redux';
import { selectLesson, setIsEditing, setLesson } from '../../../redux/reducers';
import { LessonUpdateForm } from '../lesson-edit-dashboard-update-form';
import { PlusCircle } from 'phosphor-react';


function LessonEditDashboard() {
  const dispatch = useDispatch();
  const lesson = useSelector(selectLesson);

  function newLesson() {
    dispatch(setLesson({
      id: NaN,
      description: 'Insira a descrição aqui',
      title: 'Insira o Título aqui',
      topic: 'Tópico',
      contentType: 'VIDEO',
      author: 'Autor',
      durationInMinutes: 1,
      link: ''
    }));
    dispatch(setIsEditing(true));
  }

  return (
    <LessonEditDashboardContainer>
      {
        lesson?.title ?
          <DashboardPanel>
            <LessonUpdateForm lesson={lesson} />
          </DashboardPanel> :
          <BaseTextField>
            <div>Escolha a lesson a ser editada</div>
            <div>Ou</div>

            <div>Crie uma lesson</div>
            <SectionButton onClick={newLesson}>
              <PlusCircle size={64} />
            </SectionButton>
          </BaseTextField>


      }
    </LessonEditDashboardContainer>
  );
}

export default LessonEditDashboard;