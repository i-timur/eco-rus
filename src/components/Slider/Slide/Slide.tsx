import React from 'react';

import './Slide.scss';
import SliderButton from '../SliderButton/SliderButton';
import {getSlideBackgroundColor} from '../../../utils/utils';


interface Props {
  index: number;
  title: string;
  subtitle: string;
  buttonValue: string;
  buttonTo: string;
  image: string;
}

const Slide: React.FC<Props> = ({index, title, subtitle, buttonValue, buttonTo, image}) => {
  return (
    <div className={`slide ${getSlideBackgroundColor(index)}`}>
      <div className='slide__content'>
        <h1 className='slide__title'>{title}</h1>
        <h3 className='slide__subtitle'>{subtitle}</h3>
        <div className='slide__button'>
          <SliderButton to={buttonTo}>{buttonValue}</SliderButton>
        </div>
      </div>
      <div className='slide__image'>
        <img src={image} alt='slide' />
      </div>
    </div>
  );
};

export default Slide;