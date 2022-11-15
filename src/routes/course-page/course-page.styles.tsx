import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Section } from '../../components/section';

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

export const CourseSectionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  max-width: 720px;
  margin-top: 2.5rem;
`;

export const LessonsContainer = styled.ul`
  width: 100%;
`;

export const LessonItem = styled.li`
  position: relative;
  width: 100%;
  padding: 1rem;
  color: ${({ theme }) => theme.neutral};
  border-bottom: 1px solid ${({ theme }) => theme.primaryDarker};

  @media screen and (min-width: 576px) {
    padding: 1.5rem;
  }

  @media screen and (min-width: 992px) {
    padding: 2rem;
  }
`;

export const LessonTitle = styled.h4`
  width: 100%;
  margin-bottom: 1rem;
  font-size: 1rem;
  font-weight: 700;
  text-align: center;
  color: ${({ theme }) => theme.secondary};
  text-transform: uppercase;

  @media screen and (min-width: 576px) {
    font-size: 1.25rem;
  }

  @media screen and (min-width: 992px) {
    font-size: 1.35rem;
  }
`;

export const StyledLink = styled(Link)`
  display: block;
  text-decoration: none;
  padding: 0.75rem 1rem;
  font-size: 1rem;
  font-weight: 700;
  text-transform: uppercase;
  color: ${({ theme }) => theme.primaryDarker};
  border-radius: 0.25rem;
  background-color: ${({ theme }) => theme.secondary};
  transition: 300ms opacity ease-in-out, 300ms background-color ease-in-out;

  &:hover {
    opacity: 0.8;
    background-color: ${({ theme }) => theme.secondaryDarker};
  }

  @media screen and (min-width: 576px) {
    font-size: 1.1rem;
  }

  @media screen and (min-width: 992px) {
    font-size: 1.25rem;
  }
`;

export const LessonInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  @media screen and (min-width: 576px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem 2rem;
    font-size: 1.25rem;
  }

  @media screen and (min-width: 992px) {
    font-size: 1.35rem;
  }
`;

export const InfoItem = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: auto;
  font-weight: 500;
  text-align: center;
`;
