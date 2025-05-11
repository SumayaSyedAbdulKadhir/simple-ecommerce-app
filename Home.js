// src/pages/Home.js
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext"; // Import Cart Context

function Home() {
  // Product data
  const products = [
    { id: 1, name: "Product A", price: 30 },
    { id: 2, name: "Product B", price: 20 },
    { id: 3, name: "Product C", price: 50 },
    { id: 4, name: "Product D", price: 10 },
  ];

  const { addToCart } = useCart(); // Access addToCart from CartContext

  const handleAddToCart = (product) => {
    addToCart(product); // Add product to cart
  };

  return (
    <div>
      <h2>Product Catalog</h2>

      {/* Product List */}
      <div>
        {products.map((product) => (
          <div key={product.id}>
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <button onClick={() => handleAddToCart(product)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/* Link to Cart */}
      <div>
        <Link to="/cart">Go to Cart</Link>
      </div>
    </div>
  );
}

export default Home;
