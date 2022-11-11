import styled from 'styled-components';
import { Link } from 'react-router-dom';

interface ICourseContainer {
  original: boolean;
}

export const CourseContainer = styled.article<ICourseContainer>`
  position: relative;
  flex: 1 1 16rem;
  max-width: 22rem;
  background-color: ${({ theme }) => theme.primary};
  border: ${({ theme, original }) =>
    original ? `2px solid ${theme.secondaryDarker}` : 'none'};
  border-radius: 0.5rem;
  box-shadow: 0 0 10px 0
    ${({ theme, original }) => (original ? theme.secondary : '#101010')};
  transition: 300ms transform ease-in-out, 300ms box-shadow ease-in-out;

  &:hover {
    transform: scale(1.025);
    box-shadow: 0 0 13px 0
      ${({ theme, original }) => (original ? theme.secondary : '#101010')};
  }
`;

export const StyledLink = styled(Link)`
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  padding: 1.25rem 1.5rem;
  text-decoration: none;
`;

export const TitleImageContainer = styled.div`
  width: 100%;
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

export const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: center;
  gap: 0.5rem 1rem;
  width: 100%;
  margin-top: 1.5rem;
`;

export const OriginalStamp = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(-30%, -30%);
  width: 2.5rem;
  border-radius: 50%;
`;
