import { useState } from "react";
import "./servicesAdmin.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddAdmin() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [type, setType] = useState("");
  const [status, setStatus] = useState("");

  const handleClick = () => {
    console.log(username, password, type, status);
    axios
      .post("http://localhost:8080/admin/add", {
        username,
        password,
        type,
        status,
      })
      .then((res) => {
        console.log(res.data);
        navigate("/admin/lists");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="admin-card">
      <h1>Add Admin</h1>
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
      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option>ACTIVE</option>
        <option>BLOCK</option>
        <option>DELETE</option>
      </select>
      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option>ADMIN</option>
        <option>SUBADMIN</option>
      </select>
      <button onClick={handleClick} type="submit">
        Add Admin
      </button>
    </div>
  );
}

export default AddAdmin;
