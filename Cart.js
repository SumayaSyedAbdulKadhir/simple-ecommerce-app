// src/pages/Cart.js
import React from "react";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cart, removeFromCart, placeOrder, cancelOrder } = useCart();

  const handleCancelOrder = (productId) => {
    cancelOrder(productId);
  };

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map((product) => (
          <div key={product.id} className="cart-item">
            <div className="product-info">
              <h3>{product.name}</h3>
              <p>Price: ${product.price}</p>
              <p>Quantity: {product.quantity}</p>
            </div>
            <button onClick={() => removeFromCart(product.id)}>Remove</button>
            <button onClick={() => handleCancelOrder(product.id)}>
              Cancel Order
            </button>
          </div>
        ))
      )}

      {cart.length > 0 && (
        <div className="cart-total">
          <button onClick={placeOrder}>Place Order</button>
        </div>
      )}
    </div>
  );
};

export default Cart;
