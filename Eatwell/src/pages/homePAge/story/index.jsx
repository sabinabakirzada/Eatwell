import React from "react";
import "./index.scss";
const Story = () => {
  return (
    <div id="story">
      <div className="container">
        <div className="story">
          <div className="story-text-container">
            <h5 className="s-h5">OUR STORY</h5>
            <h3 className="s-h3">WELCOME</h3>
            <p className="s-p">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
            <p className="s-p s-p2">
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia. It is a paradisematic country, in
              which roasted parts of sentences fly into your mouth.
            </p>
            <button className="s-btn">Learn More About Us</button>
          </div>
          <div className="s-img">
            <img
              className="s-img1"
              src="https://preview.colorlib.com/theme/eatwell/images/about_img_1.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story;
