import styled from 'styled-components';


export const LessonInfoStatsPrimary = styled.div`
  border-right: 1px solid lightgray;
  width: 35%;
  overflow: hidden;
  padding-left: 1rem;
  align-items: flex-start;
  display: flex;
`;
export const LessonInfoStatsPrimaryAuthor = styled.div`
  border-right: 1px solid lightgray;
  width: 35%;
  overflow: hidden;
  padding-left: 1rem;
  align-items: center;
  display: flex;
`;
export const LessonInfoStatsSecondary = styled.div`
  padding: 2px;
  border-right: 1px solid lightgray;
  width: 15%;
  overflow: hidden;
  align-items: center;
  justify-content: center;
  display: flex;
`;

export const LessonCardListInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  color: ${({ theme }) => theme.secondary};
  background-color: ${({ theme }) => theme.primary};

  &:hover {
    background-color: ${({ theme }) => theme.primaryDarker};

  }
`;