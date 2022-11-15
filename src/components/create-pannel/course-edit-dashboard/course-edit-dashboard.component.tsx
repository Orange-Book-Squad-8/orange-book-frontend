import { useDispatch, useSelector } from 'react-redux';
import {
  selectCourse,
  selectSectionList,
  selectUser,
  setCourse,
  setDeletedSectionIds,
  setSectionList
} from '../../../redux/reducers';
import { Dialog, Listbox } from '@headlessui/react';
import { CourseDTO, Difficulty, Lesson, Section, StackCategories } from '../../../interfaces/api';
import { SectionPannel } from '../section-panel';
import { DashboardInfo } from '../../../routes/course-constructor';
import {
  CourseEditDashboardContainer,
  DialogPanel,
  DialogTitle,
  FieldTitle,
  InputDescription,
  InputTitle,
  ListBoxDiv,
  ListboxOptionStyled,
  ListButtonStyled,
  ListOptionsStyled,
  SectionButton
} from './course-edit-dashboard.styles';
import { tagMapper } from '../../../utils';
import { api } from '../../../lib/axios';
import { useState } from 'react';

const difficulties: Difficulty[] = [
  'BEGINNER',
  'INTERMEDIATE',
  'ADVANCED',
  'FULL_FORMATION'
];
const stacks: StackCategories[] = [
  'FRONT_END',
  'BACK_END',
  'FULLSTACK',
  'UI',
  'UX',
  'SOFT_SKILLS'
];

function CourseEditDashboard() {
  const [isSending, setIsSending] = useState(false);
  const course: CourseDTO = useSelector(selectCourse);
  const lessonList = useSelector(selectSectionList);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  let [isOpen, setIsOpen] = useState(false);

  const sections: Section[] = lessonList.sections.filter((section, i) => i != 0);
  const { deletedSectionIds } = lessonList;
  const { id, title, category, description, difficulty, visible } = course;

  function setName(value: string) {
    dispatch(setCourse({ ...course, title: value }));
  }

  function setDescription(value: string) {
    dispatch(setCourse({ ...course, description: value }));
  }

  function setCategory(category: StackCategories) {
    dispatch(setCourse({ ...course, category }));
  }

  function setDifficulty(difficulty: Difficulty) {
    dispatch(setCourse({ ...course, difficulty }));
  }

  async function send() {
    setIsSending(true);
    try {
      if (isNaN(course.id)) {

        const courseCreator = user.role.name === 'admin' ? 'Orange Originals' : user.username;

        const response = await api.post('/courses/create', {
          title,
          creator: courseCreator,
          description,
          category,
          difficulty,
          visible,
          sections
        });

        await api.post('/users/addMyCourses', {
          courseId: response.data.id,
          userId: user.id
        });
      } else {
        await api.put('/courses/update', {
          id,
          title,
          creator: course.creator,
          description,
          category,
          difficulty,
          visible,
          sections,
          deletedSectionIds
        });
        console.log('success');
      }
      dispatch(setDeletedSectionIds([]));
      setIsOpen(true);
      setIsSending(false);
    } catch (error) {
      console.error(error);
    }
  }

  function addSection() {
    dispatch(
      setSectionList([
        ...lessonList.sections,
        { lessons: [] as Lesson[], name: 'new Section', id: NaN } as Section
      ])
    );
  }

  return (
    <CourseEditDashboardContainer>
      <FieldTitle>Título:</FieldTitle>
      <InputTitle
        value={course?.title || ''}
        placeholder={'Título'}
        onChange={(event) => setName(event.target.value)}
      />

      <FieldTitle>Descrição:</FieldTitle>
      <InputDescription placeholder={'Descrição'}
                        value={course?.description || ''}
                        onChange={(event) => setDescription(event.target.value)}
      />

      <FieldTitle>Dificuldade:</FieldTitle>
      <Listbox value={course?.difficulty || 'BEGINNER'} onChange={setDifficulty}>
        <ListBoxDiv>
          <ListButtonStyled>{tagMapper(course.difficulty)}</ListButtonStyled>
          <ListOptionsStyled>
            {difficulties.map((diff, index) => (
              <Listbox.Option as='div' key={index} value={diff}>
                <ListboxOptionStyled>{tagMapper(diff)}</ListboxOptionStyled>
              </Listbox.Option>
            ))}
          </ListOptionsStyled>
        </ListBoxDiv>
      </Listbox>

      <FieldTitle>Categoria:</FieldTitle>
      <Listbox value={course?.category || 'UX'} onChange={setCategory}>
        <ListBoxDiv>
          <ListButtonStyled>{tagMapper(course.category)}</ListButtonStyled>
          <ListOptionsStyled>
            {stacks.map((stack, index) => (
              <Listbox.Option as='div' key={index} value={stack}>
                <ListboxOptionStyled>{tagMapper(stack)}</ListboxOptionStyled>
              </Listbox.Option>
            ))}
          </ListOptionsStyled>
        </ListBoxDiv>
      </Listbox>

      <FieldTitle>Seções:</FieldTitle>
      <DashboardInfo>
        {sections.map((section: Section, index) => (
          <SectionPannel
            section={section}
            sectionLocation={index + 1}
            key={index}
          />
        ))}
        <SectionButton onClick={addSection}>Nova Seção</SectionButton>
      </DashboardInfo>
      <SectionButton onClick={send} disabled={isSending}>enviar</SectionButton>

      <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
        <DialogPanel>
          <DialogTitle>
            <Dialog.Title>Success</Dialog.Title>
            <button onClick={() => setIsOpen(false)}>close</button>
          </DialogTitle>
        </DialogPanel>
      </Dialog>

    </CourseEditDashboardContainer>
  );
}

export default CourseEditDashboard;
