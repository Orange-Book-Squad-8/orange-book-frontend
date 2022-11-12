import styled, { css } from 'styled-components';
import { Disclosure } from '@headlessui/react';
import { ReactComponent as ArrowImage } from '../../assets/images/menu.svg';

const MyDisclosure = ({ children, tag = 'div', ...otherProps }: any) => {
  return (
    <Disclosure as={tag} {...otherProps}>
      {children}
    </Disclosure>
  );
};

export const StyledDisclosure = styled(MyDisclosure)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
`;

export const StyledDisclosureButton = styled(Disclosure.Button)<any>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  width: 100%;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  font-weight: 700;
  font-family: ${({ theme }) => theme.ubuntu};
  color: ${({ theme }) => theme.secondaryDarker};
  text-transform: uppercase;
  border-radius: 0.5rem;
  border: 1px solid ${({ theme }) => theme.secondaryDarker};
  background-color: ${({ theme }) => theme.primary};
  cursor: pointer;
  transition: 150ms color ease-in-out, 150ms border-color ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.secondary};
    border-color: ${({ theme }) => theme.secondary};
  }

  @media screen and (min-width: 576px) {
    padding: 0.75rem 1.5rem;
    font-size: 1.25rem;
  }

  @media screen and (min-width: 992px) {
    padding: 1rem 2.5rem;
    font-size: 1.35rem;
  }
`;

interface IArrowIcon {
  open: boolean;
}

export const ArrowIcon = styled(ArrowImage)<IArrowIcon>`
  width: 1.5rem;
  transition: transform 300ms ease-in-out;

  @media screen and (min-width: 576px) {
    width: 1.75rem;
  }

  @media screen and (min-width: 992px) {
    width: 2rem;
  }

  ${({ open }) =>
    open &&
    css`
      transform: rotate(-180deg);
    `}
`;

export const StyledDisclosurePanel = styled(Disclosure.Panel)`
  width: 100%;
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.primary};
  overflow: hidden;
`;
