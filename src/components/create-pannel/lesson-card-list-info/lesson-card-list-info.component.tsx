import { Lesson } from '../../../interfaces/api';
import {
  LessonCardListInfoContainer,
  LessonInfoStatsPrimary,
  LessonInfoStatsPrimaryAuthor,
  LessonInfoStatsSecondary
} from './';
import { tagMapper } from '../../../utils';

interface LessonCardListInfoProps {
  lesson: Lesson;
}

function LessonCardListInfo({ lesson }: LessonCardListInfoProps) {
  return (
    <LessonCardListInfoContainer>
      <LessonInfoStatsPrimary>{lesson.title}</LessonInfoStatsPrimary>
      <LessonInfoStatsPrimaryAuthor>{lesson.author}</LessonInfoStatsPrimaryAuthor>
      <LessonInfoStatsSecondary>{tagMapper(lesson.contentType)}</LessonInfoStatsSecondary>
      <LessonInfoStatsSecondary>{lesson.durationInMinutes} min</LessonInfoStatsSecondary>
    </LessonCardListInfoContainer>
  );
}

export default LessonCardListInfo;