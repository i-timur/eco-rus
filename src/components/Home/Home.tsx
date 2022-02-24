import React from 'react';
import SwiperCore, { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/scss';
import 'swiper/scss/navigation';

import './Home.scss';
import Navbar from '../Navbar/Navbar';
import PrimaryButton from '../PrimaryButton/PrimaryButton';

const Home: React.FC = () => {
  return (
    <div className='home'>
      <div className='home__container container'>
        <Navbar />
        <div className='home__slider'>
          <Swiper
            modules={[Navigation]}
            navigation
          >
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
          </Swiper>
          <PrimaryButton width={179} height={48} to='/'>Условия сервиса</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default Home;