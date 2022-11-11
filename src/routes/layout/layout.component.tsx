import { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser, setUserCourseList } from '../../redux/reducers';
import { Header } from '../../components/header';
import { LayoutContainer, RightColumn, Main, Footer } from './index';
import { courseList } from '../../mock-data';

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
