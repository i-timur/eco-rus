import React from 'react';

import './Footer.scss';
import mailIcon from '../../assets/icons/mail.svg';
import phoneIcon from '../../assets/icons/phone.svg';

const Footer: React.FC = () => {
  return (
    <div className='footer'>
      <div className='footer__container container'>
        <ul className='footer__contacts'>
          <li className='footer__contact'>
            <img src={mailIcon} alt='mail' />
            <a href='mailto:info@ecorus.ru' className='footer__link'>info@ecorus.ru</a>
          </li>
          <li className='footer__contact'>
            <img src={phoneIcon} alt='phone' />
            <a href='tel:+78008808888' className='footer__link'>+7 (800) 880-88-88</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;