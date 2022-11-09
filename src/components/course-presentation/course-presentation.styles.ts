import styled from 'styled-components';

interface ICoursePresentationContainerProps {
  image: string;
}

export const CoursePresentationContainer = styled.article<ICoursePresentationContainerProps>`
  flex: 1 1 18rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 360px;
  padding: 2rem 2.5rem;
  margin: 0 auto;
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.primary};
  background-image: ${({ image }) => `url(${image})`};
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  box-shadow: 0 0 10px 0 black;
`;

export const Title = styled.h4`
  font-size: 1.15rem;
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;
  color: ${({ theme }) => theme.secondary};
`;

export const Description = styled.p`
  font-size: 0.9rem;
  font-weight: 700;
  text-align: center;
  color: ${({ theme }) => theme.neutral};
`;
