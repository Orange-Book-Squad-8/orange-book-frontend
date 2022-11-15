import styled, { css } from 'styled-components';

interface LayoutContainerProps {
  dualColumns: boolean;
}

export const LayoutContainer = styled.div<LayoutContainerProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;

  @media screen and (min-width: 576px) {
    ${({ dualColumns }) =>
      dualColumns &&
      css`
        flex-direction: row;
      `}
  }
`;

interface RightColumnProps {
  dualColumns: boolean;
  maximizePage: boolean;
}

export const RightColumn = styled.div<RightColumnProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.primaryDarker};

  ${({ dualColumns }) =>
    dualColumns &&
    css`
      @media screen and (min-width: 576px) {
        width: calc(100% - 2rem);
        margin-left: 2rem;
      }

      @media screen and (min-width: 992px) {
        margin-left: ${({ maximizePage }: any) =>
          maximizePage ? '2rem' : '20rem'};
        width: ${({ maximizePage }: any) =>
          maximizePage ? 'calc(100% - 2rem)' : 'calc(100% - 20rem)'};
        transition: 300ms margin-left ease-in-out, 300ms width ease-in-out;
      }
    `}
`;

export const Main = styled.main``;
