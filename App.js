import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext"; // Cart context provider
import Home from "./pages/Home"; // Import Home page
import Login from "./pages/Login"; // Import Login page
import Cart from "./pages/Cart"; // Import Cart page
import Admin from "./pages/Admin"; // Import Admin page
import Navbar from "./components/Navbar"; // Import Navbar
import Signup from "./pages/Signup"; // Import Signup page
import ForgotPassword from "./pages/ForgotPassword"; // Import ForgotPassword page
import Orders from "./pages/Orders";
import MyOrders from "./pages/MyOrders";
function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        {" "}
        {/* Wrap app in CartProvider for cart context */}
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} /> {/* Homepage route */}
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/my-orders" element={<MyOrders />} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
