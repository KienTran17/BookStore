import user from './user'
import book from './book'
import asyncRequest from './asyncRequest'

const redux = require('redux');


const reducer = redux.combineReducers({
    user,
    book,
    asyncRequest
})

export default reducer;