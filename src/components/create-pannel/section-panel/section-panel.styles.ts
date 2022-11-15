import { Disclosure } from '@headlessui/react';
import styled from 'styled-components';

export const MinDIv = styled.div`
  min-height: 50px;
  background-color: ${({ theme }) => theme.primary};
  border-radius: 10px 10px 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 1px;
  cursor: default;
  color: ${({ theme }) => theme.secondary};
  text-transform: uppercase;
  font-weight: bold;
`;

export const DisclosureStyled = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 1px;
`;
export const DisclosurePanel = styled.div`
  border: 1px solid ${({ theme }) => theme.secondary};
  border-radius: 0 0 10px 10px;
  border-top: none;
  overflow: hidden;
`;
export const DisclosureButtonStyled = styled(Disclosure.Button)`
  flex-grow: 1;
  border: 1px solid ${({ theme }) => theme.secondary};
  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.secondary};
  border-radius: 3px;
  text-transform: uppercase;
  font-weight: bold;

  &:hover {
    background-color: ${({ theme }) => theme.primaryDarker};
  }
`;

export const DisclosureButtonEditStyled = styled.input`
  flex-grow: 1;
  border: 1px solid ${({ theme }) => theme.secondary};
  background-color: ${({ theme }) => theme.neutral};
  border-radius: 3px;
  text-transform: uppercase;
  font-weight: bold;

  &:focus {
    outline: none;
  }
`;
export const FormDisclosureButtonEditStyled = styled.form`
  flex-grow: 1;
  display: flex;
`;

export const OptionButtons = styled.button`
  border: 1px solid ${({ theme }) => theme.secondary};
  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.secondary};
  border-radius: 3px;
  text-transform: uppercase;
  font-weight: bold;

  &:focus {
    outline: none;
  }
`;