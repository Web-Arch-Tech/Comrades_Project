import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <nav>
        <div className="title left">
          <h4>COMRADE</h4>
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
            <button>SIGN UP</button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
