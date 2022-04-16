import {FC} from 'react';
import {Link} from 'react-router-dom';

import MapCard from '../MapCard/MapCard';
import {cards} from '../../utils/data';
import './MapCards.scss';
import {useStore} from '../../index';
import ModalMapCardDetails from '../Modals/ModalMapCardDetails/ModalMapCardDetails';

const MapCards: FC = () => {
  const {modalStore: {setCurrentModal}} = useStore();
  return (
    <div className="map-cards">
      <div className="map-cards__container">
        {cards.map((c, idx) => (
          <Link
            to="/map/details/1"
            key={idx} className="map-cards__link"
            onClick={() => setCurrentModal(<ModalMapCardDetails />)}
          >
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
