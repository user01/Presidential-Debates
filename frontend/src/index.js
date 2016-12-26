/* eslint-disable import/default */

import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import configureStore from './store/configureStore';
require('./favicon.ico'); // Tell webpack to load favicon.ico
import './styles/pure-min.css';
import './styles/grids-responsive-min.css';
import './styles/styles.scss';
import { syncHistoryWithStore } from 'react-router-redux';
// import * as dataResults from '../../generated/model.results.json';

// console.log(dataResults);
const store = configureStore();

// console.log('hello');

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store);

render(
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>, document.getElementById('app')
);
