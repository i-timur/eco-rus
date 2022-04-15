import React, {FC, useEffect, useState} from 'react';
import {useStore} from '../../../index';
import Icon from '../../UI/Icon/Icon';
import {Link} from 'react-router-dom';
import Avatar from '../../../assets/images/navbar/profile-image-m.svg';
import EcoDollar from '../../../assets/icons/eco-dollar.svg';
import Modal from '../Modal/Modal';
import './ModalSidebar.scss';

const ModalSidebar: FC = () => {
  const {modalStore: {clearCurrentModal}, authorizationStore: {isAuthenticated}, userStore: {getUser}} = useStore();

  const user = getUser();

  const userId = user?.getId();
  const userName = user?.getUserName();
  const balance = user?.getBalance();

  const [sidebarClassNames, setSidebarClassNames] = useState(['side-menu-navbar']);

  let closeTimer: NodeJS.Timeout | null = null;
  const handleClose = () => {
    setSidebarClassNames(['side-menu-navbar']);
    closeTimer = setTimeout(() => {
      clearCurrentModal()
    }, 300)
  };

  useEffect(() => {
    const openTimer = setTimeout(
      () => setSidebarClassNames(['side-menu-navbar', 'side-menu-navbar_opened']),
      0);

    return () => {
      clearTimeout(openTimer);
      clearTimeout(closeTimer!);
    };
  }, []);

  return (
    <Modal>
      <div className={sidebarClassNames.join(' ')}>
        <div className="side-menu-navbar__container">
          <div className="side-menu-navbar__upper">
            <div
              className="side-menu-navbar__close"
              onClick={handleClose}
            >
              <Icon
                name="close"
                color="rgba(0, 11, 38, 0.72)"
                size={32}
              />
            </div>
            <div
              className={isAuthenticated ? 'side-menu-navbar__user-info user-info-navbar' : 'side-menu-navbar__user-info user-info-navbar hide'}>
              <div className="user-info-navbar__avatar">
                <Link
                  to={`/profile/${userId}`}
                  onClick={handleClose}
                >
                  <img src={Avatar} alt="avatar"/>
                </Link>
              </div>
              <div className="user-info-navbar__text">
                <Link
                  to={`/profile/${userId}`}
                  className="user-info-navbar__name"
                  onClick={handleClose}
                >{userName}</Link>
                <div className="user-info-navbar__balance">
                  <img src={EcoDollar} alt="dollar"/>
                  <span className="user-info-navbar__balance-amount">
                    {balance}
                  </span>
                </div>
              </div>
            </div>
            <nav className="side-menu-navbar__navigation navigation-side-menu-navbar">
              <ul className="navigation-side-menu-navbar__list">
                <li className="navigation-side-menu-navbar__item">
                  <Link
                    to="/"
                    className="navigation-side-menu-navbar__link"
                    onClick={handleClose}
                  >Главная</Link>
                </li>
                <li className="navigation-side-menu-navbar__item">
                  <Link
                    to="/map"
                    className="navigation-side-menu-navbar__link"
                    onClick={handleClose}
                  >Пункты сбора</Link>
                </li>
                <li className="navigation-side-menu-navbar__item">
                  <Link
                    to="/market"
                    className="navigation-side-menu-navbar__link"
                    onClick={handleClose}
                  >ЭкоМаркет</Link>
                </li>
                <li className="navigation-side-menu-navbar__item">
                  <Link
                    to="/about"
                    className="navigation-side-menu-navbar__link"
                    onClick={handleClose}
                  >О сервисе</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="side-menu-navbar__bottom">
            <button className="side-menu-navbar__city" type="button">
              <Icon
                name="pin"
                color="rgba(0, 11, 38, 0.72)"
              />
              Казань
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ModalSidebar;
