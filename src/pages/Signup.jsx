import { useState } from "react";
import axios from "axios";

export default function Signup() {
  const [form, setForm] = useState({ username: "", password: "", email: "" });

  const signup = async () => {
    await axios.post("http://localhost:8000/auth/users/", form);
    alert("Signup successful!");
  };

  return (
    <div className="form-container">
      <h2>Signup</h2>
      <input placeholder="Username" onChange={(e) => setForm({ ...form, username: e.target.value })} />
      <input placeholder="Email" onChange={(e) => setForm({ ...form, email: e.target.value })} />
      <input type="password" placeholder="Password" onChange={(e) => setForm({ ...form, password: e.target.value })} />
      <button onClick={signup}>Register</button>
    </div>
  );
}
