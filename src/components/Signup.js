import React from "react";

import "./SignUp.css";

const Signup = () => {
  const changeEvent = () => {
    console.log("Clicked");
  };
  const changeEvent1 = () => {
    document.body.style.opacity = 0.5;
    Document.Body.Style.Overflow = "hidden";
    console.log("clicked");
  };
  return (
    <div className="form-container" id="signUp">
      <form action=" ">
        <a href="navBar">
          <img className="signup-cancel" src="/cancel.png" alt="" />
        </a>

        <h3 className="get">Get Started</h3>

        <input type="text" onClick={changeEvent} placeholder="Name" id="" />
        <input type="email" onClick={changeEvent} id="" placeholder="Email" />
        <input
          type="password"
          onClick={changeEvent}
          id=""
          placeholder="Password"
        />
        <input type="submit" onClick={changeEvent1} id="" value="Sign Up" />
        <p className="login-alt">Or sign up with</p>
        <div className="signup-images">
          {" "}
          <img className="c-height" src="/search.png" alt="" />
          <img className="c-height-1" src="/apple-black-logo.png" alt="" />
        </div>
      </form>
    </div>
  );
};

export default Signup;
