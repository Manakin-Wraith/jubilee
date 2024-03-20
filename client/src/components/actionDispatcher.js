// WishlistActionButton.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { addWishlistItem } from '../actions/wishlistActions'; // Import the action creator

const WishlistActionButton = () => {
  const dispatch = useDispatch(); // Initialize useDispatch hook

  const handleClick = () => {
    // Dispatch the addWishlistItem action with the payload
    dispatch(addWishlistItem({ itemName: 'Example Item', itemDescription: 'Example Description' }));
  };

  return (
    <div>
      <button onClick={handleClick}>Add to Wishlist</button>
    </div>
  );
};

export default WishlistActionButton;
