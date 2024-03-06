import axios from "axios";
import { useEffect, useState } from "react";
import "./services.css";

function Services() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/services")
      .then((res) => {
        console.log(res.data);
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <input
        value={search}
        onChange={handleSearch}
        type="text"
        placeholder="Search"
      />
      <div className="service-container">
        {data.length > 0 ? (
          data
            .sort((a, b) =>
              a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1
            )
            .filter((item) =>
              item.title.toLowerCase().includes(search.toLowerCase())
            )
            .map((serviceItem) => (
              <div className="card" key={serviceItem._id}>
                <img
                  width="80%"
                  src={`http://localhost:8080/${serviceItem.imageURL}`}
                  alt="image"
                />
                <h3>{serviceItem.title}</h3>
                <p>{serviceItem.description}</p>
              </div>
            ))
        ) : (
          <p>Not Found</p>
        )}
      </div>
    </>
  );
}

export default Services;
