import { Enum } from './enum';
const initState = {
    list: [],
};

const user = (state = initState, action) => {
    switch (action.type) {
        case Enum.BOOK_UPDATE_STATE:
            return {...state, ...action.data} ;
        default:
        return state;
    }
};

export default user;
