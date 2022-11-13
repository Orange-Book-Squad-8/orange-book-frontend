import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ReactComponent as MenuIcon } from '../../assets/images/menu.svg';
import { useDispatch, useSelector } from 'react-redux';
import {
  HeaderButton,
  HeaderContainer,
  Logo,
  MenuButton,
  Navigation,
  NavigationAlt,
  NavigationContainer,
  NavigationItem,
  SiteTitle,
  SiteTitleAlt
} from './index';
import { login, selectRole } from '../../redux/reducers';
import { Role } from '../../interfaces/api';
import { mockedAdmin } from '../../mock-data';

interface IHeaderProps {
  headerShrinkingHandler: (showHeader: boolean) => void;
}

function Header(props: IHeaderProps) {
  const { headerShrinkingHandler, ...otherProps } = props;
  const [showMenu, setShowMenu] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const { pathname } = useLocation();
  const isNoAuthPath = pathname === '/' || pathname === '/register';
  const role: Role = useSelector(selectRole);

  const dispatch = useDispatch();

  const menuToggleHandler = () => {
    setShowMenu(!showMenu);
  };

  const headerToggleHandler = () => {
    headerShrinkingHandler(showHeader);
    setShowHeader(!showHeader);
  };

  const linkClickHandler = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const target = e.target as HTMLAnchorElement;

    if (target?.hash) {
      const element = document.querySelector(target.hash) as HTMLElement;
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <HeaderContainer
      horizontal={isNoAuthPath}
      show={showHeader}
      {...otherProps}
    >
      {isNoAuthPath ? (
        <SiteTitleAlt>
          <span>Orange Book</span>

          <Link to='/'>
            <Logo />
          </Link>
        </SiteTitleAlt>
      ) : (
        <SiteTitle>
          <span>Orange Book</span>

          <Link to='/'>
            <Logo />
          </Link>
        </SiteTitle>
      )}

      {isNoAuthPath ? (
        <Navigation show={showMenu}>
          <NavigationContainer>
            <NavigationItem>
              <Link to='/'>Home</Link>
            </NavigationItem>

            <NavigationItem>
              <Link to='#about' onClick={linkClickHandler}>
                Sobre
              </Link>
            </NavigationItem>

            <NavigationItem>
              <Link to='#courses' onClick={linkClickHandler}>
                Trilhas
              </Link>
            </NavigationItem>

            <NavigationItem invert>
              <Link to='/register'>Cadastro</Link>
            </NavigationItem>

            <NavigationItem invert>
              <Link to='/home' onClick={() => dispatch(login(mockedAdmin))}>Entrar</Link>
            </NavigationItem>
          </NavigationContainer>
        </Navigation>
      ) : (
        <NavigationAlt show={showMenu}>
          <NavigationContainer>
            <NavigationItem>
              <Link to='/home'>Home</Link>
            </NavigationItem>

            <NavigationItem>
              <Link to='/dashboard'>Dashboard</Link>
            </NavigationItem>
            {
              role?.name === 'admin' ?
                <NavigationItem>
                  <Link to='/admin/edit/lessons'>Edit Lessons</Link>
                </NavigationItem> : <></>
            }

            <NavigationItem invert>Sair</NavigationItem>
          </NavigationContainer>
        </NavigationAlt>
      )}

      <MenuButton rotate={showMenu} onClick={menuToggleHandler}>
        <MenuIcon />
      </MenuButton>

      {!isNoAuthPath && (
        <HeaderButton rotate={showHeader} onClick={headerToggleHandler}>
          <MenuIcon />
        </HeaderButton>
      )}
    </HeaderContainer>
  );
}

export default Header;
