import React from "react";
import { FaFacebookSquare, FaInstagram, FaTwitter } from "react-icons/fa";

import "./index.scss";

const Footer = () => {
  return (
    <div id="footer">
      <div className="container">
        <div className="footer">
          <div className="about-ul">
            <div className="about"></div>
            <div className="restaurant"></div>
            <div className="useful"></div>
            <div className="useful"></div>
          </div>

          <div className="social">
            <p>
              <FaTwitter className="f-icon" />
            </p>
            <p>
              <FaFacebookSquare className="f-icon" />
            </p>
            <p>
              <FaInstagram className="f-icon" />
            </p>
          </div>

          <div className="late">
            <p>
              © Copyright ©2024 All rights reserved | This template is made with
              by Colorlib
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
