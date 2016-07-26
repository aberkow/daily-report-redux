//does import redux from 'redux' work here?

var redux = require('redux');
var createStore = redux.createStore;
var applyMiddleware = redux.applyMiddleware;

var reducers = require('./reducers');

var store = createStore(reducers.reportReducer, window.devToolsExtension ? window.devToolsExtension() : undefined);

module.exports = store;
