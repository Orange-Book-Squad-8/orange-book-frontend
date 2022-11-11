import styled from 'styled-components';

export const CourseTagContainer = styled.em`
  padding: 0.35rem 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;
  color: ${({ theme }) => theme.neutral};
  border-radius: 0.25rem;
  background-color: ${({ theme }) => theme.secondaryDarker};
`;
