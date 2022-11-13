import styled from 'styled-components';

export const LessonInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  border-bottom: 1px solid lightgray;
  padding: 0.3rem 0;
`;


export const LessonActions = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 50px;
  flex-grow: 0;
  gap: 1px;
  padding: 0 10px;
  height: 100%;
`;

export const ButtonPeak = styled.button`
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
`;