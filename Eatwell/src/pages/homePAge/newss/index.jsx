import React from "react";
import "./index.scss";
const Newss = () => {
  return (
    <div id="newss">
      <div className="container">
        <div className="newss">
          <div className="newss-text">
            <h3 className="n-h3">News</h3>
            <p className="n-p">
              Far far away, behind the word mountains, far from the countries{" "}
              <br />
              Vokalia and Consonantia, there live the blind texts.
            </p>
          </div>
          <div className="newss-card-container">
            <div className="newss-cards">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://preview.colorlib.com/theme/eatwell/images/offer_1.jpg"
                />
                <div className="card-body">
                  <h4 className="card-title">We Have Dilecious Food</h4>
                  <p className="card-text">
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.
                  </p>
                  <button className="s-btn">Read More</button>
                </div>
              </div>

              <div className="card">
                <img
                  className="card-img-top"
                  src="https://preview.colorlib.com/theme/eatwell/images/offer_2.jpg"
                />
                <div className="card-body">
                  <h4 className="card-title">Chef Special Menu</h4>
                  <p className="card-text">
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.
                  </p>
                  <button className="s-btn">Read More</button>
                </div>
              </div>

              <div className="card">
                <img
                  className="card-img-top"
                  src="https://preview.colorlib.com/theme/eatwell/images/offer_3.jpg"
                />
                <div className="card-body">
                  <h4 className="card-title">Merriage Celebrations</h4>
                  <p className="card-text">
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.
                  </p>
                  <button className="s-btn">Read More</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newss;
