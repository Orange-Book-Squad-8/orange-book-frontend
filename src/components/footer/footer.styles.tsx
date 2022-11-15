import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  gap: 1rem;
  width: 100%;
  padding: 2rem 1.5rem;
  color: ${({ theme }) => theme.neutral};
  background-color: ${({ theme }) => theme.primary};
  box-shadow: 0 0 10px 0 #000;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    padding: 2.5rem 1.75rem;
  }
`;

export const Socials = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  @media screen and (min-width: 576px) {
    gap: 1.25rem;
  }

  @media screen and (min-width: 992px) {
    gap: 1.5rem;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.secondaryDarker};
  transition: 300ms color ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.secondary};
  }

  & > * {
    transition: 300ms transform ease-in-out;

    @media screen and (min-width: 576px) {
      transform: scale(1.15);
    }

    @media screen and (min-width: 992px) {
      transform: scale(1.25);
    }

    &:hover {
      transform: scale(1.25);

      @media screen and (min-width: 576px) {
        transform: scale(1.35);
      }

      @media screen and (min-width: 992px) {
        transform: scale(1.45);
      }
    }
  }
`;

export const Paragraph = styled.p`
  font-size: 0.9rem;
  text-align: center;
  color: ${({ theme }) => theme.neutral};
  opacity: 0.8;

  @media screen and (min-width: 576px) {
    gap: 1.25rem;
    font-size: 1rem;
  }

  @media screen and (min-width: 992px) {
    gap: 1.5rem;
    font-size: 1.1rem;
  }
`;

export const Emphasis = styled.em`
  color: ${({ theme }) => theme.secondaryDarker};
  font-weight: 500;
`;
