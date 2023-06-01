import React from 'react';
import '../pages/Cart/Cart.css'

const CartItem = ({ item }) => {
  return (
    <div className="cart-item">
      <img src={item.imageUrl} alt={item.name} />
      <h5>{item.name} - {item.price}</h5>
    </div>
  );
};

export default CartItem;
