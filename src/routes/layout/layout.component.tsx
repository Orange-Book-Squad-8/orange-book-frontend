import { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Footer } from '../../components/footer';
import { Header } from '../../components/header';
import { LayoutContainer, Main, RightColumn } from './index';

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

        <Footer />
      </RightColumn>
    </LayoutContainer>
  );
}

export default Layout;
