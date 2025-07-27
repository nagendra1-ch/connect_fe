import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const login = async () => {
    try {
      const res = await axios.post("http://localhost:8000/auth/token/login/", {
        username,
        password,
      });
      localStorage.setItem("token", res.data.auth_token);
      navigate("/home");
    } catch (err) {
      alert("Login failed");
    }
  };

  return (
    <div className="form-container">
      <h2>Login</h2>
      <input placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
      <input placeholder="Password" type="password" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={login}>Login</button>
    </div>
  );
}
