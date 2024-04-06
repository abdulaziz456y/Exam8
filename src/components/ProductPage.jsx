import React from 'react';

const ProductPage = () => {
  const products = [
    { id: 1, name: 'Product 1', price: 300 },
    { id: 2, name: 'Product 2', price: 355 },
    { id: 3, name: 'Product 3', price: 275 },
  ];

  const handleAddToCart = (product) => {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const itemExists = cartItems.find((item) => item.id === product.id);

    if (itemExists) {
      itemExists.quantity += 1;
    } else {
      cartItems.push({ ...product, quantity: 1 });
    }

    localStorage.setItem('cart', JSON.stringify(cartItems));
  };

  return (
    <div className="container mx-auto">

    </div>
  );
};

export default ProductPage;
