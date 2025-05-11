import { useEffect, useState } from "react";

function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const savedOrders = JSON.parse(localStorage.getItem("orders")) || [];
    setOrders(savedOrders);
  }, []);

  const handleCancelOrder = (orderId) => {
    const updatedOrders = orders.filter((order) => order.id !== orderId);
    setOrders(updatedOrders);
    localStorage.setItem("orders", JSON.stringify(updatedOrders));
  };

  return (
    <div className="orders-container">
      <h2>Your Orders</h2>
      {orders.length === 0 ? (
        <p>No orders placed yet 😶</p>
      ) : (
        orders.map((order) => (
          <div key={order.id} className="order">
            <h4>Order ID: {order.id}</h4>
            <p>Placed at: {order.placedAt}</p>
            <ul>
              {order.items.map((item) => (
                <li key={item.id}>
                  {item.name} — Quantity: {item.quantity} — Price: $
                  {item.price.toFixed(2)}
                </li>
              ))}
            </ul>
            <strong>Total: ${order.total}</strong>
            <br />
            <button onClick={() => handleCancelOrder(order.id)}>
              Cancel Order
            </button>
            <hr />
          </div>
        ))
      )}
    </div>
  );
}

export default Orders;
