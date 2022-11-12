import { LessonEditDashboardForm } from '.';
import { Listbox } from '@headlessui/react';
import { ListboxButtonStyled, ListboxOptionsStyled, ListboxOptionStyled } from '../course-edit-dashboard';
import { tagMapper } from '../../../utils';
import { ContentType } from '../../../interfaces/api';
import { useDispatch, useSelector } from 'react-redux';
import { editLesson, selectLesson, setIsEditing, setIsOpen, setLesson } from '../../../redux/reducers';
import { useState } from 'react';

const contents: ContentType[] = [
  'VIDEO',
  'ARTICLE',
  'COURSE',
  'BOOK'
];

function LessonEditDashboardUpdateForm() {
  const [cantSubmit, setCantSubmit] = useState(false);
  const lesson = useSelector(selectLesson);
  const dispatch = useDispatch();

  function setContentType(contentType: ContentType) {
    dispatch(setLesson({ ...lesson, contentType: contentType }));
  }

  function setTitle(title: string) {
    dispatch(setLesson({ ...lesson, title }));
    if (title.length < 3) setCantSubmit(true);
    else setCantSubmit(false);
  }

  function setAuthor(author: string) {
    dispatch(setLesson({ ...lesson, author }));
    if (author.length < 3) setCantSubmit(true);
    else setCantSubmit(false);
  }

  function setTopic(topic: string) {
    dispatch(setLesson({ ...lesson, topic }));
    if (topic.length < 3) setCantSubmit(true);
    else setCantSubmit(false);
  }

  function setLink(link: string) {
    dispatch(setLesson({ ...lesson, link }));
    if (link.length < 3) setCantSubmit(true);
    else setCantSubmit(false);
  }

  function setDescription(description: string) {
    dispatch(setLesson({ ...lesson, description }));
    if (description.length < 3) setCantSubmit(true);
    else setCantSubmit(false);
  }

  function setDuration(duration: string) {
    dispatch(setLesson({ ...lesson, durationInMinutes: parseInt(duration) }));
    if (parseInt(duration) > 0) setCantSubmit(false);
    else setCantSubmit(true);
  }

  function submit() {
    dispatch(setIsEditing(false));
    dispatch(setIsOpen(false));
    dispatch(editLesson(lesson));
  }

  return (
    <LessonEditDashboardForm>
      <p>Título</p>
      <input type='text' value={lesson.title} onChange={(event) => setTitle(event.target.value)} />
      <p>Tipo de conteúdo</p>
      <Listbox value={lesson.contentType} onChange={setContentType}>
        <ListboxButtonStyled>{tagMapper(lesson.contentType)}</ListboxButtonStyled>
        <ListboxOptionsStyled>
          {contents.map((content, index) => (
            <Listbox.Option as='div' key={index} value={content}>
              <ListboxOptionStyled>{tagMapper(content)}</ListboxOptionStyled>
            </Listbox.Option>
          ))}
        </ListboxOptionsStyled>
      </Listbox>
      <p>Autor</p>
      <input type='text' value={lesson.author} onChange={(event) => setAuthor(event.target.value)} />
      <p>Tópico</p>
      <input type='text' value={lesson.topic} onChange={(event) => setTopic(event.target.value)} />
      <p>Descrição</p>
      <textarea value={lesson.description} onChange={(event) => setDescription(event.target.value)} />
      <p>Link</p>
      <input type='url' value={lesson.link} onChange={(event) => setLink(event.target.value)} />
      <p>Duração</p>
      <input type='number' value={lesson.durationInMinutes} onChange={(event) => setDuration(event.target.value)} />
      <button onClick={submit} disabled={cantSubmit}>submit</button>
    </LessonEditDashboardForm>
  );
}

export default LessonEditDashboardUpdateForm;