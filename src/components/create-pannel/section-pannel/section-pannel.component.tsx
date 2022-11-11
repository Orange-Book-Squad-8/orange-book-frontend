import { Disclosure } from '@headlessui/react';
import { useDispatch, useSelector } from 'react-redux';
import { Section, Lesson } from '../../../interfaces/api';
import {
  moveLesson,
  selectSectionList,
  setSectionList
} from '../../../redux/reducers/course-manager';
import { ItemCard } from '../item-card';
import {
  DisclosureButtonEditStyled,
  DisclosureButtonStyled,
  DisclosureStyled,
  FormDisclosureButtonEditStyled,
  MinDIv
} from './section-pannel.styles';
import { useDrop } from 'react-dnd';
import { PlusCircle, Trash, PaperPlaneTilt } from 'phosphor-react';
import { Pencil } from 'phosphor-react';
import { FormEvent, useEffect, useState } from 'react';
import produce from 'immer';

interface SectionPannelProps {
  section: Section;
  sectionLocation: number;
}
interface cardItemProps {
  type: string;
  id: number;
  listIndex: number;
  lessonLocation: number;
}
function SectionPannel({ section, sectionLocation }: SectionPannelProps) {
  const dispatch = useDispatch();
  const sectionList = useSelector(selectSectionList);
  const [iseditingName, setIsEditingName] = useState(false);

  const [, dropRef] = useDrop({
    accept: 'CARD',
    hover(item: cardItemProps, monitor) {
      if (sectionLocation == item.lessonLocation) return;
      dispatch(
        moveLesson({
          moveFrom: item.lessonLocation,
          moveTo: sectionLocation,
          prevIndex: item.listIndex,
          newIndex: section.lessons.length
        })
      );

      item.listIndex = section.lessons.length;
      item.lessonLocation = sectionLocation;
    }
  });

  function editName(name: string) {
    const sections: Section[] = produce(sectionList, (draft) => {
      draft.splice(sectionLocation, 1, {
        id: section.id,
        lessons: section.lessons,
        name
      } as Section);
    });
    dispatch(setSectionList(sections));
  }

  function deleteSection() {
    const sections: Section[] = produce(sectionList, (draft) => {
      draft[sectionLocation].lessons.map((lesson) => {
        draft[0].lessons.push(lesson);
      });
      draft.splice(sectionLocation, 1);
    });
    dispatch(setSectionList(sections));
  }

  function finishEdit(event: FormEvent) {
    event.preventDefault();
    setIsEditingName(!iseditingName);
  }

  return (
    <Disclosure>
      <DisclosureStyled>
        <FormDisclosureButtonEditStyled onSubmit={(event) => finishEdit(event)}>
          {iseditingName ? (
            <DisclosureButtonEditStyled
              value={section.name}
              onChange={(event) => editName(event.target.value)}
            />
          ) : (
            <DisclosureButtonStyled>{section.name}</DisclosureButtonStyled>
          )}
          <button>{iseditingName ? <PaperPlaneTilt /> : <Pencil />}</button>
        </FormDisclosureButtonEditStyled>
        <button onClick={deleteSection}>
          <Trash />
        </button>
      </DisclosureStyled>
      <Disclosure.Panel>
        {section.lessons.map((lesson: Lesson, index: number) => (
          <ItemCard
            lesson={lesson}
            listIndex={index}
            lessonLocation={sectionLocation}
            key={index}
          />
        ))}
        <MinDIv ref={dropRef}>
          <p>Arraste aqui</p>
          <PlusCircle size={26} />
        </MinDIv>
      </Disclosure.Panel>
    </Disclosure>
  );
}

export default SectionPannel;
