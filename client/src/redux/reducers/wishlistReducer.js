// wishlistReducer.js
import { combineReducers } from 'redux';

const wishlistItemsReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_WISHLIST_ITEM':
      return [...state, action.payload];
    default:
      return state;
  }
};

const wishlistTitleReducer = (state = '', action) => {
  switch (action.type) {
    case 'SET_WISHLIST_TITLE':
      return action.payload;
    default:
      return state;
  }
};

const wishlistReducer = combineReducers({
  wishlistItems: wishlistItemsReducer,
  wishlistTitle: wishlistTitleReducer,
});

export default wishlistReducer;
