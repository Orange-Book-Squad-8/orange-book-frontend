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
