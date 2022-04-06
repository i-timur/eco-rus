import React from 'react';
import {Routes, Route} from 'react-router-dom';

import './App.scss';
import Home from './pages/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Market from './pages/Market/Market';
import Map from './pages/Map/Map';
import MapCardDetails from './components/MapCardDetails/MapCardDetails';
import MapCards from './components/MapCards/MapCards';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/market' element={<Market />} />
        <Route path='/map/*' element={<Map />}>
          <Route path='' element={<MapCards />} />
          <Route path='details/:id' element={<MapCardDetails />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
