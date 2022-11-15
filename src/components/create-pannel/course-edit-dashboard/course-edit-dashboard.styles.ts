import { Dialog, Listbox } from '@headlessui/react';
import styled from 'styled-components';

export const CourseEditDashboardContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  border: 2px solid ${({ theme }) => theme.secondaryDarker};
  border-radius: 8px;
  background-color: ${({ theme }) => theme.primary};;
  padding: 4px 8px;
  overflow: hidden;
  gap: 1px;
  width: 30%;
  min-width: 20rem;
`;

export const InputTitle = styled.input`
  background-color: ${({ theme }) => theme.neutral};
  border: 1px solid ${({ theme }) => theme.primaryDarker};
  border-radius: 3px;

  &:focus {
    outline: none;
  }
`;
export const InputDescription = styled.textarea`
  background-color: ${({ theme }) => theme.neutral};
  border: 1px solid ${({ theme }) => theme.primaryDarker};
  border-radius: 3px;
  resize: none;
  height: 5Rem;
  font-size: 1Rem;

  :focus {
    outline: none;
  }

  &::-webkit-scrollbar {
    background-color: ${({ theme }) => theme.primary};
    width: 10px;
    height: 10px;
    border: 1px solid black;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.secondary};
    width: 5px;
    height: 5px;
    border: 1px solid black;
    border-radius: 3px;
  }
`;
export const FieldTitle = styled.p`
  color: ${({ theme }) => theme.secondary};
  text-transform: uppercase;
  font-weight: bold;
`;
export const ListButtonStyled = styled(Listbox.Button)`
  width: 200px;
`;
export const ListOptionsStyled = styled(Listbox.Options)`
  padding: 2px;
  background-color: white;
  width: 200px;
  position: absolute;
  z-index: 1;
`;
export const ListBoxDiv = styled.div`
  position: relative;
`;

export const ListboxOptionStyled = styled.div`
  :hover {
    background-color: lightgray;
    cursor: default;
  }
`;
export const SectionButton = styled.button`
  margin-top: 3px;
  padding: 2px;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.secondaryDarker};
  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.secondaryDarker};
  text-transform: uppercase;
  font-weight: bold;
  cursor: pointer;
  border-radius: 3px;

  &:focus {
    outline: none;
  }
`;

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
