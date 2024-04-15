import React from "react";
import "./FmStyle.css";
import netflix from "../../assets/images/Logonetflix.png";

function Sign() {
  return (
    <div id="signUp">
      <div id="sign-logo">
        <img src={netflix} alt="" />
      </div>
      <div id="sign-formprn">
        <div id="sign-form">
          <form action="">
            <h1>Sign In</h1>
            <span id="Sign-input">
              <input type="text" placeholder="Email or phone number" />
              <input
                type="password"
                placeholder="Password"
                name="singPassword"
                id="singPassword"
              />
            </span>
            <button type="submit">Sign In</button>
            <h3 style={{ color: "rgb(212, 212, 212)" }}>OR</h3>
            <a href="">
              <button>Login</button>
            </a>
            <a href="" className="signAlink">
              Forgot Password?
            </a>
            <span id="sign-rem">
              <input type="checkbox" name="SignRemember" id="SignRemember" />
              &nbsp;<p>Remember me</p>
            </span>
            <p id="sign-note">
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot. <a href="">Learn more</a>
            </p>
          </form>
        </div>
      </div>
      <div id="btm">
        <div id="sign-bottom">
          <span id="b1">
            <p>Questions? Call 000-800-919-1694</p>
          </span>
          <span id="b2">
            <a href="">FAQ</a>
            <a href="">Terms of Use</a>
            <a href="">Cookie Preferences</a>
            <a href="">Help Centre</a>
            <a href="">Privacy</a>
            <a href="">Corporate Information</a>
          </span>
          <span>
            <select name="language" id="language">
              <option value="English">English</option>
              <option value="Hindi">Hindi</option>
            </select>
          </span>
        </div>
      </div>
    </div>
  );
}
export default Sign;
