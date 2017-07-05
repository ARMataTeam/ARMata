import React from 'react';
import { ipcRenderer } from 'electron';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Root from './containers/Root';
var fs = require('fs');

import { configureStore, history } from './store/configureStore';
import './app.global.css';
import * as fileDialogActions from './actions/fileDialog';

const store = configureStore();

render(
  <AppContainer>
    <Root store={store} history={history} />
  </AppContainer>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept('./containers/Root', () => {
    const NextRoot = require('./containers/Root'); // eslint-disable-line global-require
    render(
      <AppContainer>
        <NextRoot store={store} history={history} />
      </AppContainer>,
      document.getElementById('root')
    );
  });
}

ipcRenderer.on('open-file', (event, filename) => {
  let selectedFilename = filename[0];
  fs.readFile(selectedFilename, 'utf-8', (err, data) => {
    if (err) {
      alert("An error ocurred reading the file :" + err.message);
      return;
    }
    
    store.dispatch(fileDialogActions.open(selectedFilename, data));
  });
});
