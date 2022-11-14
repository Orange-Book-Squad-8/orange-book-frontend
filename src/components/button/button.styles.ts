import styled, { css } from 'styled-components';
import { IButtonProps } from './button.component';

const standardStyle = css`
  padding: 0.75rem 1rem;
  font-size: 1rem;
  font-weight: 700;
  text-transform: uppercase;
  color: ${({ theme }) => theme.primaryDarker};
  border-radius: 0.25rem;
  background-color: ${({ theme }) => theme.secondary};
  transition: 300ms opacity ease-in-out, 300ms background-color ease-in-out;

  &:hover {
    opacity: 0.8;
    background-color: ${({ theme }) => theme.secondaryDarker};
  }

  @media screen and (min-width: 576px) {
    font-size: 1.1rem;
  }

  @media screen and (min-width: 992px) {
    font-size: 1.25rem;
  }
`;

interface IBaseButton extends IButtonProps {
  standard?: boolean;
}

export const BaseButton = styled.button<IBaseButton>`
  padding: 0;
  margin: 0;
  border: none;
  background: none;
  cursor: pointer;

  ${({ standard }) => standard && standardStyle}
`;
