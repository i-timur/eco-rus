import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import {observer} from 'mobx-react-lite';

import ecoDollar from '../../assets/icons/eco-dollar.svg';
import logo from '../../assets/images/navbar/logo.svg';
import LogoMobile from '../../assets/images/navbar/logo-mobile.svg';
import avatarIcon from '../../assets/images/navbar/profile-image-s.svg';
import Icon from '../UI/Icon/Icon';
import {useStore} from '../../index';
import ModalSignIn from '../Modals/ModalSignIn/ModalSignIn';
import ModalSidebar from '../Modals/ModalSidebar/ModalSidebar';
import './Navbar.scss';

const activeClassName = 'navigation__link navigation__link_active';
const notActiveClassName = 'navigation__link';

const Navbar: React.FC = observer(() => {
  const {modalStore: {setCurrentModal}, authorizationStore: {isAuthenticated}, userStore: {getUser}} = useStore();

  const user = getUser();

  const userId = user?.getId();
  const userName = user?.getUserName();
  const balance = user?.getBalance();

  return (
    <div className='navbar'>
      <div className='navbar__container container'>
        <div className='navbar__logo'>
          <Link to='/'>
            <img
              src={logo}
              alt='logo'
            />
          </Link>
        </div>
        <div className="navbar__logo-mobile">
          <Link to="/">
            <img
              src={LogoMobile}
              alt="logo"
            />
          </Link>
        </div>
        <nav className='navbar__navigation navigation'>
          <ul className='navigation__list'>
            <li className='navigation__item'>
              <NavLink
                to='/'
                className={({isActive}) => isActive ? activeClassName : notActiveClassName}
              >
                Главная
              </NavLink>
            </li>
            <li className='navigation__item'>
              <NavLink
                to='/map'
                className={({isActive}) => isActive ? activeClassName : notActiveClassName}
              >
                Пункты сбора
              </NavLink>
            </li>
            <li className='navigation__item'>
              <NavLink
                to='/market'
                className={({isActive}) => isActive ? activeClassName : notActiveClassName}
              >
                ЭкоМаркет
              </NavLink>
            </li>
            <li className='navigation__item'>
              <NavLink
                to='/about'
                className={({isActive}) => isActive ? activeClassName : notActiveClassName}
              >
                О сервисе
              </NavLink>
            </li>
          </ul>
        </nav>
        <ul className='navbar__user user-navbar'>
          <li className='user-navbar__city'>
            <button className='user-navbar__button'>
              <Icon name='pin' color='rgba(0, 11, 38, 0.72)'/>
              Казань
            </button>
          </li>
          {isAuthenticated ? (
            <>
              <li className='user-navbar__balance'>
                <Link
                  to={`/profile/${userId}`}
                  className='user-navbar__link'
                >
                  <img src={ecoDollar} alt='eco-dollar'/>
                  {balance}
                </Link>
              </li>
              <li className='user-navbar__item'>
                <Link
                  to={`/profile/${userId}`}
                  className='user-navbar__link'
                >
                  <img src={avatarIcon} alt='avatar'/>
                  <span className="user-navbar__user-name">{userName}</span>
                </Link>
              </li>
            </>
          ) : (
            <>
              <li className='user-navbar__item'>
                <button
                  className='user-navbar__button'
                  onClick={() => setCurrentModal(<ModalSignIn/>)}
                >
                  <Icon name='login' color='rgba(0, 11, 38, 0.72)'/>
                  Войти
                </button>
              </li>
            </>
          )}
        </ul>
        <div className="navbar__mobile">
          <div
            className="user-navbar__burger burger"
            onClick={() => setCurrentModal(<ModalSidebar />)}
          >
            <div className="burger__container">
              <div className="burger__line"/>
              <div className="burger__line"/>
              <div className="burger__line"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Navbar;
