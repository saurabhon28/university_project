import { useEffect, useState } from "react";
import "./servicesAdmin.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function ServicesAdmin() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [image, setImage] = useState("");

  console.log(image);

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/home");
    }
  }, []);

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleDescription = (e) => {
    setDesc(e.target.value);
  };

  const handleClick = () => {
    console.log(title, desc, image);

    const formData = new FormData();

    formData.append("title", title);
    formData.append("description", desc);
    formData.append("image", image);
    axios
      .post("http://localhost:8080/api/services", formData, {
        headers: { Authorization: localStorage.getItem("token") },
      })
      .then((res) => {
        console.log(res.data);

        if (res.data.code === 403 && res.data.message === "Token Expired...!") {
          localStorage.setItem("token", null);
        }
      })
      .catch((err) => {
        console.log(err, "err");
      });
  };

  return (
    <div className="admin-card">
      <input
        className="service-input"
        value={title}
        onChange={handleTitle}
        type="text"
        placeholder="Enter Title"
      />
      <input
        className="service-input"
        value={desc}
        onChange={handleDescription}
        type="text"
        placeholder="Enter Description"
      />
      <input onChange={(e) => setImage(e.target.files[0])} type="file" />
      <button className="btn" onClick={handleClick}>
        Add Services
      </button>
    </div>
  );
}

export default ServicesAdmin;
