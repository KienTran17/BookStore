import React from 'react';
import { Route, IndexRoute } from 'react-router';

import HomePage from './components/common/HomePage';
import AboutPage from './components/common/AboutPage';
import BookPage from './components/book/BookPage';
import BookDetailsPage from './components/book/BookDetailsPage';
import CartPage from './components/cart/CartPage';
import App from './components/App';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="/about" component={AboutPage} />
    <Route path="/books" component={BookPage} />
    <Route path="/books/:id" component={BookDetailsPage} />
    <Route path="/cart" component={CartPage} />
  </Route>
);
