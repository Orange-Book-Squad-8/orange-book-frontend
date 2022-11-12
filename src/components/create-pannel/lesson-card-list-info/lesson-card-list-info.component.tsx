import { Lesson } from '../../../interfaces/api';
import { LessonCardListInfoContainer, LessonInfoStatsPrimary, LessonInfoStatsSecondary } from './';
import { tagMapper } from '../../../utils';

interface LessonCardListInfoProps {
  lesson: Lesson;
}

function LessonCardListInfo({ lesson }: LessonCardListInfoProps) {
  return (
    <LessonCardListInfoContainer>
      <LessonInfoStatsPrimary>{lesson.title}</LessonInfoStatsPrimary>
      <LessonInfoStatsPrimary>{lesson.author}</LessonInfoStatsPrimary>
      <LessonInfoStatsSecondary>{tagMapper(lesson.contentType)}</LessonInfoStatsSecondary>
      <LessonInfoStatsSecondary>{lesson.durationInMinutes}</LessonInfoStatsSecondary>
    </LessonCardListInfoContainer>
  );
}

export default LessonCardListInfo;