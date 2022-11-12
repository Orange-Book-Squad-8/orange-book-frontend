import styled, { css } from 'styled-components';

interface DashboardItenProps {
  isDragging: boolean;
}

export const DashboardIten = styled.div<DashboardItenProps>`
  display: flex;
  flex-direction: row;
  border-color: black;
  border-style: solid;
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
`;
