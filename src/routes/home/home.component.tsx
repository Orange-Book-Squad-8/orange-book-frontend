import { A11y, Navigation, Pagination, Scrollbar } from 'swiper';
import { useDispatch, useSelector } from 'react-redux';
import { SwiperSlide } from 'swiper/react';
import { CourseCard } from '../../components/course-card';
import { Carrossel } from '../../components/carrossel';
import { HomeContainer, HomeSection, OriginalsContainer } from './index';
import { useEffect } from 'react';
import {
  selectByUserPrefference,
  selectFilteredByCategory,
  selectOriginals,
  setAvailableCourses
} from '../../redux/reducers';
import { Course, CourseDTO } from '../../interfaces/api';
import { api } from '../../lib/axios';

const CARROSSEL_CONFIGS = {
  modules: [Navigation, Pagination, Scrollbar, A11y],
  spaceBetween: 8,
  slidesPerView: 1,
  loop: true,
  pagination: { clickable: true },
  centeredSlides: false,
  breakpoints: {
    576: {
      slidesPerView: 1.5,
      centeredSlides: true
    },
    768: {
      slidesPerView: 1.8,
      centeredSlides: true
    },
    992: {
      slidesPerView: 2.4,
      centeredSlides: true
    },
    1200: {
      slidesPerView: 3,
      centeredSlides: false
    }
  }
};

function Home() {
  const dispatch = useDispatch();
  const originals = useSelector(selectOriginals);
  const preferred = useSelector(selectByUserPrefference);
  const byCategory = useSelector(selectFilteredByCategory);

  useEffect(() => {
    fetchAvailableCourses();
  }, []);

  async function fetchAvailableCourses() {
    try {
      const response = await api.get<CourseDTO[]>('/courses/all');

      dispatch(setAvailableCourses(response.data));
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <HomeContainer title=''>
      {originals.length ? (
        <HomeSection title='Originals da Orange'>
          <OriginalsContainer>
            {originals?.map((course) => (
              <CourseCard original {...course} key={course.title} />
            ))}
          </OriginalsContainer>
        </HomeSection>
      ) : (
        ''
      )}

      {preferred.length ? (
        <HomeSection title='De acordo com suas prefer??ncias'>
          <Carrossel configs={CARROSSEL_CONFIGS}>
            {preferred?.map((course: Course) => (
              <SwiperSlide key={course.id}>
                <CourseCard
                  original={course.creator === 'Orange Originals'} key={course.id}
                  {...course}
                />
              </SwiperSlide>
            ))}
          </Carrossel>
        </HomeSection>
      ) : (
        ''
      )}

      {byCategory?.frontEnd.length ? (
        <HomeSection title='Front End'>
          <Carrossel configs={CARROSSEL_CONFIGS}>
            {byCategory?.frontEnd?.map((course: Course) => (
              <SwiperSlide key={course.id}>
                <CourseCard key={course.id}
                            original={course.creator === 'Orange Originals'}
                            {...course}
                />
              </SwiperSlide>
            ))}
          </Carrossel>
        </HomeSection>
      ) : (
        ''
      )}

      {byCategory?.backEnd.length ? (
        <HomeSection title='Back End'>
          <Carrossel configs={CARROSSEL_CONFIGS}>
            {byCategory?.backEnd?.map((course: Course) => (
              <SwiperSlide key={course.id}>
                <CourseCard key={course.id}
                            original={course.creator === 'Orange Originals'}
                            {...course}
                />
              </SwiperSlide>
            ))}
          </Carrossel>
        </HomeSection>
      ) : (
        ''
      )}

      {byCategory?.fullstack.length ? (
        <HomeSection title='Fullstack'>
          <Carrossel configs={CARROSSEL_CONFIGS}>
            {byCategory?.fullstack?.map((course: Course) => (
              <SwiperSlide key={course.id}>
                <CourseCard key={course.id}
                            original={course.creator === 'Orange Originals'}
                            {...course}
                />
              </SwiperSlide>
            ))}
          </Carrossel>
        </HomeSection>
      ) : (
        ''
      )}

      {byCategory?.ux.length ? (
        <HomeSection title='UX'>
          <Carrossel configs={CARROSSEL_CONFIGS}>
            {byCategory?.ux?.map((course: Course) => (
              <SwiperSlide key={course.id}>
                <CourseCard key={course.id}
                            original={course.creator === 'Orange Originals'}
                            {...course}
                />
              </SwiperSlide>
            ))}
          </Carrossel>
        </HomeSection>
      ) : (
        ''
      )}

      {byCategory?.ui.length ? (
        <HomeSection title='UI'>
          <Carrossel configs={CARROSSEL_CONFIGS}>
            {byCategory?.ui?.map((course: Course) => (
              <SwiperSlide key={course.id}>
                <CourseCard key={course.id}
                            original={course.creator === 'Orange Originals'}
                            {...course}
                />
              </SwiperSlide>
            ))}
          </Carrossel>
        </HomeSection>
      ) : (
        ''
      )}
    </HomeContainer>
  );
}

export default Home;
