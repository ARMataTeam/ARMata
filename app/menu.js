// @flow
import { app, Menu, shell, BrowserWindow } from 'electron';

export default class MenuBuilder {
  mainWindow: BrowserWindow;

  constructor(mainWindow: BrowserWindow) {
    this.mainWindow = mainWindow;
  }

  buildMenu() {
    if (process.env.NODE_ENV === 'development' || process.env.DEBUG_PROD === 'true') {
      this.setupDevelopmentEnvironment();
    }

    let template;
    template = this.buildDefaultTemplate();

    const menu = Menu.buildFromTemplate(template);
    Menu.setApplicationMenu(menu);

    return menu;
  }

  setupDevelopmentEnvironment() {
    this.mainWindow.openDevTools();
    this.mainWindow.webContents.on('context-menu', (e, props) => {
      const { x, y } = props;

      Menu
        .buildFromTemplate([{
          label: 'Inspect element',
          click: () => {
            this.mainWindow.inspectElement(x, y);
          }
        }])
        .popup(this.mainWindow);
    });
  }

  buildDefaultTemplate() {
    const templateDefault = [{
      label: '&File',
      submenu: [{
        label: '&Open a template',
        accelerator: 'Ctrl+O'
      }, {
        label: '&Close',
        accelerator: 'Ctrl+W',
        click: () => {
          this.mainWindow.close();
        }
      }]
    }, {
      label: '&View',
      submenu: (process.env.NODE_ENV === 'development') ? [{
        label: '&Reload',
        accelerator: 'Ctrl+R',
        click: () => {
          this.mainWindow.webContents.reload();
        }
      }, {
        label: 'Toggle &Full Screen',
        accelerator: 'F11',
        click: () => {
          this.mainWindow.setFullScreen(!this.mainWindow.isFullScreen());
        }
      }, {
        label: 'Toggle &Developer Tools',
        accelerator: 'Alt+Ctrl+I',
        click: () => {
          this.mainWindow.toggleDevTools();
        }
      }] : [{
        label: 'Toggle &Full Screen',
        accelerator: 'F11',
        click: () => {
          this.mainWindow.setFullScreen(!this.mainWindow.isFullScreen());
        }
      }]
    }, {
      label: 'Help',
      submenu: [{
        label: 'Learn More',
        click() {
          shell.openExternal('https://github.com/ARMataTeam/ARMata');
        }
      }, {
        label: 'Documentation',
        click() {
          shell.openExternal('https://github.com/ARMataTeam/ARMata/wiki');
        }
      }, {
        label: 'Community Discussions',
        click() {
          shell.openExternal('https://gitter.im/ARMataTeam/Lobby?utm_source=share-link&utm_medium=link&utm_campaign=share-link');
        }
      }, {
        label: 'Search Issues',
        click() {
          shell.openExternal('https://github.com/ARMataTeam/ARMata/issues');
        }
      }]
    }];

    return templateDefault;
  }
}
