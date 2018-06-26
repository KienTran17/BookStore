import { Enum } from './enum';
const initState = {
    username: '',
    password: '',
};

const user = (state ={}, action) => {
    switch (action.type) {
        case Enum.USER_UPDATE_STATE:
        return {...state, ...action} ;
        default:
        return state;
    }
};

export default user;
