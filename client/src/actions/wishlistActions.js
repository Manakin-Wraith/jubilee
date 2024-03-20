// wishlistActions.js
export const addWishlistItem = (item) => ({
    type: 'ADD_WISHLIST_ITEM',
    payload: item,
  });
  
  export const setWishlistTitle = (title) => ({
    type: 'SET_WISHLIST_TITLE',
    payload: title,
  });
  