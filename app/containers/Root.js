// @flow
import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import Routes from '../routes'; // eslint-disable-line flowtype-errors/show-errors

type RootType = {
  store: {},
  history: {}
};

export default function Root({ store, history }: RootType) {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Routes />
      </ConnectedRouter>
    </Provider>
  );
}
