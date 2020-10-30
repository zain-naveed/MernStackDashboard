import {createStore,combineReducers,applyMiddleware} from 'redux';
import userReducer from './reducer/userReducer';
const thunkMiddleware = require('redux-thunk').default


const Mainreducer = combineReducers({
    User:userReducer,
});




const store = createStore(Mainreducer,applyMiddleware(thunkMiddleware));
export default store;