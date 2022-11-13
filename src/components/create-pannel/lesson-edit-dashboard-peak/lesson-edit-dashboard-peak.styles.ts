import styled from 'styled-components';

export const LessonEditDashboardPeakContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 1rem;
  height: 100%;
  justify-content: space-between;
`;

export const ContentBox = styled.div`
  padding: 0.5rem;
  background-color: beige;
  border-radius: 5px;
  border: 1px solid lightgray;
  overflow-y: hidden;
  overflow-x: auto;
`;

export const OptionButtons = styled.div`
  display: flex;
  gap: 1rem;
  width: 100%;
  justify-content: space-between;
`;

export const OptionButton = styled.button`
  width: 5rem;
  height: 2rem;
  font-weight: bold;
`;