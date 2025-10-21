import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { useState } from "react";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault()

    if (username.trim().toLowerCase() === 'kio') {
      login()
      localStorage.setItem("isLoggedIn", "true")
      navigate('/checkout')
    }else {
       setError("Username Salah")
    }
  };

  return (
    <div className="login-page">

      <h2>Login</h2> <hr />

      <form onSubmit={handleLogin} className="login-form">
        <h3>Username</h3>
        <input
          type="text"
          placeholder="Isi Username... (kio)"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="submit">Login</button>

        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
    </div>
  );
}
