import { Enum } from './enum';
const initState = {
    sending: '',
    success: '',
    error: '',
};

const user = (state ={}, action) => {
    switch (action.type) {
        case Enum.ASYNC_REQUEST_UPDATE:
        return {...state, ...action.data} ;
        default:
        return state;
    }
};

export default user;
