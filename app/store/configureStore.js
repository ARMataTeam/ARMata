// @flow
if (process.env.NODE_ENV === 'production') {
  module.exports = require('./configureStore.prod'); // eslint-disable-line flowtype-errors/show-errors,global-require
} else {
  module.exports = require('./configureStore.dev'); // eslint-disable-line flowtype-errors/show-errors,global-require
}
