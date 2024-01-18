import React from "react";
import "./index.scss";
const Welcome = () => {
  return (
    <div id="welcome">
      <div className="container">
        <div className="welcome">
          <div className="w-text-container">
            <h1 className="welcome-h1">Welcome To EatWell</h1>
            <h5 className="welcome-h5">
              Come and eat well with our delicious & healthy foods.
            </h5>
            <button className="welcome-btn">Reservation</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
