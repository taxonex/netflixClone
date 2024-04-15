import React, { useState, useEffect } from "react";
import "./statuslider.css";
import statusban from "../../assets/images/banner.jpg"
import gsap from "gsap"

function Statuslider() {
 
  return (
    <div id="status">
      <div id="banner-slider">
        <img src={statusban} alt="" />
        <span id="statushead">
          <span><h1>Download & Watch</h1></span>
          <span><h2>Movies,TVshows,EX:-</h2></span>
        </span>
      </div>
    </div>
  );
}

export default Statuslider;
