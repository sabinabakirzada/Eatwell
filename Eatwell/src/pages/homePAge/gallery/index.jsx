import React from "react";
import "./index.scss";
const Gallery = () => {
  return (
    <div id="gallery">
      <div className="container">
        <div className="gallery">
          <div className="gallery-text">
            <h3 className="g-h3">Gallery</h3>
            <p className="g-p">
              Far far away, behind the word mountains, far from the countries
              <br />
              Vokalia and Consonantia, there live the blind texts.
            </p>
          </div>

          <div className="g-imgs">
            <img
              src="https://preview.colorlib.com/theme/eatwell/images/menu_1.jpg"
              className="g-img"
            />
            <img
              src="https://preview.colorlib.com/theme/eatwell/images/menu_2.jpg"
              className="g-img"
            />
            <img
              src="https://preview.colorlib.com/theme/eatwell/images/menu_3.jpg"
              className="g-img"
            />
            <img
              src="https://preview.colorlib.com/theme/eatwell/images/menu_2.jpg"
              className="g-img"
            />
            <img
              src="https://preview.colorlib.com/theme/eatwell/images/menu_3.jpg"
              className="g-img"
            />
            <img
              src="https://preview.colorlib.com/theme/eatwell/images/menu_1.jpg"
              className="g-img"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
