import axios from "axios";
import React, { useEffect, useState } from "react";
import "./index.scss";
const Offer = () => {
  const [data, setData] = useState([]);
  const getData = async () => {
    let res = await axios("http://localhost:8080/products");
    setData(res.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div id="offer">
      <div className="container">
        <div className="offer">
          {data.map((item) => (
            <div key={item.id} class="card" style={{ width: "400px" }}>
              <img
                class="card-img-top"
                src={item.imgUrl}
                alt="Card image"
                style={{ width: "100%" }}
              />
              <div class="card-body">
                <h2> ${item.price}</h2>

                <h4 class="card-title">{item.productName}</h4>
                <p class="card-text">{item.description}</p>
                <button className="s-btn">Read More</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Offer;
