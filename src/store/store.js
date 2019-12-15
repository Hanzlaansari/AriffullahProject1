import {createStore,combineReducers} from 'redux';
import friendsReducer from './reducers/friendReducer';
import audioReducer from './reducers/audioReducer'
import aboutInfo from './reducers/about';
import videoReducer from './reducers/videoReducer'
let store = createStore(combineReducers({aboutInfo,friendsReducer,audioReducer,videoReducer}));
export default store;





