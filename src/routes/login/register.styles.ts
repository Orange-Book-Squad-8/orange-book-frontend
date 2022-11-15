import styled from 'styled-components';
import { Button } from '../../components/button';

export const RegisterContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 2rem 1.25rem;

  @media screen and (min-width: 576px) {
    padding: 3rem 3.5rem;
  }
`;

export const FormContainer = styled.div`
  width: 100%;
  max-width: 720px;
  margin-top: 2.5rem;
  color: ${({ theme }) => theme.neutral};
  margin-bottom: 100px;
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
  max-width: 360px;
  margin: 1.5rem auto;
`;
