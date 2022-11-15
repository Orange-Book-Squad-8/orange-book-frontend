import { FieldTitle, LessonEditDashboardForm, OptionButton, OptionButtons } from '.';
import { Dialog, Listbox } from '@headlessui/react';
import {
  DialogPanel,
  DialogTitle,
  ListboxOptionStyled,
  ListButtonStyled,
  ListOptionsStyled
} from '../course-edit-dashboard';
import { tagMapper } from '../../../utils';
import { ContentType, Lesson } from '../../../interfaces/api';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsEditing, setIsEditing, setLesson, setSectionList } from '../../../redux/reducers';
import { useState } from 'react';
import { api } from '../../../lib/axios';
import { InputArea, InputFields, InputFieldsContainter, PeakFields, PeakLinkFields } from '../lesson-edit-dashboard';

const contents: ContentType[] = [
  'VIDEO',
  'ARTICLE',
  'COURSE',
  'BOOK'
];

interface LessonEditDashboardUpdateFormProps {
  lesson: Lesson;
}

function LessonEditDashboardUpdateForm({ lesson }: LessonEditDashboardUpdateFormProps) {
  const [cantSubmit, setCantSubmit] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { id, title, description, contentType, link, durationInMinutes, topic, author } = lesson;
  const isEditing = useSelector(selectIsEditing);
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
    if (!isEditing) {
      dispatch(setIsEditing(true));
      return;
    }

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
    dispatch(setLesson({} as Lesson));
    dispatch(setIsEditing(false));
    setIsDialogOpen(false);
    setIsEditing(false);
  }

  function cancel() {
    dispatch(setLesson({} as Lesson));
    dispatch(setIsEditing(false));
  }

  return (
    <LessonEditDashboardForm>
      {
        isEditing ?
          <InputFieldsContainter>
            <FieldTitle>Título</FieldTitle>
            <InputFields type='text' value={title} onChange={(event) => setTitle(event.target.value)} />
            <FieldTitle>Tipo de conteúdo</FieldTitle>
            <Listbox value={contentType} onChange={setContentType}>
              <ListButtonStyled>{tagMapper(contentType)}</ListButtonStyled>
              <ListOptionsStyled>
                {contents.map((content, index) => (
                  <Listbox.Option as='div' key={index} value={content}>
                    <ListboxOptionStyled>{tagMapper(content)}</ListboxOptionStyled>
                  </Listbox.Option>
                ))}
              </ListOptionsStyled>
            </Listbox>
            <FieldTitle>Autor</FieldTitle>
            <InputFields type='text' value={author} onChange={(event) => setAuthor(event.target.value)} />
            <FieldTitle>Tópico</FieldTitle>
            <InputFields type='text' value={topic} onChange={(event) => setTopic(event.target.value)} />
            <FieldTitle>Descrição</FieldTitle>
            <InputArea value={description} onChange={(event) => setDescription(event.target.value)} />
            <FieldTitle>Link</FieldTitle>
            <InputFields type='url' value={link} onChange={(event) => setLink(event.target.value)} />
            <FieldTitle>Duração</FieldTitle>
            <InputFields type='number' value={durationInMinutes}
                         onChange={(event) => setDuration(event.target.value)} />
          </InputFieldsContainter>
          :
          <InputFieldsContainter>
            <FieldTitle>Título</FieldTitle>
            <PeakFields>{title}</PeakFields>
            <FieldTitle>Tipo de conteúdo</FieldTitle>
            <PeakFields>{contentType}</PeakFields>
            <FieldTitle>Autor</FieldTitle>
            <PeakFields>{author}</PeakFields>
            <FieldTitle>Tópico</FieldTitle>
            <PeakFields>{topic}</PeakFields>
            <FieldTitle>Descrição</FieldTitle>
            <PeakFields>{description}</PeakFields>
            <FieldTitle>Link</FieldTitle>
            <PeakLinkFields>{link}</PeakLinkFields>
            <FieldTitle>Duração</FieldTitle>
            <PeakFields>{durationInMinutes}</PeakFields>
          </InputFieldsContainter>

      }
      <OptionButtons>
        <OptionButton onClick={submit} disabled={cantSubmit}>{isEditing ? 'salvar' : 'editar'}</OptionButton>
        <OptionButton onClick={cancel}>{isEditing ? 'cancelar' : 'fechar'}</OptionButton>
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