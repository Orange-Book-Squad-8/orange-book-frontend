import styled, { css } from 'styled-components';

const shrinkStyle = css`
  top: -1.5rem;
  left: 1rem;
  font-size: 0.9rem !important;
  transform: translateY(0);

  @media screen and (min-width: 576px) {
    font-size: 1rem !important;
  }
`;

interface IInputFieldContainer {
  textarea: boolean;
}

export const InputFieldContainer = styled.div<IInputFieldContainer>`
  position: relative;
  width: 100%;
  height: 2.5rem;
  margin-top: 2rem;

  @media screen and (min-width: 576px) {
    height: 3rem;
  }

  @media screen and (min-width: 992px) {
    height: 3.5rem;
  }

  ${({ textarea }) =>
    textarea &&
    css`
      min-height: 8rem;

      @media screen and (min-width: 576px) {
        min-height: 9rem;
      }

      @media screen and (min-width: 992px) {
        height: 10rem;
      }
    `};
`;

interface IInputLabel {
  shrink: boolean;
  textarea: boolean;
}

export const InputLabel = styled.label<IInputLabel>`
  position: absolute;
  top: 50%;
  left: 1.5rem;
  transform: translateY(-50%);
  font-size: 1rem;
  font-weight: 700;
  transition: 300ms top ease-in-out, 300ms left ease-in-out,
    300ms font-size ease-in-out, 300ms transform ease-in-out;

  ${({ textarea }) =>
    textarea &&
    css`
      top: 1.5rem;
    `};

  @media screen and (min-width: 576px) {
    font-size: 1.25rem;
  }

  @media screen and (min-width: 992px) {
    font-size: 1.35rem;
  }

  ${({ shrink }) => shrink && shrinkStyle}
`;

interface IInput {
  textarea: boolean;
}

export const Input = styled.input<IInput>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 0 0 0 1.5rem;
  font-size: 1rem;
  font-weight: 500;
  color: ${({ theme }) => theme.neutral};
  outline: none;
  border: 1px solid ${({ theme }) => theme.secondaryDarker};
  border-radius: 0.25rem;
  background-color: ${({ theme }) => theme.primary};
  transition: 300ms box-shadow ease-in-out;

  &:focus-within {
    box-shadow: 0 0 7px 0 ${({ theme }) => theme.secondary};
    & ~ ${InputLabel} {
      ${shrinkStyle}
    }
  }

  ${({ textarea }) =>
    textarea &&
    css`
      padding: 1.5rem;
    `};

  @media screen and (min-width: 576px) {
    font-size: 1.25rem;
  }

  @media screen and (min-width: 992px) {
    font-size: 1.35rem;
  }
`;

export const ErrorMessage = styled.p`
  margin-top: 0.5rem;
  font-size: 1rem;
  color: ${({ theme }) => theme.secondaryDarker};
  text-align: center;
`;
