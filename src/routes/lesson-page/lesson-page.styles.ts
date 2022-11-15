import styled from 'styled-components';
import { Button } from '../../components/button';
import { Section } from '../../components/section';
import { Link } from 'react-router-dom';

export const CoursePageContainer = styled(Section)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InfoSection = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1.5rem;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 50%;
    height: 100%;
    border-bottom: 2px solid ${({ theme }) => theme.secondaryDarker};

    @media screen and (max-width: 992px) {
      display: none;
    }
  }

  @media screen and (min-width: 992px) {
    flex-direction: row-reverse;
    align-items: center;
    gap: 2.5rem;
    padding: 1.5rem 2rem 3rem;
  }
`;

export const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  padding: 1rem;

  @media screen and (min-width: 576px) {
    font-size: 1.1rem;
  }

  @media screen and (min-width: 992px) {
    width: 40%;
    padding: 2rem 1.5rem;
    font-size: 1.25rem;
    border-radius: 0.5rem;
    background-color: ${({ theme }) => theme.primary};
  }
`;

export const CreatedBy = styled.p`
  width: 100%;
  font-size: 0.75rem;
  text-transform: uppercase;
  text-align: center;
  color: ${({ theme }) => theme.neutral};
  opacity: 0.8;

  @media screen and (min-width: 576px) {
    font-size: 1rem;
  }
`;

export const Creator = styled.span`
  font-weight: 700;
  color: ${({ theme }) => theme.secondaryDarker};
`;

export const CourseDescription = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.neutral};
  text-align: center;

  @media screen and (min-width: 576px) {
    font-size: 1.25rem;
  }

  @media screen and (min-width: 992px) {
    width: 60%;
    font-size: 1.35rem;
    text-align: left;
  }
`;

export const LessonLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 1.5rem;
  margin: 2.5rem auto 0;
  text-decoration: none;
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;
  color: ${({ theme }) => theme.secondaryDarker};
  border-radius: 0.25rem;
  background-color: ${({ theme }) => theme.primary};
  box-shadow: 0 0 7px 0 ${({ theme }) => theme.secondary};
  transition: 300ms transform ease-in-out, 300ms box-shadow ease-in-out;

  &:hover {
    transform: scale(1.025);
    box-shadow: 0 0 10px 0 ${({ theme }) => theme.secondary};
  }

  @media screen and (min-width: 576px) {
    font-size: 1.25rem;
  }

  @media screen and (min-width: 992px) {
    font-size: 1.35rem;
  }
`;

export const CourseLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 1.5rem;
  margin: 2.5rem auto 0;
  text-decoration: none;
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;
  color: ${({ theme }) => theme.secondaryDarker};
  border-radius: 0.25rem;
  background-color: ${({ theme }) => theme.primary};
  box-shadow: 0 0 7px 0 ${({ theme }) => theme.secondary};
  transition: 300ms transform ease-in-out, 300ms box-shadow ease-in-out;

  &:hover {
    transform: scale(1.025);
    box-shadow: 0 0 10px 0 ${({ theme }) => theme.secondary};
  }

  @media screen and (min-width: 576px) {
    font-size: 1.25rem;
  }

  @media screen and (min-width: 992px) {
    font-size: 1.35rem;
  }
`;

export const NotesFormContainer = styled.div`
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
