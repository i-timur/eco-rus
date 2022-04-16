import {FC} from 'react';
import {MapContainer, Marker, Popup, TileLayer} from 'react-leaflet';

import {startPosition} from '../../utils/data';


const MapComponent: FC = () => {
  return (
    <MapContainer center={startPosition} zoom={13} zoomControl={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={startPosition}>
        <Popup>
          Eco rus.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;
