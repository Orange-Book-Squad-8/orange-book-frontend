import { LessonDiv, LessonInfoStatsPrimary, LessonInfoStatsSecondary } from '.';

function FixedLessonInfoHeader() {
  return (
    <LessonDiv>
      <LessonInfoStatsPrimary>Título:</LessonInfoStatsPrimary>
      <LessonInfoStatsPrimary>Autor:</LessonInfoStatsPrimary>
      <LessonInfoStatsSecondary>Conteúdo</LessonInfoStatsSecondary>
      <LessonInfoStatsSecondary>Duração</LessonInfoStatsSecondary>
    </LessonDiv>
  );
}

export default FixedLessonInfoHeader;