import styled from 'styled-components';
import { Button } from '../button';

export const LoginContainer = styled.div`
  position: absolute;
  top: calc(100% + 2rem);
  right: 50%;
  transform: translateX(50%);
  display: flex;
  justify-content: center;
  width: 90%;
  max-width: 360px;
  padding: 1rem;
  box-shadow: 0 0 10px 5px #101010;
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.primaryDarker};

  @media screen and (min-width: 576px) {
    top: calc(100% + 1rem);
  }

  @media screen and (min-width: 768px) {
    right: 2.5rem;
    transform: none;
    max-width: 420px;
  }
`;

export const FormContainer = styled.div`
  width: 100%;
  color: ${({ theme }) => theme.neutral};
`;

export const FormTitle = styled.h4`
  font-size: 1.25rem;
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;

  @media screen and (min-width: 576px) {
    font-size: 1.75rem;
  }

  @media screen and (min-width: 992px) {
    font-size: 2rem;
  }
`;

interface ISaveButton {
  standard: boolean;
  disabled: boolean;
  type: string;
}

export const SaveButton = styled(Button)<ISaveButton>`
  display: block;
  width: 100%;
  margin: 1.5rem auto;
`;
