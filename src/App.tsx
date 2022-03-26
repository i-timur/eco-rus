import React from 'react';
import {Routes, Route} from 'react-router-dom';

import './App.scss';
import Home from './pages/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Market from './pages/Market/Market';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/market' element={<Market />} />
      </Routes>
    </>
  );
};

export default App;