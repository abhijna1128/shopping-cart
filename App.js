// App.js

import React, { useState } from 'react';
import './App.css';

const productsData = [
  { id: 1, 
    name: 'Hair straighter',
    category: 'Electronics', 
    img:"https://images.app.goo.gl/Vyngz193ahCVtJ5R6",
    price: 50,
   rating: 4 },
  { id: 2, name: 'Trousers',
   category: 'Clothing',
   img:"https://images.app.goo.gl/n3LEx6yDJQaj6qFL9",
   price: 30, 
   rating: 3 },
  { id: 3, 
    name: 'Blue earring',
     category: 'Accessories', 
     img:"https://images.app.goo.gl/eAQSCrkCRF5F57nV6",
     price: 20, 
     rating: 5 },
  // Add more products as needed
];

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, { ...product, quantity: 1 }]);
  };

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
  };

  const incrementQuantity = (productId) => {
    const updatedCart = cart.map((item) =>
      item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCart(updatedCart);
  };

  const decrementQuantity = (productId) => {
    const updatedCart = cart.map((item) =>
      item.id === productId && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
    );
    setCart(updatedCart);
  };

  return (
    <div className="App">
      <header>
        <h1>Shopping Cart</h1>
        <input type="text" placeholder="Search" />
      </header>
      <section className="categories">
        {/* Add category filter options */}
        <button>All</button>
        <button>Electronics</button>
        <button>Clothing</button>
        <button>Accessories</button>
      </section>
      <section className="products">
        {productsData.map((product) => (
          <div key={product.id} className="product-card">
            <div className="product-info">
            <img src={product.img} alt={product.name} />
              <h3>{product.name}</h3>
              <p>Category: {product.category}</p>
              <p>Price: ${product.price}</p>
              <p>Rating: {product.rating}/5</p>
            </div>
            <div className="product-actions">
              <button onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
          </div>
        ))}
      </section>
      <section className="cart">
        <h2>Shopping Cart</h2>
        {cart.map((item) => (
          <div key={item.id} className="cart-item">
            <p>{item.name}</p>
            <div className="quantity">
              <button onClick={() => decrementQuantity(item.id)}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => incrementQuantity(item.id)}>+</button>
            </div>
            <p>${item.price * item.quantity}</p>
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </div>
        ))}
      </section>
    </div>
  );
};

export default App;
