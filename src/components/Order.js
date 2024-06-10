import React, { useState } from 'react';


const Order = ({ cartItems }) => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [isConfirmed, setIsConfirmed] = useState(false);


  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  const handleConfirmOrder = () => {
    if (name && address && phone) {
      setIsConfirmed(true);
    } else {
      alert('Please fill in all fields to confirm your order.');
    }
  };

  return (
    <div className="order-container">
      <h1>Order Summary</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty. Please add items to place an order.</p>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map((item, index) => (
              <div className="cart-item" key={index}>
                <div className="item-info">
                  <h2>{item.name} {item.quantity > 1 && <span>(x{item.quantity})</span>}</h2>
                  <p>${item.price * item.quantity}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="total-price">
            <h3>Total:</h3>
            <p>${totalPrice}</p>
          </div>
          {!isConfirmed && (
            <>
              <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
              <input type="text" placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)} />
              <input type="text" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
              <button className="place-order-btn" onClick={handleConfirmOrder}>Confirm Order</button>
            </>
          )}
          {isConfirmed && (
            <p>Thank you, {name}! Your order has been confirmed. We will deliver it to {address} within 30 minutes.</p>
          )}
        </>
      )}
    </div>
  );
};

export default Order;
