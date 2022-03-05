import React from 'react';

import './Footer.scss';
import Icon from '../Icon/Icon';

const Footer: React.FC = () => {
  return (
    <div className='footer'>
      <div className='footer__container container'>
        <ul className='footer__contacts'>
          <li className='footer__contact'>
            <Icon name='mail' color='rgba(0, 11, 38, 0.32)' />
            <a href='mailto:info@ecorus.ru' className='footer__link'>info@ecorus.ru</a>
          </li>
          <li className='footer__contact'>
            <Icon name='phone' color='rgba(0, 11, 38, 0.32)' />
            <a href='tel:+78008808888' className='footer__link'>+7 (800) 880-88-88</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;