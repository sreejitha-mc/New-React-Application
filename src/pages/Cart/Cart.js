import React from 'react';
import './Cart.css';
import ProductCard from '../../components/cardComponent';
import CartItem from '../../components/cartItemComponent';
import useCart from '../../logic/useCart'

const Cart = () => {
    const { cart, addToCart } = useCart();
    const products = [
        {
            id: 1,
            imageUrl: 'https://picsum.photos/200/300?random=1',
            name: 'Product 1',
            price: '$10'
          },
          {
            id: 2,
            imageUrl: 'https://picsum.photos/200/300?random=2',
            name: 'Product 2',
            price: '$15'
          },
          {
            id: 3,
            imageUrl: 'https://picsum.photos/200/300?random=3',
            name: 'Product 3',
            price: '$20'
          },
          {
            id: 4,
            imageUrl: 'https://picsum.photos/200/300?random=4',
            name: 'Product 4',
            price: '$25'
          },
          {
            id: 5,
            imageUrl: 'https://picsum.photos/200/300?random=5',
            name: 'Product 5',
            price: '$30'
          },
          {
            id: 6,
            imageUrl: 'https://picsum.photos/200/300?random=6',
            name: 'Product 6',
            price: '$35'
          },{
            id: 7,
            imageUrl: 'https://picsum.photos/200/300?random=7',
            name: 'Product 7',
            price: '$40'
          },{
            id: 8,
            imageUrl: 'https://picsum.photos/200/300?random=8',
            name: 'Product 8',
            price: '$45'
          },{
            id: 9,
            imageUrl: 'https://picsum.photos/200/300?random=9',
            name: 'Product 9',
            price: '$50'
          },{
            id: 10,
            imageUrl: 'https://picsum.photos/200/300?random=10',
            name: 'Product 10',
            price: '55'
          },
      ];

  return (
    <div>
      <h1>Product List</h1>
      <div className="product-list">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))}
      </div>

      <h2>Cart</h2>
      <div className="cart">
        {cart.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
