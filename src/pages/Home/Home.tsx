import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation} from 'swiper';
import 'swiper/scss';
import 'swiper/scss/navigation';

import './Home.scss';
import Footer from '../../components/Footer/Footer';
import Slide from '../../components/Slider/Slide/Slide';
import HomeCard from '../../components/HomeCard/HomeCard';
import {homeCards, slides} from '../../utils/data';

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

            {homeCards.map((card, i) => (
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
