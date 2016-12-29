import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import HomePage from './components/HomePage';
import PlayPage from './containers/play.js';
import StatsPage from './containers/StatsPage.js';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
    <Route path="play" component={PlayPage}/>
    <Route path="stats" component={StatsPage}/>
    <Route path="*" component={HomePage}/>
  </Route>
);
