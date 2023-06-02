import React from 'react';
import '../pages/Cart/Cart.css';

const ProductCard = ({ product, addToCart,  }) => {
  const { imageUrl, name, price } = product;

  const handleAddToCart = () => {
    addToCart(product);
  };


  return (
    <div className="card product-item">
      <img src={imageUrl} alt={name} />
      <div className="product-details">
        <h3>{name}</h3>
        <p>${price}</p>
      </div>
      <button className="button" onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
