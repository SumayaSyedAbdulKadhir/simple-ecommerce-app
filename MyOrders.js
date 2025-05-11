// src/pages/MyOrders.js
import { useEffect, useState } from "react";

function MyOrders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const currentUser = localStorage.getItem("userEmail"); // Use your login system's identifier
    const allOrders = JSON.parse(localStorage.getItem("orders")) || [];
    const userOrders = allOrders.filter((order) => order.user === currentUser);
    setOrders(userOrders);
  }, []);

  return (
    <div>
      <h2>My Orders</h2>
      {orders.length === 0 ? (
        <p>No orders placed yet.</p>
      ) : (
        orders.map((order) => (
          <div key={order.id} className="order-box">
            <p>
              <strong>Order ID:</strong> {order.id}
            </p>
            <p>
              <strong>Date:</strong> {order.placedAt}
            </p>
            <p>
              <strong>Status:</strong> {order.status}
            </p>
            <p>
              <strong>Total:</strong> ${order.total}
            </p>
            <ul>
              {order.items.map((item, index) => (
                <li key={index}>
                  {item.name} - Qty: {item.quantity} - Price: ${item.price}
                </li>
              ))}
            </ul>
          </div>
        ))
      )}
    </div>
  );
}

export default MyOrders;
