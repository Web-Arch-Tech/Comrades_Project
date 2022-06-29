import React from "react";
import "./Verification.css";

const Verification = () => {
  return (
    <div>
      <div className="circles-new">
        <span className="circle-1"></span>
        <span className="circle-2"></span>
      </div>

      <p className="info-line-2">
        Verification <span className="process-1"> process</span>
      </p>
      {/* <img src="./images/circle.svg" alt="" /> */}

      <div class="timeline-container">
        <div class="event">
          <div class="event-date">
            <img className="images-verify" src="/sstep-1.PNG" alt="step1" />{" "}
          </div>
          <h2 style={{ fontSize: "80px" }}>Step-1</h2>
          <div class="timeline-content">
            <p className="para">
              Enter your mobile number enter the OTP we generated ensure that
              you have given all permissions for security purpose..
            </p>
          </div>
        </div>

        <div class="event">
          <div class="event-date">
            {" "}
            <img className="images-verify" src="/step-two.png" alt="name" />
          </div>
          <h2 style={{ fontSize: "80px" }}>Step-2</h2>
          <div class="timeline-content">
            <p className="para">
              Provide your original Aadhar card image,age,profession and Aadhar
              number.
            </p>
          </div>
        </div>

        <div class="event">
          <div class="event-date">
            {" "}
            <img className="images-verify" src="/step-three.png" alt="name" />
          </div>
          <h2 style={{ fontSize: "80px" }}>Step-3</h2>
          <div class="timeline-content">
            <p className="para">
              You are now ready to take a new journey with high security in a
              single touch.
            </p>
          </div>
        </div>
      </div>
      <div className="square-box-new">
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
      <div className="circles-new">
        <span className="circle1"></span>
        <span className="circle2"></span>
      </div>
    </div>
  );
};

export default Verification;
