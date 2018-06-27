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
    let {
        book: {
            cart = []
        }
    } = getState();
    dispatch(start());
    const index = cart.findIndex(o => o.id === oneBook.id);
    oneBook.quantity = 1;
    if (index >= 0) {
        cart[index].quantity = cart[index].quantity + 1;
    } else {
        cart = [...cart, oneBook ];
    }
    dispatch({ type: Enum.BOOK_UPDATE_STATE, data: { cart } })
    dispatch(end());
}