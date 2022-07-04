import React from "react";

import "./SignUp.css";

const Signup = () => {
  const changeEvent = () => {
    console.log("clicked");
  };
  return (
    <div className="form-container">
      <form action=" ">
        <a href="navBar">
          <img src="/cancel.png" alt="" />
        </a>

        <h3 className="get">Get Started</h3>

        <input type="text" onClick={changeEvent} placeholder="Username" id="" />
        <input type="email" onClick={changeEvent} id="" placeholder="Email" />
        <input
          type="password"
          onClick={changeEvent}
          id=""
          placeholder="Password"
        />
        <input type="submit" onClick={changeEvent} id="" value="Sign Up" />
        <p className="login-alt">Or sign up with</p>
        <div className="images-signup">
          <img className="c-height" src="/search.png" alt="" />
          <img className="c-height-1" src="/apple-black-logo.png" alt="" />
        </div>
      </form>
    </div>
  );
};

export default Signup;
