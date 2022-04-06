import {FC} from 'react';
import {Link} from 'react-router-dom';

import containers from '../../assets/images/map/containers-m.png';
import Icon from '../UI/Icon/Icon';
import './MapCardDetails.scss';

const MapCardDetails: FC = () => {
  return (
    <div className="map-card-details">
      <div className="map-card-details__container">
        <Link
          to="/map"
          className="map-card-details__link"
        >
          <Icon
            name="arrow-left"
            size={24}
            color="#5780EA"
          />
          Вернуться назад
        </Link>
        <div className="map-card-details__content">
          <div className="map-card-details__image">
            <img src={containers} alt="containers" />

          </div>

          <div className="map-card-details__text">
            <p className="map-card-details__address">
              Казань, Кремлёвская, 88
            </p>
            <p className="map-card-details__phone-number">
              +7 (917) 888 88 88
            </p>
            <div className="map-card-details__schedule schedule">
              <div className="schedule__item">
                <p className="schedule__weekday">Пн - Пт</p>
                <p className="schedule__time">08:00 - 20:00</p>
              </div>
              <div className="schedule__item">
                <p className="schedule__weekday">Сб - Вс</p>
                <p className="schedule__time">10:00 - 18:00</p>
              </div>
            </div>
            <div className="map-card-details__requirements">
              <div className="map-card-details__requirement requirement">
                <h6 className="requirement__title">H&M</h6>
                <div className="requirement__badges">
                  <div className="requirement__badge">
                    Пластик: от 5 кг
                  </div>
                  <div className="requirement__badge">
                    Стекло: от 2 кг
                  </div>
                  <div className="requirement__badge">
                    Бумага: от 10 кг
                  </div>
                  <div className="requirement__badge">
                    Батареи: от 2 кг
                  </div>
                </div>
              </div>
              <div className="map-card-details__requirement requirement">
                <h6 className="requirement__title">Adidas</h6>
                <div className="requirement__badges">
                  <div className="requirement__badge">
                    Пластик: от 5 кг
                  </div>
                  <div className="requirement__badge">
                    Стекло: от 2 кг
                  </div>
                  <div className="requirement__badge">
                    Бумага: от 10 кг
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapCardDetails;
