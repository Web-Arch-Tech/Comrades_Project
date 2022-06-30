import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer" data-aos="zoom-in">
      <div className="footer-info">
        <h4 className="title new">Comrade</h4>
        <p className="foot-i">Together we..</p>
        <div className="pic">
          <img src="/gplay-new.png" alt="" />
        </div>
        <div className="social">
          <img className="pics" src="/facebook.png" alt="" />
          <img className="pics" src="/instagram.png" alt="" />
          <img className="pics" src="linkedin.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
