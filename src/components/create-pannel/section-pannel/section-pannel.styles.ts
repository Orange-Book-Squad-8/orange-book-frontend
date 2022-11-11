import { Disclosure } from '@headlessui/react';
import styled from 'styled-components';

export const MinDIv = styled.div`
  min-height: 50px;
  background-color: lightgrey;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 1px;
  cursor: default;
`;

export const DisclosureStyled = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;
export const DisclosureButtonStyled = styled(Disclosure.Button)`
  flex-grow: 1;
`;

export const DisclosureButtonEditStyled = styled.input`
  flex-grow: 1;
`;
export const FormDisclosureButtonEditStyled = styled.form`
  flex-grow: 1;
  display: flex;
`;
