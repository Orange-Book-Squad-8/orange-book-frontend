import { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser, setCourse, setSectionList, setUserCourseList } from '../../redux/reducers';
import { Header } from '../../components/header';
import { Footer, LayoutContainer, Main, RightColumn } from './index';
import { courseList } from '../../mock-data';
import { CourseDTO, Lesson, Section } from '../../interfaces/api';
import { getLesson, getSection } from '../../mock-data/mockCourse';

function Layout() {
  const [isHeaderShrunk, setIsHeaderShrunk] = useState(false);
  const { pathname } = useLocation();
  const isNoAuthPath = pathname === '/' || pathname === '/register';
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  useEffect(() => {
    if (user) {
      dispatch(setUserCourseList(courseList));
    }
  }, [user]);

  const headerShrinkingHandler = (shrink = false) => {
    setIsHeaderShrunk(shrink);
  };


  const list: Lesson[] = getLesson(25);
  const section: Section[] = getSection(5, list);


  dispatch(setSectionList(section));
  dispatch(setCourse(
    {
      id: 3,
      category: 'FRONT_END',
      creator: 'creator1',
      description:
        'Blandit libero volutpat sed cras ornare arcu dui vivamus. Scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus et. At tellus at urna condimentum. Enim nulla aliquet porttitor lacus luctus. Ut diam quam nulla porttitor massa.',
      difficulty: 'BEGINNER',
      title: 'Do Front ao Fim, tudo sobre React',
      totalLessons: 9,
      visible: true
    } as CourseDTO));

  return (
    <LayoutContainer dualColumns={!isNoAuthPath}>
      <Header headerShrinkingHandler={headerShrinkingHandler} />

      <RightColumn dualColumns={!isNoAuthPath} maximizePage={isHeaderShrunk}>
        <Main>
          <Outlet />
        </Main>

        <Footer></Footer>
      </RightColumn>
    </LayoutContainer>
  );
}

export default Layout;
