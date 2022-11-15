import { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Header } from '../../components/header';
import { Footer, LayoutContainer, Main, RightColumn } from './index';

function Layout() {
  const [isHeaderShrunk, setIsHeaderShrunk] = useState(false);
  const { pathname } = useLocation();
  const isNoAuthPath =
    pathname === '/' || pathname === '/register' || pathname === '/login';

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
