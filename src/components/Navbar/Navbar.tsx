import React from 'react';

import logo from '../../assets/icons/logo.svg';
import ecoDollar from  '../../assets/icons/eco-dollar.svg';
import avatarIcon from '../../assets/icons/profile-image.svg';
import {Link, NavLink} from 'react-router-dom';
import Icon from '../UI/Icon/Icon';
import {useStore} from '../../index';
import {observer} from 'mobx-react-lite';
import ModalSignIn from '../Modals/ModalSignIn/ModalSignIn';
import './Navbar.scss';

const activeClassName = 'navigation__link navigation__link_active';
const notActiveClassName = 'navigation__link';

const Navbar: React.FC = observer(() => {
  const {modalStore: {setCurrentModal}, authorizationStore: {isAuthenticated}, userStore} = useStore();

  const userId = userStore.getUser() ? userStore.getUser()?.getId() : undefined;
  const userName = userStore.getUser() ? userStore.getUser()?.getUserName() : 'Loading...';
  const getUserBalance = () => {
    if (userStore.getState() === 'done') {
      if (userStore.getUser()?.getRole() === 'USER') {
        const balance = userStore.getUser()?.getBalance();
        if (balance) {
          return balance;
        } else {
          return 0;
        }
      } else {
        return 0;
      }
    }
  };

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
            <button className='user-navbar__button'>
              <Icon name='pin' color='rgba(0, 11, 38, 0.72)' />
              Казань
            </button>
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
                <Link
                  to={`/profile/${userId}`}
                  className='user-navbar__link'
                >
                  <img src={ecoDollar} alt='eco-dollar' />
                  {getUserBalance()}
                </Link>
              </li>
              <li className='user-navbar__item'>
                <Link
                  to={`/profile/${userId}`}
                  className='user-navbar__link'
                  >
                  <img src={avatarIcon} alt='avatar' />
                  {userName}
                </Link>
              </li>
            </>
          ) : (
            <>
              <li className='user-navbar__item'>
                <button
                  className='user-navbar__button'
                  onClick={() => setCurrentModal(<ModalSignIn />)}
                  >
                  <Icon name='login' color='rgba(0, 11, 38, 0.72)' />
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
