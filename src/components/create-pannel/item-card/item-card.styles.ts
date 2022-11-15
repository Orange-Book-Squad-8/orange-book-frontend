import styled, { css } from 'styled-components';

interface DashboardItemProps {
  isDragging: boolean;
  lessonLocationBoolean: boolean;
}

export const DashboardItem = styled.div<DashboardItemProps>`
  display: flex;
  flex-direction: row;
  border-color: black;
  border-style: solid;
  align-items: center;
  border-bottom-width: 1px;
  padding: 1rem 0.3rem;
  margin: 2px 0;
  cursor: grab;
  ${(props) =>
          props.isDragging &&
          css`
            border-radius: 5px;
            border: 1px solid black;
          `}
  ${(props) =>
          props.lessonLocationBoolean &&
          css`
            max-height: 4Rem;
            overflow: hidden;
            font-size: 0.8rem;
            margin: 1px 0;
            padding: 2px 0;
          `}

`;

export const RemoveButton = styled.button`
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

