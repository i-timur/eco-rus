import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation} from 'swiper';
import 'swiper/scss';
import 'swiper/scss/navigation';

import './Home.scss';
import recycle from '../../assets/images/home/recycle.png';
import plastic from '../../assets/images/home/plastic.png';
import mask from '../../assets/images/home/masks.png';
import map from '../../assets/images/home/map.png';
import market from '../../assets/images/home/market.png';
import Footer from '../../components/Footer/Footer';
import Slide from '../../components/Slider/Slide/Slide';
import HomeCard from '../../components/HomeCard/HomeCard';

const slides = [
  {
    title: 'Сделаем мир чище',
    subtitle: 'Сдай макулатуру или старую одежду и получи скидку на покупку товаров из переработанных материалов',
    buttonValue: 'Условия сервиса',
    buttonTo: '/',
    image: recycle,
  },
  {
    title: 'А вы знали...',
    subtitle: 'что среднее время разложения пластмассовых изделий колеблется от 400 до 700 лет, а полиэтиленовых пакетов — от 100 до 200 лет?',
    buttonValue: 'Условия сервиса',
    buttonTo: '/',
    image: plastic,
  },
  {
    title: 'Что с масками?',
    subtitle: 'Медицинские маски не обязательно должны становиться отходами. Их тоже можно сдать на переработку.',
    buttonValue: 'Условия сервиса',
    buttonTo: '/',
    image: mask,
  },
];

const cards = [
  {
    title: 'Пункты сбора',
    subtitle: 'Посмотри, где в твоем городе можно сдать вторсырье на переработку',
    link: 'map',
    image: map
  },
  {
    title: 'ЭкоМаркет',
    subtitle: 'Используй заработанные экокоины для покупки товаров из переработанных материалов',
    link: 'market',
    image: market
  }
];

const Home: React.FC = () => {
  return (
    <div className='home'>
      <div className='home__container'>

        <div className='home__slider slider'>
          <div className='slider__container'>
            <Swiper
              modules={[Navigation]}
              navigation
            >
              {slides.map((slide, i) => (
                <SwiperSlide key={i}>
                  <Slide
                    index={i}
                    title={slide.title}
                    subtitle={slide.subtitle}
                    buttonValue={slide.buttonValue}
                    buttonTo={slide.buttonTo}
                    image={slide.image}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        <div className='home__cards cards-home'>
          <div className='cards-home__container container'>

            {cards.map((card, i) => (
              <div className='cards-home__item' key={i}>
                <HomeCard
                  title={card.title}
                  subtitle={card.subtitle}
                  to={card.link}
                  image={card.image}
                />
              </div>
            ))}

          </div>
        </div>

        <div className='home__footer'>
          <Footer />
        </div>

      </div>
    </div>
  );
};

export default Home;