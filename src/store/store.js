import {createStore,combineReducers} from 'redux';
import friendsReducer from './reducers/friendReducer'

let store = createStore(combineReducers({friendsReducer}));
export default store;





