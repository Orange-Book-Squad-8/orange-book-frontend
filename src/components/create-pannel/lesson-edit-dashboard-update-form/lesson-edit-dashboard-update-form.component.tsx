import { LessonEditDashboardForm } from '.';
import { Dialog, Listbox } from '@headlessui/react';
import {
  DialogPanel,
  DialogTitle,
  ListboxButtonStyled,
  ListboxOptionsStyled,
  ListboxOptionStyled
} from '../course-edit-dashboard';
import { tagMapper } from '../../../utils';
import { ContentType } from '../../../interfaces/api';
import { useDispatch, useSelector } from 'react-redux';
import { editLesson, selectLesson, setIsEditing, setIsOpen, setLesson, setSectionList } from '../../../redux/reducers';
import { useState } from 'react';
import { api } from '../../../lib/axios';
import { OptionButton, OptionButtons } from '../lesson-edit-dashboard-peak';
import { InputArea, InputFields, InputFieldsContainter } from '../lesson-edit-dashboard';

const contents: ContentType[] = [
  'VIDEO',
  'ARTICLE',
  'COURSE',
  'BOOK'
];

function LessonEditDashboardUpdateForm() {
  const [cantSubmit, setCantSubmit] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const lesson = useSelector(selectLesson);
  const { id, title, description, contentType, link, durationInMinutes, topic, author } = lesson;
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

  async function submit() {
    setCantSubmit(false);
    try {
      if (isNaN(lesson.id)) {
        await api.post('/lessons/create', {
          title,
          description,
          link,
          durationInMinutes,
          topic,
          contentType,
          author
        });
      } else {
        await api.put('/lessons/update', {
          title,
          description,
          link,
          durationInMinutes,
          topic,
          author,
          contentType,
          id
        });
      }
      setIsDialogOpen(true);
      setCantSubmit(true);
    } catch (e) {
      console.error(e);
    }
  }

  async function closeAndUpdate() {
    const response = await api.get('/lessons/all');

    dispatch(setSectionList([{ lessons: response.data, name: 'adm lessons', id: 0 }]));
    dispatch(setIsEditing(false));
    dispatch(setIsOpen(false));
    dispatch(editLesson(lesson));
    setIsDialogOpen(false);
  }

  function cancel() {
    dispatch(setIsEditing(false));
    dispatch(setIsOpen(false));
  }

  return (
    <LessonEditDashboardForm>
      <InputFieldsContainter>
        <p>Título</p>
        <InputFields type='text' value={title} onChange={(event) => setTitle(event.target.value)} />
        <p>Tipo de conteúdo</p>
        <Listbox value={contentType} onChange={setContentType}>
          <ListboxButtonStyled>{tagMapper(contentType)}</ListboxButtonStyled>
          <ListboxOptionsStyled>
            {contents.map((content, index) => (
              <Listbox.Option as='div' key={index} value={content}>
                <ListboxOptionStyled>{tagMapper(content)}</ListboxOptionStyled>
              </Listbox.Option>
            ))}
          </ListboxOptionsStyled>
        </Listbox>
        <p>Autor</p>
        <InputFields type='text' value={author} onChange={(event) => setAuthor(event.target.value)} />
        <p>Tópico</p>
        <InputFields type='text' value={topic} onChange={(event) => setTopic(event.target.value)} />
        <p>Descrição</p>
        <InputArea value={description} onChange={(event) => setDescription(event.target.value)} />
        <p>Link</p>
        <InputFields type='url' value={link} onChange={(event) => setLink(event.target.value)} />
        <p>Duração</p>
        <InputFields type='number' value={durationInMinutes} onChange={(event) => setDuration(event.target.value)} />
      </InputFieldsContainter>

      <OptionButtons>
        <OptionButton onClick={submit} disabled={cantSubmit}>submit</OptionButton>
        <OptionButton onClick={cancel}>cancel</OptionButton>
      </OptionButtons>

      <Dialog open={isDialogOpen} onClose={closeAndUpdate}>
        <DialogPanel>
          <DialogTitle>
            <Dialog.Title>Success</Dialog.Title>
            <button onClick={closeAndUpdate}>close</button>
          </DialogTitle>
        </DialogPanel>
      </Dialog>

    </LessonEditDashboardForm>
  );
}

export default LessonEditDashboardUpdateForm;