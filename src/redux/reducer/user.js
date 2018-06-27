import { Enum } from './enum';
const initState = {
    username: '',
    password: '',
    cart: [],
};

const user = (state = initState, action) => {
    switch (action.type) {
        case Enum.USER_UPDATE_STATE:
        return {...state, ...action} ;
        case Enum.USER_UPDATE_CART:
            return {...state, ...action.data } ;
        default:
        return state;
    }
};

export default user;
