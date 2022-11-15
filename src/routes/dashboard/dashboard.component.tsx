import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { A11y, Autoplay, Navigation, Pagination, Scrollbar } from 'swiper';
import { SwiperSlide } from 'swiper/react';
import { PlusCircle } from 'phosphor-react';
import { useScreenSizeObserver } from '../../hooks';
import {
  selectMyCourses,
  selectOriginalCourses,
  selectPlaylists,
  selectUser,
  selectWatchedLessons,
  setUserCourseList
} from '../../redux/reducers';
import { api } from '../../lib/axios';
import { UserCourse } from '../../components/user-course';
import { Carrossel } from '../../components/carrossel';
import {
  CoursesContainer,
  DashboardContainer,
  DashboardSection,
  NoCourseMessage,
  StyledLink,
  StyledLinkBlock
} from './index';
import { AppUserCourseDTO } from '../../interfaces/api';

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
  const watchedLesson = useSelector(selectWatchedLessons);
  const playlists = useSelector(selectPlaylists);
  const myCourses = useSelector(selectMyCourses);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const { isSmall, isLarge, isMedium } = useScreenSizeObserver();
  useEffect(() => {
    fetchUserCourses();
  }, []);

  async function fetchUserCourses() {
    try {
      const userCourses = await api.get<AppUserCourseDTO>(`/users/${user.id}/courses`);
      dispatch(setUserCourseList(userCourses.data));
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <DashboardContainer title=''>
      <DashboardSection title='Cursos Orange Originals'>
        <CoursesContainer>
          {courses?.map((course) => (
            <UserCourse original {...course} key={course.id}
                        finishedLessons={watchedLesson[Number(course.id)].length} />
          ))}
        </CoursesContainer>
      </DashboardSection>

      {courses?.length == 0 && playlists?.length == 0 ? (
        <NoCourseMessage>
          <div>Você ainda não está matriculado em nenhuma trilha.</div>
          <div>
            Conheça nossos <StyledLink to='/home'>cursos</StyledLink> ou crie
            sua própria trilha:
          </div>
          <StyledLinkBlock to='/edit/course/new'>
            {isSmall ? <PlusCircle size={64} weight='bold' /> : <></>}
            {isMedium ? <PlusCircle size={80} weight='bold' /> : <></>}
            {isLarge ? <PlusCircle size={96} weight='bold' /> : <></>}
          </StyledLinkBlock>
        </NoCourseMessage>
      ) : (
        <></>
      )}

      {playlists?.length ? (
        <DashboardSection title='Trilhas inscritas'>
          <Carrossel configs={CARROSSEL_CONFIGS}>
            {playlists?.map((course) => (
              <SwiperSlide>
                <UserCourse {...course} finishedLessons={watchedLesson[Number(course.id)].length} />
              </SwiperSlide>
            ))}
          </Carrossel>
        </DashboardSection>
      ) : (
        <></>
      )}

      {myCourses?.length ? (
        <DashboardSection title='Trilhas Criadas'>
          <Carrossel configs={CARROSSEL_CONFIGS}>
            {myCourses?.map((course) => (
              <SwiperSlide>
                <UserCourse {...course} finishedLessons={watchedLesson[Number(course.id)].length} />
              </SwiperSlide>
            ))}
          </Carrossel>
        </DashboardSection>
      ) : (
        <></>
      )}
      {courses?.length != 0 || playlists?.length != 0 ? (
        <NoCourseMessage>
          <div>
            Crie sua própria trilha:
          </div>
          <StyledLinkBlock to='/edit/course/new'>
            {isSmall ? <PlusCircle size={64} weight='bold' /> : <></>}
            {isMedium ? <PlusCircle size={80} weight='bold' /> : <></>}
            {isLarge ? <PlusCircle size={96} weight='bold' /> : <></>}
          </StyledLinkBlock>
        </NoCourseMessage>
      ) : (
        <></>
      )}

    </DashboardContainer>
  );
}

export default Dashboard;
