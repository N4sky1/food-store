import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk'

import reducer from './reducers';

/*const logMiddleware = ({ getState }) => (next) => (action) => {
    console.log(action.type, getState())
    return next(action)
}

const strinfMiddleware = () => (next) => (action) => {
    if (typeof action === 'string') {
        return next({
            type: action
        })
    }
    return next(action)
}
*/

const store = createStore(reducer, applyMiddleware (
    thunkMiddleware
));


export default store;
