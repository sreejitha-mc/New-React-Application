import React from 'react';
import '../pages/Cart/Cart.css'

const CartItem = ({ item, removeCartItem }) => {
  const handleRemove = () => {
    removeCartItem(item);
  };

  return (
    <div className="cart-item">
      <img src={item.imageUrl} alt={item.name} />
      <h5>{item.name} - {item.price}</h5>
      <button className="remove-button" onClick={handleRemove}>Remove</button>
    </div>
  );
};

export default CartItem;
