import { useState } from 'react';

const useCart = (initialProducts) => {
  const [cart, setCart] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [products, setProducts] = useState(initialProducts);

  const addToCart = (product) => {
    setCart([...cart, product]);
    setTotalAmount((totalAmount) => totalAmount + product.price);
    setProducts((products) =>
      products.filter((p) => p !== product)
    );
  };

  const removeCartItem = (item) => {
    const updatedCart = cart.filter((i) => i.id !== item.id);
    setCart(updatedCart);
    setTotalAmount((totalAmount) => totalAmount - item.price);
    setProducts((products) => [...products, item]);
  };

  const clearCart = () => {
    setCart([]);
    setTotalAmount(0);
    setProducts((products) => [...products, ...cart]);
  };

  return { cart, totalAmount, products, addToCart, removeCartItem, clearCart };
};

export default useCart;
