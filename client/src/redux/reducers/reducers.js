// reducers.js
import { combineReducers } from 'redux';
import { LOGIN_SUCCESS, LOGIN_FAILURE } from '../../actions/actions';
import wishlistReducer from './wishlistReducer'; // Import wishlist reducer

const initialState = {
  token: null,
  error: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        token: action.payload,
        error: null,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        token: null,
        error: action.payload,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  auth: authReducer,
  wishlist: wishlistReducer, // Add wishlist reducer here
  // Add more reducers as needed
});

export default rootReducer;
