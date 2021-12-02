import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Navbar from './Navbar';
import MealDetailComponent from '../containers/MealDetails';

const RouteSwitch = () => (
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<App />} />
      <Route exact path="/meals/:id" element={<MealDetailComponent />} />
    </Routes>
  </BrowserRouter>
);

export default RouteSwitch;
