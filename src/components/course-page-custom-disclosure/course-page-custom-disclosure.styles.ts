import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
  width: 100%;
  text-decoration: none;
  color: inherit;
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
