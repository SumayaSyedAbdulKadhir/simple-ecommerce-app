// src/context/CartContext.js
import React, { createContext, useContext, useState } from "react";

// Create a Context for the Cart
const CartContext = createContext();

export const useCart = () => useContext(CartContext);

// CartProvider component to wrap around the app and provide the cart context
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [orders, setOrders] = useState([]); // To store all completed orders

  // Add product to the cart
  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, { ...product, quantity: 1 }]);
  };

  // Remove product from the cart
  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  // Place an order and add it to the orders list
  const placeOrder = () => {
    setOrders((prevOrders) => [...prevOrders, ...cart]);
    setCart([]); // Empty the cart after placing the order
  };

  // Cancel order: Remove from both the cart and the admin orders list
  const cancelOrder = (orderId) => {
    setOrders((prevOrders) =>
      prevOrders.filter((order) => order.id !== orderId)
    );
    setCart((prevCart) => prevCart.filter((item) => item.id !== orderId));
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        orders,
        addToCart,
        removeFromCart,
        placeOrder,
        cancelOrder,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
