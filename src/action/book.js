import { get } from './api';
import { start, end } from './asyncRequest';
import { Enum } from '../redux/reducer/enum';

export const getAllBook = () => async (dispatch) => {
    dispatch(start());
    const { code, message} = await get('/api/book');
    dispatch({ type: Enum.BOOK_UPDATE_STATE, data: { list: message } })
    dispatch(end());
}

export const addToCart = (oneBook) => async (dispatch, getState) => {
    const {
        book: {
            cart = []
        }
    } = getState();
    dispatch(start());
    dispatch({ type: Enum.BOOK_UPDATE_STATE, data: { cart: [...cart, oneBook] } })
    dispatch(end());
}