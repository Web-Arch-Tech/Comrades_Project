import React from "react";
import "./Navbar.css";
import Signup from "./Signup";
import { useNavigate, Link } from "react-router-dom";

const Navbar = () => {
  const routeChange = () => {
    <Link to="/signup">
      <Signup />{" "}
    </Link>;
  };

  return (
    <div>
      <nav>
        <div className="title left">
          <h4 className="title">COMRADE</h4>
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
              <button>Sign Up</button>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
