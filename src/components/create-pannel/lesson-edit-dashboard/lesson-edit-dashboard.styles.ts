import styled from 'styled-components';


export const DashboardPanel = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

export const InputFieldsContainter = styled.div`
  width: 100%;
  padding: 1px;
`;

export const InputFields = styled.input`
  width: 100%;
`;
export const InputArea = styled.textarea`
  width: 100%;
  resize: none;
  height: 7rem;
`;

export const LessonEditDashboardContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: wheat;
  padding: 4px;
  border-radius: 5px;
  overflow: hidden;
  gap: 1px;
  width: 30vw;
`;

export const BaseTextField = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 1rem;
  font-weight: bold;
  gap: 0.5rem;
`;