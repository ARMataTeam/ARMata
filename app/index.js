// @flow
import React from 'react';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { ipcRenderer } from 'electron';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Root from './containers/Root';
import { configureStore, history } from './store/configureStore';
import './app.global.css';
import * as fileDialogActions from './actions/fileDialog';
import * as layoutActions from './actions/layout';

const fs = require('fs');

const store = configureStore();

injectTapEventPlugin();

render(
  <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
    <AppContainer>
      <Root store={store} history={history} />
    </AppContainer>
  </MuiThemeProvider>,
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
  if (!filename) return;

  const selectedFilename = filename[0];
  fs.readFile(selectedFilename, 'utf-8', (err, data) => {
    if (err) {
      store.dispatch(layoutActions.error(err));
      return;
    }

    store.dispatch(fileDialogActions.open(selectedFilename, data));
  });
});

ipcRenderer.on('update-error', (event, err) => {
  store.dispatch(layoutActions.error(err));
});

ipcRenderer.on('checking-for-update', () => {
  store.dispatch(layoutActions.alert('Checking for update...'));
});

ipcRenderer.on('update-available', () => {
  store.dispatch(layoutActions.alert('Update available!'));
});

ipcRenderer.on('update-not-available', () => {
  store.dispatch(layoutActions.alert('Update not available!'));
});
