import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Section } from '../../components/section';

export const DashboardContainer = styled(Section)`
  padding-bottom: 0;
`;

export const DashboardSection = styled(Section)`
  padding-top: 0;
  padding-left: 0;
  padding-right: 0;

  & > *:first-child {
    margin-bottom: 1rem;

    @media screen and (min-width: 576px) {
      margin-bottom: 1.5rem;
    }

    @media screen and (min-width: 992px) {
      margin-bottom: 2rem;
    }
  }
`;

export const CoursesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
`;

export const NoCourseMessage = styled.p`
  font-size: 1.25rem;
  text-align: center;
  color: ${({ theme }) => theme.neutral};

  @media screen and (min-width: 576px) {
    font-size: 1.5rem;
  }

  @media screen and (min-width: 992px) {
    font-size: 1.75rem;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  font-weight: 700;
  color: ${({ theme }) => theme.secondaryDarker};
  transition: 300ms color ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.secondary};
  }
`;

export const StyledLinkBlock = styled(StyledLink)`
  display: block;
  margin-top: 1.5rem;
`;
