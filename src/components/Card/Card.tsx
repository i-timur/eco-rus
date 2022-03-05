import React from 'react';
import {Link} from 'react-router-dom';

import './Card.scss';

interface Props {
  title: string;
  subtitle: string;
  to: string;
  image: string;
}

const Card: React.FC<Props> = ({title, subtitle, to, image}) => {
  return (
    <div className='card'>
      <div className='card__content'>
        <h1 className='card__title'>{title}</h1>
        <h2 className='card__subtitle'>{subtitle}</h2>
        <Link to={to} className='card__button'></Link>
      </div>
      <div className='card__image'>
        <img src={image} alt='card' />
      </div>
    </div>
  );
};

export default Card;