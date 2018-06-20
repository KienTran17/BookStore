
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';

import routes from './routes';
// import '../bower_components/bootstrap/dist/css/bootstrap.min.css';
import configureStore from './store/configureStore';
import * as bookActions from './actions/bookActions';

const store = configureStore();
store.dispatch(bookActions.fetchBooks());
store.dispatch(bookActions.fetchCart());

render(
  <Provider store={store}>
    <Router routes={routes} history={browserHistory} />
  </Provider>,
  document.getElementById('app')
);
