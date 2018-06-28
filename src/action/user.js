import { post } from './api';
import { Enum } from '../redux/reducer/enum';
import { start, end } from './asyncRequest';
import { toast } from 'react-toastify';

export const addToCart = (oneBook) => async (dispatch, getState) => {
    let {
        user: {
            cart = []
        }
    } = getState();
    dispatch(start());
    const index = cart.findIndex(o => o.id === oneBook.id);
    if (index >= 0) {
        cart[index].quantity = cart[index].quantity + 1;
    } else {
        cart = [...cart, { ...oneBook, quantity: 1 } ];
    }
    dispatch({ type: Enum.USER_UPDATE_CART, data: { cart } })
    dispatch(end());
}

export const getAllBook = () => async (dispatch) => {
    dispatch(start());
    const { code, message} = await get('/api/book');
    dispatch({ type: Enum.BOOK_UPDATE_STATE, data: { list: message } })
    dispatch(end());
}

export const login = ({ email, password }) => async (dispatch) => {
    dispatch(start());
    const {code, message}  = await post('/api/user/login', { email, password });
    if (code !== 0) {
        toast.error(message, {
            position: toast.POSITION.TOP_RIGHT,
        });
    }
    dispatch(end());
}

export const register = ({ name, email, password }) => async (dispatch) => {
    dispatch(start());
    const {code, message} = await post('/api/user/register', { name, email, password })
    if (code !== 0) {
        toast.error(message, {
            position: toast.POSITION.TOP_CENTER
        });
    }
    dispatch(end());
}