import user from './reducer/user'
const redux = require('redux');


const reducer = redux.combineReducers({
    user
})

const store = redux.createStore(reducer);

export default store;