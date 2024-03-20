// store.js
import { createStore } from 'redux';
import rootReducer from '../reducers/reducers'; // Import the combined root reducer

const store = createStore(rootReducer);

export default store;
