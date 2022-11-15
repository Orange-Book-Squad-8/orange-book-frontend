import styled from 'styled-components';
import { Swiper } from 'swiper/react';

export const CarrosselContainer = styled(Swiper)`
  width: 100%;
  padding: 0 0 2rem;

  & .swiper-slide {
    display: flex;
    justify-content: center;
    height: auto;
    padding: 1rem;

    & > * {
      height: 100%;
    }
  }

  & .swiper-button-prev,
  & .swiper-button-next {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.secondaryDarker};
    opacity: 0.5;
    transition: 300ms opacity ease-in-out;

    @media screen and (min-width: 576px) {
      width: 3rem;
      height: 3rem;
    }

    @media screen and (min-width: 992px) {
      width: 3.5rem;
      height: 3.5rem;
    }

    &::after {
      color: ${({ theme }) => theme.primary};
      font-size: 1.35rem;
      font-weight: 900;

      @media screen and (min-width: 576px) {
        font-size: 1.5rem;
      }

      @media screen and (min-width: 576px) {
        font-size: 1.75rem;
      }
    }

    &:hover {
      opacity: 1;
    }
  }

  & .swiper-pagination.swiper-pagination-bullets {
    & .swiper-pagination-bullet {
      background-color: ${({ theme }) => theme.secondaryDarker};
    }
  }
`;
