import styled from 'styled-components';
import { Section } from '../../components/section';

export const DashboardSection = styled(Section)`
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
