import styled from 'styled-components';

export const LessonEditDashboardForm = styled.div`
  padding: 4px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

export const FieldTitle = styled.p`
  color: ${({ theme }) => theme.secondary};
  text-transform: uppercase;
  font-weight: bold;
`;
export const OptionButtons = styled.div`
  display: flex;
  gap: 1rem;
  width: 100%;
  justify-content: space-between;
`;

export const OptionButton = styled.button`
  margin-top: 3px;
  padding: 2px;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.secondaryDarker};
  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.secondaryDarker};
  text-transform: uppercase;
  font-weight: bold;
  cursor: pointer;
  border-radius: 3px;
  font-size: 1Rem;

  &:hover {
    background-color: ${({ theme }) => theme.primaryDarker};

  }

  &:focus {
    outline: none;
  }
`;