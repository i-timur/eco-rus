import React from 'react';
import {Routes, Route} from 'react-router-dom';

import './App.scss';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </>
  );
};

export default App;