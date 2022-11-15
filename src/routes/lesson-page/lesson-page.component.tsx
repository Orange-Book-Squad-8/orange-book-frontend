import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCourseLesson, selectCourseList } from '../../redux/reducers';
import { CourseTag } from '../../components/course-tag';
import { CheckBox } from '../../components/checkbox';
import { ArrowFatLeft, ArrowFatRight } from 'phosphor-react';
import { Field, Form, Formik } from 'formik';
import { RootState } from '../../redux/config/store';
import { InputField } from '../../components/input-field';
import {
  CourseDescription,
  CourseLink,
  CoursePageContainer,
  CreatedBy,
  Creator,
  FormTitle,
  InfoSection,
  LessonLink,
  NotesFormContainer,
  SaveButton,
  TagsContainer
} from './index';

interface IFormValues {
  noteTitle: string;
  note: string;
}

interface IFFormErrors extends IFormValues {
}

function LessonPage() {
  const { courseId, lessonId } = useParams() as {
    courseId: string;
    lessonId: string;
  };
  const lesson = useSelector((state: RootState) =>
    selectCourseLesson(state, Number(lessonId))
  );
  const { watchedLesson } = useSelector(selectCourseList);
  const isLessonWatched = watchedLesson?.[courseId]?.includes(Number(lessonId));


  const validateForm = (values: IFormValues) => {
    const errors = {} as IFFormErrors;

    if (values.noteTitle.trim() === '') {
      errors.noteTitle = 'O título não pode ser vazio';
    }

    if (values.note.trim() === '') {
      errors.note = 'O corpo da anotação não pode ser vazio';
    }

    return errors;
  };


  return (
    <CoursePageContainer title={lesson?.title || ' '}>
      <InfoSection>
        <TagsContainer>
          <CourseTag title='tipo de conteúdo'>{lesson?.contentType}</CourseTag>
          <CourseTag title='topico'>{lesson?.topic}</CourseTag>
          <CreatedBy>
            Criado por <Creator>{lesson?.author}</Creator>
          </CreatedBy>
          <CheckBox
            name='watched'
            defaultChecked={isLessonWatched == undefined ? false : isLessonWatched}
            label='Concluída'
            altLabel='Concluir'
            lessonId={parseInt(lessonId)}
          />
        </TagsContainer>

        <CourseDescription>{lesson?.description}</CourseDescription>
      </InfoSection>

      <LessonLink href={lesson?.link || '#'} target='_blank'>
        Seguir para Lição <ArrowFatRight size={32} weight='bold' />
      </LessonLink>

      <CourseLink to={`/course/${courseId}`}>
        Voltar para o Curso <ArrowFatLeft size={32} weight='bold' />
      </CourseLink>

      <NotesFormContainer>
        <FormTitle>Anotações</FormTitle>

        <Formik
          initialValues={{ noteTitle: '', note: '' }}
          validate={validateForm}
          onSubmit={() => {
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <Field name='noteTitle'>
                {({ field, meta }: any) => {
                  return (
                    <InputField
                      field={field}
                      meta={meta}
                      name='noteTitle'
                      title='Título'
                      type='text'
                    />
                  );
                }}
              </Field>

              <Field name='note'>
                {({ field, meta }: any) => {
                  return (
                    <InputField
                      field={field}
                      meta={meta}
                      name='note'
                      title='Anotações'
                      type='text'
                      tag='textarea'
                    />
                  );
                }}
              </Field>

              <SaveButton standard disabled={isSubmitting} type='submit'>
                Salvar
              </SaveButton>
            </Form>
          )}
        </Formik>
      </NotesFormContainer>
    </CoursePageContainer>
  );
}

export default LessonPage;
