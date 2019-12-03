import {createStore,combineReducers} from 'redux';
import friendsReducer from './reducers/friendReducer';
import aboutInfo from './reducers/about';
let store = createStore(combineReducers({aboutInfo,friendsReducer}));
export default store;





