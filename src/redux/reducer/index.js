import user from './user'
import book from './book'
const redux = require('redux');


const reducer = redux.combineReducers({
    user,
    book,
})

export default reducer;