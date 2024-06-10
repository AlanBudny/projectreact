import React, { useState } from 'react';

const Menu = ({ onAddToCart }) => {
  const [items] = useState([
    { name: 'Margherita', price: 10, img: '/images/pizza1.jpg' },
    { name: 'Pepperoni', price: 12, img: '/images/pizza2.jpg' },
    { name: 'Parma', price: 14, img: '/images/pizza3.jpg' },
    { name: 'Siciliana', price: 14, img: '/images/pizza4.jpg' },
    { name: 'Greek salad', price: 8, img: '/images/salad.jpg' },
    { name: 'Fries', price: 5, img: '/images/fries.jpg' },
  ]);

  const addToCartHandler = (item) => {
    onAddToCart(item);
  };

  return (
    <div className="menu">
      <h1>Menu</h1>
      <div className="menu-items">
        {items.map((item, index) => (
          <div className="menu-item" key={index}>
            <img src={item.img} alt={item.name} />
            <h2>{item.name}</h2>
            <p>${item.price}</p>
            <button onClick={() => addToCartHandler(item)}>Add to Cart</button> 
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
