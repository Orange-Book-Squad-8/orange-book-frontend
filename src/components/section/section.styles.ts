import React from 'react';
import styled from 'styled-components';

export const SectionContainer = styled.section`
  width: 100%;
  padding: 2rem 1.25rem;

  @media screen and (min-width: 576px) {
    padding: 3rem 3.5rem;
  }
`;

interface ITitleProps {
  as?: React.ElementType;
}

export const Title = styled.h2<ITitleProps>`
  font-size: 1.5rem;
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;
  color: ${({ theme }) => theme.secondaryDarker};

  @media screen and (min-width: 576px) {
    font-size: 1.75rem;
  }

  @media screen and (min-width: 992px) {
    font-size: 2rem;
  }
`;
