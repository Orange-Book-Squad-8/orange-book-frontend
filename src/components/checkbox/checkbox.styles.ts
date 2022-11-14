import styled from 'styled-components';

export const CheckBoxContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.35rem;
  padding: 0.5rem 0.75rem;
  color: ${({ theme }) => theme.neutral};
  font-weight: 700;
  text-transform: uppercase;
  border-radius: 0.25rem;
  background-color: ${({ theme }) => theme.secondary};
  cursor: pointer;
  box-sizing: border-box;
  transition: 300ms background-color ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.secondaryDarker};
  }
`;

export const Input = styled.input`
  position: relative;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 0.25rem;
  background-color: ${({ theme }) => theme.primary};
  cursor: pointer;

  &:checked::after {
    content: '✔';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-weight: 700;
    font-size: 1rem;
    color: ${({ theme }) => theme.neutral};
  }
`;

export const Label = styled.label`
  cursor: pointer;
`;
