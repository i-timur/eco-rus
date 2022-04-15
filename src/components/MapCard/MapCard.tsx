import {FC} from 'react';

import './MapCard.scss';

export interface IMapCard {
  address: string;
  text: string;
  image: string;
}

const MapCard: FC<IMapCard> = ({address,text, image}) => {
  return (
    <div className="map-card">
      <div className="map-card__container">
        <div className="map-card__image">
          <img src={image} alt="containers" />
        </div>
        <div className="map-card__content">
          <p className="map-card__address">{address}</p>
          <p className="map-card__text">{text.length > 50 ? text.slice(0, 49) + '...' : text}</p>
        </div>
      </div>
    </div>
  );
};

export default MapCard;
