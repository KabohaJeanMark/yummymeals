import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import RouteSwitch from './components/Routes';
import store from './reducers';

ReactDOM.render(
  <Provider store={store}>
    <RouteSwitch />
  </Provider>,
  document.getElementById('root'),
);
