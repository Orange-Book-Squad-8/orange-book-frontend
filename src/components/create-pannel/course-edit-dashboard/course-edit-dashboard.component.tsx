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
  ListboxButtonStyled,
  ListboxOptionsStyled,
  ListboxOptionStyled,
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
    try {
      if (isNaN(course.id)) {

        const courseCreator = user.role.name === 'admin' ? 'Orange Juice' : user.username;

        await api.post('/courses/create', {
          title,
          creator: courseCreator,
          description,
          category,
          difficulty,
          visible,
          sections
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

    } catch (error) {
      console.error(error);
    }
    //dispatch(setCourse({ course }));
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
      <input
        value={course.title}
        onChange={(event) => setName(event.target.value)}
      />
      <textarea
        value={course.description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <Listbox value={course.difficulty} onChange={setDifficulty}>
        <ListboxButtonStyled>{tagMapper(course.difficulty)}</ListboxButtonStyled>
        <ListboxOptionsStyled>
          {difficulties.map((diff, index) => (
            <Listbox.Option as='div' key={index} value={diff}>
              <ListboxOptionStyled>{tagMapper(diff)}</ListboxOptionStyled>
            </Listbox.Option>
          ))}
        </ListboxOptionsStyled>
      </Listbox>
      <Listbox value={course.category} onChange={setCategory}>
        <ListboxButtonStyled>{tagMapper(course.category)}</ListboxButtonStyled>
        <ListboxOptionsStyled>
          {stacks.map((stack, index) => (
            <Listbox.Option as='div' key={index} value={stack}>
              <ListboxOptionStyled>{tagMapper(stack)}</ListboxOptionStyled>
            </Listbox.Option>
          ))}
        </ListboxOptionsStyled>
      </Listbox>
      <DashboardInfo>
        {sections.map((section: Section, index) => (
          <SectionPannel
            section={section}
            sectionLocation={index + 1}
            key={index}
          />
        ))}
        <SectionButton onClick={addSection}>Nova Section</SectionButton>
      </DashboardInfo>
      <button onClick={send}>enviar</button>

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
