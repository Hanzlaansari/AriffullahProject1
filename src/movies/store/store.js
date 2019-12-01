import {createStore} from 'redux';
import movieReducer from '../reducers/moviesReducers'
let store = createStore(movieReducer);
store.subscribe(()=>{
    console.log("store is updated",store.getState());
})
export default store;