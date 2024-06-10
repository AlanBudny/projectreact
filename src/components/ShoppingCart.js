import React from 'react';

const ShoppingCart = ({ cartItems }) => {
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="shopping-cart-container">
      <h1>Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className="cart-items">
          {cartItems.map((item, index) => (
            <div key={index} className="cart-item">
              <img src={item.img} alt={item.name} />
              <div className="item-details">
                <h2>{item.name} {item.quantity > 1 && `x${item.quantity}`}</h2>
                <p>${item.price * item.quantity}</p>
              </div>
            </div>
          ))}
        </div>
      )}
      {cartItems.length > 0 && (
        <div className="total-price">
          <h3>Total: ${totalPrice}</h3>
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;
