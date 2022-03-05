import React, {useState} from 'react';

import './Navbar.scss';
import logo from '../../assets/icons/logo.svg';
import ecoDollar from  '../../assets/icons/eco-dollar.svg';
import avatarIcon from '../../assets/icons/profile-image.svg';
import {Link, NavLink} from 'react-router-dom';
import Icon from '../Icon/Icon';
import {useStore} from '../../index';
import {observer} from 'mobx-react-lite';
import ModalSignIn from '../ModalSignIn/ModalSignIn';

const activeClassName = 'navigation__link navigation__link_active';
const notActiveClassName = 'navigation__link';

const userId = 1;

const Navbar: React.FC = observer(() => {
  const {modalStore: {setCurrentModal}, authorizationStore: {isAuthenticated}} = useStore();

  return (
    <div className='navbar'>
      <div className='navbar__container container'>
        <div className='navbar__logo'>
          <Link to='/'>
            <img src={logo} alt='logo' />
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
          <li
            className='user-navbar__item'
            style={{
              marginRight: '48px'
            }}
          >
            <Icon name='pin' color='rgba(0, 11, 38, 0.72)' />
            Казань
          </li>
          {isAuthenticated ? (
            <>
              <li
                className='user-navbar__item'
                style={{
                  marginRight: '24px',
                  color: '#000000',
                  fontWeight: '600'
                }}
              >
                <img src={ecoDollar} alt='eco-dollar' />
                1000
              </li>
              <li className='user-navbar__item'>
                <img src={avatarIcon} alt='avatar' />
                <Link
                  to={`/profile/${userId}`}
                  className='user-navbar__link'
                  >
                  Алексей
                </Link>
              </li>
            </>
          ) : (
            <>
              <li className='user-navbar__item'>
                <Icon name='login' color='rgba(0, 11, 38, 0.72)' />
                <button
                  className='user-navbar__button'
                  onClick={() => setCurrentModal(<ModalSignIn />)}
                  >
                  Войти
                </button>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
});

export default Navbar;