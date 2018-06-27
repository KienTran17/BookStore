import { CFG } from '../../config';
import api from './api';
import { Enum } from '../redux/reducer/enum';
import { start, end } from './asyncRequest';

export const register = async ({ username, password }) => {
    await api.post('/api/register', { username, password })
};

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