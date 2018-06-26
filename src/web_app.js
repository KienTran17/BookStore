import React, { Component } from 'react';
import ReactDOM from 'react-dom'; // thay cho require
import { Provider } from 'react-redux';
import createStore from './redux/store';
import App from './app';

const store = createStore(window.__INITIAL_STATE__)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')// eslint-disable-line
);