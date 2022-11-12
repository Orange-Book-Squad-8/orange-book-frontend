import { LessonEditDashboardContainer } from '.';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsEditing, selectIsOpen, selectLesson } from '../../../redux/reducers';
import { LessonUpdateForm } from '../lesson-edit-dashboard-update-form';
import { LessonDashboardPeak } from '../lesson-edit-dashboard-peak';


function LessonEditDashboard() {
  const dispatch = useDispatch();
  const isOpen = useSelector(selectIsOpen);
  const isEditing = useSelector(selectIsEditing);
  const lesson = useSelector(selectLesson);

  return (
    <LessonEditDashboardContainer>
      {
        isOpen ?
          <>
            {
              isEditing ? <LessonUpdateForm /> :
                <LessonDashboardPeak />
            }
          </> :
          <div>Escolha a lesson a ser editada</div>


      }
    </LessonEditDashboardContainer>
  );
}

export default LessonEditDashboard;