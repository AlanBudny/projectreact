import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/About';
import Menu from './components/Menu';
import ShoppingCart from './components/ShoppingCart';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Order from './components/Order';
import ContactConfirmation from './components/ContactConfirmation';
import OrderConfirmation from './components/OrderConfirmation';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(cartItem => cartItem.name === item.name);
      if (existingItem) {
        return prevItems.map(cartItem =>
          cartItem.name === item.name
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        return [...prevItems, { ...item, quantity: 1 }];
      }
    });
  };

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/menu" element={<Menu onAddToCart={addToCart} />} />
          <Route path="/cart" element={<ShoppingCart cartItems={cartItems} />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/contact-confirmation" element={<ContactConfirmation />} />
          <Route path="/order" element={<Order cartItems={cartItems} />} />
          <Route path="/order-confirmation" element={<OrderConfirmation />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
