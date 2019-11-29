import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import AppContainers from "./containers/App";
import './style/main.scss';

ReactDOM.render(
  <Provider store={store}>
    <AppContainers />
  </Provider>,
  document.getElementById('root'),
);
