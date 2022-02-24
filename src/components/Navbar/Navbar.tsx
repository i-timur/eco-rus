import React from 'react';

import './Navbar.scss';
import logo from '../../assets/icons/logo.svg';
import pin from '../../assets/icons/pin.svg';
import ecoDollar from  '../../assets/icons/eco-dollar.svg';
import avatarIcon from '../../assets/icons/profile-image.svg';
import {NavLink} from 'react-router-dom';

const activeClassName = 'navigation__link navigation__link_active';
const notActiveClassName = 'navigation__link';

const Navbar: React.FC = () => {
  return (
    <div className='navbar'>
      <div className='navbar__container container'>
        <div className='navbar__logo'>
          <img src={logo} alt='logo' />
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
          <li className='user-navbar__item'>
            <img src={pin} alt='pin' />
            Казань
          </li>
          <li className='user-navbar__item'>
            <img src={ecoDollar} alt='eco dollar' />
            1000
          </li>
          <li className='user-navbar__item'>
            <img src={avatarIcon} alt='avatar' />
            Алексей
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;