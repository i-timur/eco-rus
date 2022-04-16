import {FC} from 'react';
import {BottomSheet} from 'react-spring-bottom-sheet';

import MapCards from '../MapCards/MapCards';
import './MapCardsDropdown.scss';

interface Props {
  isOpened: boolean;
  onDismiss: () => void;
}

const MapCardsDropdown: FC<Props> = ({isOpened, onDismiss}) => {
  return (
    <BottomSheet
      className="map-cards-dropdown"
      open={isOpened}
      blocking={false}
      onDismiss={onDismiss}
      snapPoints={({maxHeight}) => [
        0,
        maxHeight * 0.4
      ]}
      defaultSnap={({snapPoints}) => Math.max(...snapPoints)}
    >
      <div className="map-dropdown__container">
        <MapCards />
      </div>
    </BottomSheet>
  );
};

export default MapCardsDropdown;
