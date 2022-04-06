import {FC} from 'react';
import {Link} from 'react-router-dom';

import containers from '../../assets/images/map/containers-s.png';
import MapCard from '../MapCard/MapCard';

import './MapCards.scss';

const cards = [
  {
    address: 'ул.Кремлёвская, 88',
    text: 'Пластик, стекло, бумага, металл, старая одежда, батареи, аккумуляторыdsadsadsadsadas',
    img: containers
  },
  {
    address: 'ул.Кремлёвская, 88',
    text: 'Стекло, бумага, металл, старая одежда, батареи',
    img: containers
  },
  {
    address: 'ул.Кремлёвская, 88',
    text: 'Пластик, стекло, бумага, металл',
    img: containers
  },
  {
    address: 'ул.Кремлёвская, 88',
    text: 'Стекло, бумага, металл, старая одежда, батареи',
    img: containers
  },
  {
    address: 'ул.Кремлёвская, 88',
    text: 'Пластик, стекло, бумага, металл, старая одежда, батареи, аккумуляторыkkadskkadskdasl',
    img: containers
  },
  {
    address: 'ул.Кремлёвская, 88',
    text: 'Пластик, стекло, бумага, металл',
    img: containers
  },
  {
    address: 'ул.Кремлёвская, 88',
    text: 'Пластик, стекло, бумага, металл',
    img: containers
  },
];

const MapCards: FC = () => {
  return (
    <div className="map-cards">
      <div className="map-cards__container">
        {cards.map((c, idx) => (
          <Link to="/map/details/1" key={idx} className="map-cards__link">
            <MapCard
              address={c.address}
              text={c.text}
              image={c.img}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MapCards;
