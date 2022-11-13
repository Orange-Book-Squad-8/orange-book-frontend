import { BaseTextField, DashboardPanel, LessonEditDashboardContainer } from '.';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsEditing, selectIsOpen, setIsEditing, setIsOpen, setLesson } from '../../../redux/reducers';
import { LessonUpdateForm } from '../lesson-edit-dashboard-update-form';
import { LessonDashboardPeak } from '../lesson-edit-dashboard-peak';
import { PlusCircle } from 'phosphor-react';


function LessonEditDashboard() {
  const dispatch = useDispatch();
  const isOpen = useSelector(selectIsOpen);
  const isEditing = useSelector(selectIsEditing);

  function newLesson() {
    dispatch(setIsOpen(true));
    dispatch(setIsEditing(true));
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
  }

  return (
    <LessonEditDashboardContainer>
      {
        isOpen ?
          <DashboardPanel>
            {
              isEditing ? <LessonUpdateForm /> :
                <LessonDashboardPeak />
            }
          </DashboardPanel> :
          <BaseTextField>
            <div>Escolha a lesson a ser editada</div>
            <div>Ou</div>

            <div>Crie uma lesson</div>
            <button onClick={newLesson}>
              <PlusCircle size={24} />
            </button>
          </BaseTextField>


      }
    </LessonEditDashboardContainer>
  );
}

export default LessonEditDashboard;