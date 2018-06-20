// Set up your root reducer here...
import { combineReducers } from 'redux';

import { booksReducer, bookReducer } from './bookReducers';
import cartReducer from './cartReducers';

export default combineReducers({
  books: booksReducer,
  book: bookReducer,
  items: cartReducer
});
