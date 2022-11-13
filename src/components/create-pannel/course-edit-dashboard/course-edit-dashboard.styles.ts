import { Dialog, Listbox } from '@headlessui/react';
import styled from 'styled-components';

export const CourseEditDashboardContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: wheat;
  padding: 4px;
  border-radius: 5px;
  overflow: hidden;
  gap: 1px;
  width: 30%;
  min-width: 20rem;
`;
export const ListboxButtonStyled = styled(Listbox.Button)`
  width: 200px;
`;
export const ListboxOptionsStyled = styled(Listbox.Options)`
  padding: 2px;
  background-color: white;
  width: 200px;
`;
export const ListboxOptionStyled = styled.div`
  :hover {
    background-color: lightgray;
    cursor: default;
  }
`;
export const SectionButton = styled.button``;

export const DialogPanel = styled(Dialog.Panel)`
  position: fixed;
  inset: 0 0 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(34 12 64 / 60%);;
`;
export const DialogTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: goldenrod;
  width: 20%;
  height: 20%;
  border-radius: 5px;
  opacity: 1;
`;
