import Axios from 'axios';
import * as actionTypes from './actionTypes';

const booksApiURL = 'http://581b68436acad011002819e3.mockapi.io/api/v1/books';
const cartsApiURL = 'http://581b68436acad011002819e3.mockapi.io/api/v1/carts';

const fetchBooksSuccess = (books) => {
  return {
    type: actionTypes.FETCH_BOOKS_SUCCESS,
    books: books
  };
};

export const fetchBooks = () => {
  return (dispatch) => {
    return Axios.get(booksApiURL)
      .then(response => {
        dispatch(fetchBooksSuccess(response.data));
      })
      .catch(error => {
        throw(error);
      });
  };
};

const createBookSuccess = (book) => {
  return {
    type: actionTypes.CREATE_BOOK_SUCCESS,
    book: book
  };
};

export const createBook = (book) => {
  return (dispatch) => {
    return Axios.post(booksApiURL, book)
      .then(response => {
        dispatch(createBookSuccess(response.data));
      })
      .catch(error => {
        throw(error);
      });
  };
};

const fetchBookByIdSuccess = (book) => {
  return {
    type: actionTypes.FETCH_BOOK_BY_ID_SUCCESS,
    book: book
  };
};

export const fetchBookById = (id) => {
  return (dispatch) => {
    return Axios.get(`${booksApiURL}/${id}`)
      .then(response => {
        dispatch(fetchBookByIdSuccess(response.data));
      })
      .catch(error => {
        throw(error);
      });
  };
};

const deleteBookSuccess = (book) => {
  return {
    type: actionTypes.DELETE_BOOK_SUCCESS,
    book: book
  };
};

export const deleteBook = (id) => {
  return (dispatch) => {
    return Axios.delete(`${booksApiURL}/${id}`)
      .then(response => {
        dispatch(deleteBookSuccess(response.data));
      })
      .catch(error => {
        throw(error);
      });
  };
};

const addToCartSuccess = (item) => {
  return {
    type: actionTypes.ADD_TO_CART_SUCCESS,
    item
  };
};

export const addToCart = (item) => {
  return (dispatch) => {
    return Axios.post(cartsApiURL, item)
      .then(response => {
        dispatch(addToCartSuccess(response.data));
      })
      .catch(error => {
        throw(error);
      });
  };
};

const fetchCartSuccess = (items) => {
  return {
    type: 'FETCH_CART_SUCCESS',
    items
  };
};

export const fetchCart = () => {
  return (dispatch) => {
    return Axios.get(cartsApiURL)
      .then(response => {
        dispatch(fetchCartSuccess(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};

const removeItemSuccess = (item) => {
  return {
    type: actionTypes.REMOVE_ITEM_SUCCESS,
    item
  };
};

export const removeItem = (id) => {
  return (dispatch) => {
    return Axios.delete(`${cartsApiURL}/${id}`)
      .then(response => {
        dispatch(removeItemSuccess(response.data));
      })
      .catch(error => {
        throw(error);
      });
  };
};
