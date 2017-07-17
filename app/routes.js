/* eslint flowtype-errors/show-errors: 0 */
import React from 'react';
import { Switch, Route } from 'react-router';
import App from './containers/App';
import HomePage from './containers/HomePage';
import JsonPreview from './containers/JsonPreview';

export default () => (
  <App>
    <Switch>

      <Route path="/JsonPreview" component={JsonPreview} />
      <Route path="/Structure" component={HomePage} />
    </Switch>
  </App>
);
