// src/pages/Admin.js
import React from "react";
import { useCart } from "../context/CartContext";

const Admin = () => {
  const { orders, cancelOrder } = useCart();

  return (
    <div className="admin-container">
      <h2>Manage Orders</h2>
      <div className="admin-orders">
        {orders.length === 0 ? (
          <p>No orders to manage</p>
        ) : (
          orders.map((order) => (
            <div className="admin-order" key={order.id}>
              <div className="admin-order-header">
                <h3>{order.name}</h3>
                <p>Price: ${order.price}</p>
              </div>
              <button className="cancel" onClick={() => cancelOrder(order.id)}>
                Cancel Order
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Admin;
