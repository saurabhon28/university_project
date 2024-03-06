import { useEffect, useState } from "react";
import "./servicesAdmin.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function AdminList() {
  const navigate = useNavigate();
  const [admins, setAdmins] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("type") !== "ADMIN") {
      navigate("/admin/dashboard");
    }
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:8080/admin/admins")
      .then((res) => {
        console.log(res.data);
        setAdmins(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="admin-card">
      <table className="admin-table">
        <thead>
          <tr className="raw">
            <th>Type</th>
            <th>Username</th>
            <th>Status</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {admins.map((adminItem) => (
            <tr key={adminItem._id}>
              <td>{adminItem.type}</td>
              <td>{adminItem.username}</td>
              <td>{adminItem.status}</td>
              <td>{adminItem.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link className=".link-button" to="/admin/add">
        ADD ADMIN
      </Link>
    </div>
  );
}

export default AdminList;
