import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import MealDetailComponent from '../containers/MealDetails';

const RouteSwitch = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route exact path="/meals/:id" element={<MealDetailComponent />} />
    </Routes>
  </BrowserRouter>
);

export default RouteSwitch;
