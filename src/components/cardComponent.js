import React from 'react';
import '../pages/Cart/Cart.css';

const ProductCard = ({ product, addToCart }) => {
  const { imageUrl, name, price } = product;

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="card">
      <img src={imageUrl} alt={name} />
      <h3>{name}</h3>
      <p>{price}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
