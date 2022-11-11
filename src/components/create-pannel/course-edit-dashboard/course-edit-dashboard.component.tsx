import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectCourse,
  selectSectionList,
  setCourse,
  setSectionList
} from '../../../redux/reducers/course-manager';
import {
  CourseDTO,
  Difficulty,
  Lesson,
  Section,
  StackCategories
} from '../../../interfaces/api';
import { Listbox } from '@headlessui/react';
import { SectionPannel } from '../section-pannel';
import { DashboardInfo } from '../../../routes/admin-dashboard';
import {
  CourseEditDashboardContainer,
  ListboxButtonStyled,
  ListboxOptionsStyled,
  ListboxOptionStyled,
  SectionButton
} from './course-edit-dashboard.styles';

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
  const sections: Section[] = lessonList.filter((section, i) => i != 0);
  const dispatch = useDispatch();
  const [difficulty, setDifficulty] = useState<Difficulty>('BEGINNER');
  const [stackCategories, setStackCategories] =
    useState<StackCategories>('FRONT_END');

  function name(value: string) {
    dispatch(setCourse({ ...course, title: value }));
  }
  function description(value: string) {
    dispatch(setCourse({ ...course, description: value }));
  }
  function send() {
    dispatch(setCourse({ ...course, difficulty, category: stackCategories }));
  }
  function addSection() {
    dispatch(
      setSectionList([
        ...lessonList,
        { lessons: [] as Lesson[], name: 'new Section' } as Section
      ])
    );
  }

  return (
    <CourseEditDashboardContainer>
      <input
        value={course.title}
        onChange={(event) => name(event.target.value)}
      />
      <textarea
        value={course.description}
        onChange={(event) => description(event.target.value)}
      />
      <Listbox value={difficulty} onChange={setDifficulty}>
        <ListboxButtonStyled>{difficulty}</ListboxButtonStyled>
        <ListboxOptionsStyled>
          {difficulties.map((diff, index) => (
            <Listbox.Option as="div" key={index} value={diff}>
              <ListboxOptionStyled>{diff}</ListboxOptionStyled>
            </Listbox.Option>
          ))}
        </ListboxOptionsStyled>
      </Listbox>
      <Listbox value={stackCategories} onChange={setStackCategories}>
        <ListboxButtonStyled>{stackCategories}</ListboxButtonStyled>
        <ListboxOptionsStyled>
          {stacks.map((stack, index) => (
            <Listbox.Option as="div" key={index} value={stack}>
              <ListboxOptionStyled>{stack}</ListboxOptionStyled>
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
    </CourseEditDashboardContainer>
  );
}

export default CourseEditDashboard;
