import React from 'react';
import styled, { css } from 'styled-components';
import { ReactComponent as LogoImage } from '../../assets/images/logo.svg';
import { Button } from '../button';
import { Popover } from '@headlessui/react';

type HeaderContainerProps = {
  show: boolean;
  horizontal?: boolean;
};

export const HeaderContainer = styled.header<HeaderContainerProps>`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.75rem 1rem;
  background-color: ${({ theme }) => theme.primary};
  box-shadow: 0 0 10px 0 black;
  transition: 300ms width ease-in-out;

  ${({ horizontal }) =>
    horizontal
      ? css`
          @media screen and (min-width: 576px) {
            padding: 1rem;
          }

          @media screen and (min-width: 768px) {
            flex-direction: row;
            justify-content: space-between;
            padding: 1.25rem 2rem;
          }
        `
      : css`
          @media screen and (min-width: 576px) {
            position: fixed;
            top: 0;
            left: 0;
            justify-content: flex-start;
            gap: 3rem;
            width: ${({ show }: any) => (show ? '20rem' : '0%')};
            height: 100vh;
            z-index: 999;
          }
        `}
`;

export const SiteTitle = styled.h1`
  display: flex;
  justify-content: center;
  width: 100%;
  overflow: hidden;

  & > span {
    position: absolute;
    opacity: 0;
  }
`;

export const SiteTitleAlt = styled.h1`
  display: flex;
  justify-content: center;
  width: 100%;
  overflow: hidden;

  & > span {
    position: absolute;
    opacity: 0;
  }

  @media screen and (min-width: 768px) {
    justify-content: flex-start;
    width: 20%;
  }
`;

export const Logo = styled(LogoImage)`
  width: 100%;
  max-width: 200px;
  height: auto;
  color: ${({ theme }) => theme.secondaryDarker};
`;

interface IMenuButtonProps {
  $rotate: boolean;
  onClick: React.MouseEventHandler;
}

export const MenuButton = styled(Button)<IMenuButtonProps>`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 50%);
  width: 40px;
  height: 40px;
  color: ${({ theme }) => theme.secondaryDarker};
  border-radius: 50%;
  background-color: ${({ theme }) => theme.primary};
  box-shadow: 0 0 10px 0 black;
  z-index: 2;
  transition: 300ms transform ease-in-out, 300ms color ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.secondary};
  }

  @media screen and (min-width: 576px) {
    display: none;
  }

  ${({ $rotate }) =>
    $rotate &&
    css`
      transform: translate(-50%, 50%) rotate(180deg);

      @media screen and (min-width: 576px) {
        transform: translate(50%, -50%) rotate(90deg);
      }
    `}
`;

interface IHeaderButtonProps {
  $rotate: boolean;
  onClick: React.MouseEventHandler;
}

export const HeaderButton = styled(Button)<IHeaderButtonProps>`
  display: none;
  position: absolute;
  right: 0;
  top: 50%;
  transform: translate(50%, -50%) rotate(-90deg);
  width: 40px;
  height: 40px;
  color: ${({ theme }) => theme.secondaryDarker};
  border-radius: 50%;
  background-color: ${({ theme }) => theme.primary};
  box-shadow: 0 0 10px 0 black;
  z-index: 2;
  transition: 300ms transform ease-in-out, 300ms color ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.secondary};
  }

  @media screen and (min-width: 576px) {
    display: block;
  }

  ${({ $rotate }) =>
    $rotate &&
    css`
      transform: translate(-50%, 50%) rotate(180deg);

      @media screen and (min-width: 576px) {
        transform: translate(50%, -50%) rotate(90deg);
      }
    `}
`;

type NavigationProps = {
  show: boolean;
};

export const Navigation = styled.nav<NavigationProps>`
  width: 100%;
  height: ${({ show }) => (show ? '297px' : '0')};
  overflow: hidden;
  transition: 300ms height ease-in-out;

  @media screen and (min-width: 576px) {
    height: auto;
    width: auto;
    overflow: visible;
  }
`;

export const NavigationContainer = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  padding: 1.75rem 0.5rem;
  font-size: 1rem;
  font-weight: 700;
  text-align: center;
  text-transform: uppercase;

  @media screen and (min-width: 576px) {
    flex-direction: row;
    width: auto;
    padding: 0.8rem 0.5rem;
  }

  @media screen and (min-width: 992px) {
    font-size: 1.25rem;
  }
`;

export const NavigationAlt = styled(Navigation)`
  width: 100%;
  height: ${({ show }) => (show ? '237px' : '0')};
  overflow: hidden;

  & ${NavigationContainer} {
    flex-direction: column;
  }

  @media screen and (min-width: 576px) {
    height: auto;
  }
`;

type NavigationItemProps = {
  $invert?: boolean;
};

export const NavigationItem = styled.li<NavigationItemProps>`
  position: relative;
  color: ${({ theme }) => theme.secondary};
  cursor: pointer;

  ${({ $invert }) =>
    $invert
      ? css`
          padding: 0.4rem 0.75rem;
          color: ${({ theme }) => theme.primary};
          border-radius: 0.25rem;
          background-color: ${({ theme }) => theme.secondaryDarker};
          transition: 300ms background-color ease-in-out;

          &:hover {
            background-color: ${({ theme }) => theme.secondary};
          }
        `
      : css`
          &::after {
            content: '';
            position: absolute;
            left: 50%;
            bottom: -0.75rem;
            transform: translateX(-50%);
            transform-origin: 50%;
            display: block;
            width: 0;
            border-bottom: 0.25rem solid ${({ theme }) => theme.secondary};
            border-bottom-left-radius: 50%;
            border-bottom-right-radius: 50%;
            transition: 300ms width ease-in-out;
          }

          &:hover::after {
            width: 100%;
          }
        `}
  & > a {
    text-decoration: none;
    color: inherit;
  }
`;

export const PopoverButton = styled(Popover.Button)<any>`
  position: relative;
  font: inherit;
  text-transform: uppercase;
  color: ${({ theme }) => theme.secondary};
  border: none;
  cursor: pointer;

  ${({ $invert }) =>
    $invert
      ? css`
          padding: 0.4rem 0.75rem;
          color: ${({ theme }) => theme.primary};
          border-radius: 0.25rem;
          background-color: ${({ theme }) => theme.secondaryDarker};
          transition: 300ms background-color ease-in-out;

          &:hover {
            background-color: ${({ theme }) => theme.secondary};
          }
        `
      : css`
          &::after {
            content: '';
            position: absolute;
            left: 50%;
            bottom: -0.75rem;
            transform: translateX(-50%);
            transform-origin: 50%;
            display: block;
            width: 0;
            border-bottom: 0.25rem solid ${({ theme }) => theme.secondary};
            border-bottom-left-radius: 50%;
            border-bottom-right-radius: 50%;
            transition: 300ms width ease-in-out;
          }

          &:hover::after {
            width: 100%;
          }
        `}
  & > a {
    text-decoration: none;
    color: inherit;
  }
`;
