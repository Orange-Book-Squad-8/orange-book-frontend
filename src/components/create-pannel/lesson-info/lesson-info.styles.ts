import styled, { css } from 'styled-components';

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

interface ButtonDisabled {
  isEditing: boolean;
}


export const ButtonPeak = styled.button<ButtonDisabled>`
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 3px;
  padding: 2px;
  border: none;
  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.secondaryDarker};
  text-transform: uppercase;
  font-weight: bold;
  cursor: pointer;
  border-radius: 3px;

  ${({ isEditing }) =>
          isEditing &&
          css`
            color: ${({ theme }) => theme.neutral};
            cursor: not-allowed;
          `
  }
  &:focus {
    outline: none;
  }
`;