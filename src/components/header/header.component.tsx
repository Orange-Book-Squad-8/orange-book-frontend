import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ReactComponent as MenuIcon } from '../../assets/images/menu.svg';
import { useDispatch, useSelector } from 'react-redux';
import { wait } from '../../utils';
import { logout, selectRole, toggleTheme } from '../../redux/reducers';
import { DARK_THEME, LIGHT_THEME } from '../../styles';
import { Popover } from '@headlessui/react';
import { Role } from '../../interfaces/api';
import { LoginPopup } from '../login-popup';
import { Toggler } from '../toggler';
import {
  HeaderButton,
  HeaderContainer,
  Logo,
  MenuButton,
  Navigation,
  NavigationAlt,
  NavigationContainer,
  NavigationItem,
  PopoverButton,
  SiteTitle,
  SiteTitleAlt
} from './index';

interface IHeaderProps {
  headerShrinkingHandler: (showHeader: boolean) => void;
}

function Header(props: IHeaderProps) {
  const { headerShrinkingHandler, ...otherProps } = props;
  const [showMenu, setShowMenu] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const role: Role = useSelector(selectRole);
  const dispatch = useDispatch();
  const isNoAuthPath =
    pathname === '/' || pathname === '/register' || pathname === '/login';

  const menuToggleHandler = () => {
    setShowMenu(!showMenu);
  };

  const headerToggleHandler = () => {
    headerShrinkingHandler(showHeader);
    setShowHeader(!showHeader);
  };

  const themeToggleHandler = () => {
    dispatch(toggleTheme());
  };

  const linkClickHandler = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname !== '/') {
      navigate('/');
      await wait(400);
    }

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
              <Link to="/home">Home</Link>
            </NavigationItem>

            <NavigationItem>
              <Link to="/#about" onClick={linkClickHandler}>
                Sobre
              </Link>
            </NavigationItem>

            <NavigationItem>
              <Link to="/#courses" onClick={linkClickHandler}>
                Trilhas
              </Link>
            </NavigationItem>

            <Toggler onChange={themeToggleHandler} />

            <NavigationItem $invert>
              <Link to="/register">Cadastro</Link>
            </NavigationItem>

            <Popover>
              <PopoverButton $invert>Entrar</PopoverButton>
              <LoginPopup />
            </Popover>
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

            <NavigationItem>
              <Link to="/edit/course/new">Criar Trilha</Link>
            </NavigationItem>

            {role?.name === 'admin' && (
              <NavigationItem>
                <Link to="/admin/edit/lessons">Editar li????es</Link>
              </NavigationItem>
            )}

            <Toggler onChange={themeToggleHandler} />

            <NavigationItem $invert>
              <Link to="/" onClick={() => dispatch(logout())}>
                Sair
              </Link>
            </NavigationItem>
          </NavigationContainer>
        </NavigationAlt>
      )}

      <MenuButton $rotate={showMenu} onClick={menuToggleHandler}>
        <MenuIcon />
      </MenuButton>

      {!isNoAuthPath && (
        <HeaderButton $rotate={showHeader} onClick={headerToggleHandler}>
          <MenuIcon />
        </HeaderButton>
      )}
    </HeaderContainer>
  );
}

export default Header;
