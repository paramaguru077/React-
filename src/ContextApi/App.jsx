import React, { useState } from 'react';
import Header from './Header';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Cart from './Cart';

const App = () => {

  return (
    <>
      <Header />
      <div className="App">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
