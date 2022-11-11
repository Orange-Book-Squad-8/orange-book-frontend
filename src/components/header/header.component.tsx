import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ReactComponent as MenuIcon } from '../../assets/images/menu.svg';
import { useDispatch } from 'react-redux'
import {
  HeaderContainer,
  SiteTitle,
  SiteTitleAlt,
  Logo,
  MenuButton,
  HeaderButton,
  Navigation,
  NavigationAlt,
  NavigationContainer,
  NavigationItem
} from './index';
import { mockedAdmin } from '../../mock-data';
import { login } from '../../redux/reducers/user';

interface IHeaderProps {
  headerShrinkingHandler: (showHeader: boolean) => void;
}

function Header(props: IHeaderProps) {
  const { headerShrinkingHandler, ...otherProps } = props;
  const [showMenu, setShowMenu] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const { pathname } = useLocation();
  const isNoAuthPath = pathname === '/' || pathname === '/register';

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

          <Link to="/">
            <Logo />
          </Link>
        </SiteTitleAlt>
      ) : (
        <SiteTitle>
          <span>Orange Book</span>

          <Link to="/">
            <Logo />
          </Link>
        </SiteTitle>
      )}

      {isNoAuthPath ? (
        <Navigation show={showMenu}>
          <NavigationContainer>
            <NavigationItem>
              <Link to="/">Home</Link>
            </NavigationItem>

            <NavigationItem>
              <Link to="#about" onClick={linkClickHandler}>
                Sobre
              </Link>
            </NavigationItem>

            <NavigationItem>
              <Link to="#courses" onClick={linkClickHandler}>
                Trilhas
              </Link>
            </NavigationItem>

            <NavigationItem invert>
              <Link to="/register">Cadastro</Link>
            </NavigationItem>

            <NavigationItem invert>
              <Link to="/adm/dashboard" onClick={() => {dispatch(login(mockedAdmin))}}>Entrar</Link>
            </NavigationItem>
          </NavigationContainer>
        </Navigation>
      ) : (
        <NavigationAlt show={showMenu}>
          <NavigationContainer>
            <NavigationItem>
              <Link to="/home">Home</Link>
            </NavigationItem>

            <NavigationItem>
              <Link to="/dashboard">Dashboard</Link>
            </NavigationItem>

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
