import React from "react";
import "./Navbar.css";
import "./Main.css";

import Signup from "./Signup";
import AOS from "aos";
import { useEffect } from "react";

import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const toggle = () => {
    document.getElementById("comrade-nav").style.opacity = 0;
    document.getElementById("image-nav").style.opacity = 0;
    document.body.style.overflow = "hidden";
  };
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  const routeChange = () => {
    <Link to="/signup">
      <Signup />{" "}
    </Link>;
  };

  return (
    <div className="navbar-whole">
      <nav id="navBar">
        <div className="title left">
          <h4 className="title">COMRADE</h4>
        </div>
        <div className="sandwitch">
          <div className="line-1"></div>
          <div className="line-2"></div>
          <div className="line-3"></div>
        </div>
        <div className="right">
          <div className="about">
            <h5>ABOUT</h5>
          </div>
          <div className="volunteer">
            <h5>VOLUNTEER COUNTDOWN</h5>
          </div>
          <div className="contributions">
            <h5>CONTRIBUTIONS</h5>
          </div>
          <div className="btn">
            <Link to="/signup">
              <button onClick={toggle}>Sign Up</button>
            </Link>
          </div>
          <img src="/menu.png" alt="" />
        </div>
      </nav>

      <div className="main" data-aos="zoom-in">
        {/* <p className="main-1">Together</p> */}
        <img src="/king.png" id="image-nav" alt="" />

        <h3 className="comrade" id="comrade-nav">
          COMRADE
        </h3>

        <div className="main-two">
          <a href="navBar">click here</a>
          <p className="line-main"></p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
