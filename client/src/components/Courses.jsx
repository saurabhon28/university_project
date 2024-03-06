import axios from "axios";
import { useEffect, useState } from "react";
import "./services.css";

function Cources() {
  const [data, setData] = useState([]);

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
    <div className="service-container">
      {data.length > 0 ? (
        data.map((serviceItem) => (
          <div className="card" key={serviceItem._id}>
            <h3>{serviceItem.title}</h3>
            <p>{serviceItem.description}</p>
          </div>
        ))
      ) : (
        <p>Not Found</p>
      )}
    </div>
  );
}

export default Cources;
