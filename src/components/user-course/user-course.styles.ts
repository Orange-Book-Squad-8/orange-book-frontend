import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const UserCourseContainer = styled.article`
  flex: 1 1 16rem;
  max-width: 22rem;
  background-color: ${({ theme }) => theme.primary};
  border-radius: 0.5rem;
  box-shadow: 3px 3px 10px 0 black;
  transition: 300ms transform ease-in-out, 300ms box-shadow ease-in-out;

  &:hover {
    transform: scale(1.025);
    box-shadow: 5px 5px 13px 0 black;
  }
`;

export const StyledLink = styled(Link)`
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  padding: 1.25rem 1.5rem;
  text-decoration: none;
`;

export const Title = styled.h3`
  font-size: 1rem;
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;
  color: ${({ theme }) => theme.secondary};

  @media screen and (min-width: 768px) {
    font-size: 1.15rem;
  }
`;

export const Image = styled.img`
  display: block;
  width: 50%;
  margin: 0 auto;
  margin-top: 1rem;
`;

export const Progress = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 100%;
  margin-top: 1.5rem;
`;

export const ProgressRatio = styled.p`
  font-size: 0.9rem;
  font-weight: 700;
  text-align: center;
  color: ${({ theme }) => theme.neutral};

  @media screen and (min-width: 768px) {
    font-size: 1rem;
  }
`;

interface IProgressBarProps {
  progress: number;
}

export const ProgressBar = styled.div<IProgressBarProps>`
  position: relative;
  width: 100%;
  height: 0.5rem;
  margin-top: 0.75rem;
  background-color: ${({ theme }) => theme.neutral};
  border-radius: 99px;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: ${({ progress }: any) => `${progress}%`};
    height: 100%;
    background-color: ${({ theme }) => theme.secondary};
  }
`;
