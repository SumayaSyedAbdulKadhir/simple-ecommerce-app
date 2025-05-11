// src/pages/Login.js
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Retrieve saved user data from localStorage
    const savedUser = JSON.parse(localStorage.getItem("user"));

    // Check if saved data matches entered credentials
    if (
      savedUser &&
      savedUser.username === username &&
      savedUser.password === password
    ) {
      alert("Login successful!");
      navigate("/"); // Redirect to Home or Dashboard
    } else {
      alert("Wrong credentials, try again.");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
