import React from 'react';
import { Route } from 'react-router';
import './App.css';

import HomePage from './pages/homepage/Homepage.Component';
import ShopPage from './pages/shop/shop.component';
import Header from './component/header/header.component';



function App() {
  return (
    <div >
        <Header />
        <switch>
          <Route exact path='/' component={HomePage} />
          <Route  path='/shop' component={ShopPage} />
        </switch>
    </div>
  );
}

export default App;
