import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {Navigation} from 'swiper';
import 'swiper/scss';
import 'swiper/scss/navigation';

import './Home.scss';
import Navbar from '../Navbar/Navbar';
import PrimaryButton from '../PrimaryButton/PrimaryButton';
import recycle from '../../assets/images/recycle.png';
import plastic from '../../assets/images/plastic.png';
import mask from '../../assets/images/masks.png';

const slides = [
  {
    title: 'Сделаем мир чище',
    subtitle: 'Сдай макулатуру или старую одежду и получи скидку на покупку товаров из переработанных материалов',
    buttonValue: 'Условия сервиса',
    image: recycle
  },
  {
    title: 'А вы знали...',
    subtitle: 'что среднее время разложения пластмассовых изделий колеблется от 400 до 700 лет, а полиэтиленовых пакетов — от 100 до 200 лет?',
    buttonValue: 'Условия сервиса',
    image: plastic
  },
  {
    title: 'Что с масками?',
    subtitle: 'Медицинские маски не обязательно должны становиться отходами. Их тоже можно сдать на переработку.',
    buttonValue: 'Условия сервиса',
    image: mask
  },
];

const slideBackgroundColor = (index: number) => {
  switch (index) {
    case 0:
      return 'slide-home__green';
    case 1:
      return 'slide-home__orange';
    case 2:
      return 'slide-home__light-green';
    default:
      return '';
  }
}

const Home: React.FC = () => {
  return (
    <div className='home'>
      <div className='home__container container'>
        <Navbar />
        <div className='home__slider slider-home'>
          <Swiper
            modules={[Navigation]}
            navigation
          >
            {slides.map((slide, i) => (
              <SwiperSlide key={i}>
                <div className={`slide-home ${slideBackgroundColor(i)}`}>
                  <div className='slide-home__content'>
                    <h1 className='slide-home__title'>{slide.title}</h1>
                    <h3 className='slide-home__subtitle'>{slide.subtitle}</h3>
                    <div className='slide-home__button'>
                      <PrimaryButton to='/'>{slide.buttonValue}</PrimaryButton>
                    </div>
                  </div>
                  <div className='slide-home__image'>
                    <img src={slide.image} alt='slide' />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Home;