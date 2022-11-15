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
  background-color: ${({ theme }) => theme.neutral};
  border: 1px solid ${({ theme }) => theme.primaryDarker};
  border-radius: 3px;

  &:focus {
    outline: none;
  }
`;
export const PeakFields = styled.div`
  padding: 0.5rem;
  background-color: beige;
  border-radius: 5px;
  border: 1px solid lightgray;
  overflow-y: hidden;
  overflow-x: auto;
  cursor: default;

  &::-webkit-scrollbar {
    background-color: ${({ theme }) => theme.primary};
    width: 10px;
    height: 10px;
    border: 1px solid black;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.secondary};
    width: 5px;
    height: 5px;
    border: 1px solid black;
    border-radius: 3px;
  }
`;

export const PeakLinkFields = styled.div`
  padding: 0.5rem;
  background-color: beige;
  border-radius: 5px;
  border: 1px solid lightgray;
  overflow-y: hidden;
  overflow-x: auto;
  cursor: default;
  white-space: nowrap;

  &::-webkit-scrollbar {
    background-color: ${({ theme }) => theme.primary};
    width: 10px;
    height: 10px;
    border: 1px solid black;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.secondary};
    width: 5px;
    height: 5px;
    border: 1px solid black;
    border-radius: 3px;
  }
`;
export const InputArea = styled.textarea`
  width: 100%;
  resize: none;
  height: 7rem;
  background-color: ${({ theme }) => theme.neutral};
  border: 1px solid ${({ theme }) => theme.primaryDarker};
  border-radius: 3px;
  font-size: 1Rem;

  :focus {
    outline: none;
  }

  &::-webkit-scrollbar {
    background-color: ${({ theme }) => theme.primary};
    width: 10px;
    height: 10px;
    border: 1px solid black;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.secondary};
    width: 5px;
    height: 5px;
    border: 1px solid black;
    border-radius: 3px;
  }
`;

export const LessonEditDashboardContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  border: 2px solid ${({ theme }) => theme.secondaryDarker};
  border-radius: 8px;
  background-color: ${({ theme }) => theme.primary};;
  padding: 4px 8px;
  overflow: hidden;
  gap: 1px;
  width: 25vw;
  min-width: 20rem;
`;

export const BaseTextField = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 2rem;
  font-weight: bold;
  gap: 0.5rem;
  text-transform: uppercase;
  text-align: center;
  color: ${({ theme }) => theme.secondaryDarker};
`;


export const SectionButton = styled.button`
  margin-top: 3px;
  padding: 2px;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.secondaryDarker};
  text-transform: uppercase;
  font-weight: bold;
  cursor: pointer;
  border-radius: 3px;

  &:focus {
    outline: none;
  }
`;
