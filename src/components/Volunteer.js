import React from "react";
import "./Volunteer.css";

const Volunteer = () => {
  return (
    <div className="volunteer-whole" data-aos="zoom-in">
      <h1 className="info-line-1">volunteer's</h1>
      <h1 className="info-line-2">countdown</h1>
      <div className="container-counter">
        <h1>01</h1>
        <h1 className="vol-2">10</h1>

        <h1>{new Date().getFullYear()}</h1>
        <h1>DAY</h1>

        <h1 className="vol-1">VOLUNTEER</h1>
        <h1>YEAR</h1>

        <div className="year-content"></div>
      </div>

      <div className="square-box-new-one">
        <div className="square-lines">
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
        </div>
        <div className="square-lines">
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
        </div>
        <div className="square-lines">
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
        </div>
        <div className="square-lines">
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
        </div>
        <div className="square-lines">
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
        </div>
        <div className="square-lines">
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
        </div>
      </div>
    </div>
  );
};

export default Volunteer;
