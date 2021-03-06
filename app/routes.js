// @flow
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import TasksPage from './containers/TasksPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={TasksPage} />
  </Route>
);
