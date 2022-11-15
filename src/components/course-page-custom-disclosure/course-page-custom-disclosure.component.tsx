import { CustomDisclosure } from '../custom-disclosure';
import { InfoItem, LessonInfo, LessonItem, LessonsContainer, LessonTitle, StyledLink } from '.';
import { CourseTag } from '../course-tag';
import { Book, CheckSquare, Timer } from 'phosphor-react';
import { Section } from '../../interfaces/api';

interface CourseCustomDisclosureProps {
  section: Section;
  isSubscribed: boolean;
  watchedLesson: { [index: string]: number[] };
  courseId: string | undefined;
}

function CourseCustomDisclosure({ section, isSubscribed, watchedLesson, courseId }: CourseCustomDisclosureProps) {
  return (
    <CustomDisclosure title={section.name} tag='div'>
      <LessonsContainer>
        {section.lessons.map((lesson) => (
          <LessonItem key={lesson.id}>
            <LessonTitle>
              {isSubscribed ? (
                <StyledLink to={`lesson/${lesson.id}`}>
                  {lesson.title}
                </StyledLink>
              ) : (
                lesson.title
              )}
            </LessonTitle>

            <LessonInfo>
              <InfoItem>
                <CourseTag title='Lesson content type'>
                  {lesson.contentType}
                </CourseTag>
              </InfoItem>

              <InfoItem>
                <Book weight='bold' />
                {lesson.topic}
              </InfoItem>

              <InfoItem>
                <Timer weight='bold' />
                {lesson.durationInMinutes} minutos
              </InfoItem>

              {isSubscribed &&
                watchedLesson[Number(courseId)]?.includes(
                  lesson.id
                ) && (
                  <InfoItem>
                    <CheckSquare weight='bold' />
                    Concluída
                  </InfoItem>
                )}
            </LessonInfo>
          </LessonItem>
        ))}
      </LessonsContainer>
    </CustomDisclosure>
  );
}

export default CourseCustomDisclosure;