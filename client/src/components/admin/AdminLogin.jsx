import { useState } from "react";
import "./servicesAdmin.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AdminLogin() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = () => {
    console.log(username, password);
    axios
      .post("http://localhost:8080/admin/login", {
        username,
        password,
      })
      .then((res) => {
        console.log(res.data);
        localStorage.setItem("type", res.data.type);
        localStorage.setItem("token", res.data.token);
        navigate("/admin/dashboard");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="admin-card">
      <h1>Login Admin</h1>
      <input
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        type="text"
        placeholder="Enter Username"
      />
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        placeholder="Enter Password"
      />

      <button onClick={handleClick} type="submit">
        Login
      </button>
    </div>
  );
}

export default AdminLogin;
