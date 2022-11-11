import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { SwiperSlide } from 'swiper/react';
import { UserCourse } from '../../components/user-course';
import { Carrossel } from '../../components/carrossel';
import { DashboardSection, CoursesContainer } from './index';
import { userCourses } from '../../mock-data';

const CARROSSEL_CONFIGS = {
  modules: [Navigation, Pagination, Scrollbar, A11y, Autoplay],
  spaceB../../redux/reducers/course-list
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
    576: {
      slidesPerView: 1.5,
      spaceBetween: 24
    },
    768: {
      slidesPerView: 1.8,
      spaceBetween: 24
    },
    992: {
      slidesPerView: 2.4,
      spaceBetween: 24
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 24
    }
  }
};

function Dashboard() {
  return (
    <>
      <DashboardSection title="Meus Cursos">
        <CoursesContainer>
          {userCourses.map((course) => (
            <UserCourse {...course} key={course.title} />
          ))}
        </CoursesContainer>
      </DashboardSection>

      <DashboardSection title="Minhas trilhas">
        <Carrossel configs={CARROSSEL_CONFIGS}>
          {userCourses.map((course) => (
            <SwiperSlide>
              <UserCourse {...course} image={'custom-course.png'} />
            </SwiperSlide>
          ))}
        </Carrossel>
      </DashboardSection>
    </>
  );
}

export default Dashboard;
