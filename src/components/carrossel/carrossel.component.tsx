import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import { CarrosselContainer } from './index';

const SWIPER_DEFAULT_CONFIGS = {
  modules: [Navigation, Pagination, Scrollbar, A11y, Autoplay],
  spaceBetween: 24,
  slidesPerView: 1,
  loop: true,
  pagination: { clickable: true },
  centeredSlides: true,
  autoplay: {
    delay: 2000,
    pauseOnMouseEnter: true,
    disableOnInteraction: false
  },
  breakpoints: {
    768: {
      slidesPerView: 1.3,
      spaceBetween: 24
    },
    992: {
      slidesPerView: 1.6,
      spaceBetween: 24
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 24
    }
  }
};

interface ICarrosselProps {
  children: React.ReactNode;
  configs?: null | undefined | object;
}

function Carrossel(props: ICarrosselProps) {
  const { children, configs, ...otherProps } = props;
  const carrosselConfigs = configs || SWIPER_DEFAULT_CONFIGS;

  return (
    <CarrosselContainer navigation {...carrosselConfigs} {...otherProps}>
      {children}
    </CarrosselContainer>
  );
}

export default Carrossel;
