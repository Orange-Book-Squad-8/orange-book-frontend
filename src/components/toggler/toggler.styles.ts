import styled from 'styled-components';

export const StyledToggler = styled.input.attrs({
  type: 'checkbox'
})`
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  position: relative;
  width: 52px;
  height: 24px;
  border: 2px solid ${({ theme }) => theme.primary};

  border-radius: 999px;
  background: linear-gradient(
    90deg,
    rgba(39, 109, 135, 1) 0%,
    rgba(56, 176, 222, 1) 35%
  );
  cursor: pointer;

  &::after {
    position: absolute;
    top: 2px;
    right: 2px;
    display: block;
    content: ' ';
    width: 16px;
    height: 16px;
    border-radius: 999px;
    background-color: ${({ theme }) => theme.secondary};
    transition: all 400ms ease;
  }

  &:checked {
    border: 2px solid ${({ theme }) => theme.primary};
    background: linear-gradient(
      270deg,
      rgba(0, 0, 0, 1) 0%,
      rgba(34, 34, 34, 1) 35%
    );

    &::after {
      background-color: ${({ theme }) => theme.secondary};
      right: 30px;
    }
  }
`;
