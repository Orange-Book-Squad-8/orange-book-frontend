import { useSelector } from 'react-redux';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { SwiperSlide } from 'swiper/react';
import { selectOriginalCourses, selectPlaylists } from '../../redux/reducers';
import { UserCourse } from '../../components/user-course';
import { Carrossel } from '../../components/carrossel';
import {
  DashboardContainer,
  DashboardSection,
  CoursesContainer
} from './index';

const CARROSSEL_CONFIGS = {
  modules: [Navigation, Pagination, Scrollbar, A11y, Autoplay],
  spaceBetween: 8,
  slidesPerView: 1,
  loop: true,
  pagination: { clickable: true },
  centeredSlides: false,
  autoplay: {
    delay: 2000,
    pauseOnMouseEnter: true,
    disableOnInteraction: false
  },
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

function Dashboard() {
  const courses = useSelector(selectOriginalCourses);
  const playlists = useSelector(selectPlaylists);

  return (
    <DashboardContainer title="">
      <DashboardSection title="Meus Cursos">
        <CoursesContainer>
          {courses?.map((course) => (
            <UserCourse original {...course} key={course.title} />
          ))}
        </CoursesContainer>
      </DashboardSection>

      <DashboardSection title="Minhas trilhas">
        <Carrossel configs={CARROSSEL_CONFIGS}>
          {playlists?.map((course) => (
            <SwiperSlide>
              <UserCourse {...course} />
            </SwiperSlide>
          ))}
        </Carrossel>
      </DashboardSection>
    </DashboardContainer>
  );
}

export default Dashboard;
