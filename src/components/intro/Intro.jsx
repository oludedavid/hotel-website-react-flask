import React from "react";
import "./Intro.css";
import Navbar from "../navigationBar/Navbar";

export default function Intro() {
  return (
    <div
      className="mainContainer"
      style={{
        backgroundImage:
          "url(/assests/images/background-images/background6.jpg)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        opacity: "1",
      }}
    >
      <Navbar></Navbar>
      <div className="introText">
        <h2>
          Welcome to a <strong>Home</strong> far from Home.
        </h2>
        <p>
          Experience the Magic of Jas<strong>MINE </strong>
          Hotel and Suites
        </p>
        <div className="btn-mover">
          <a href="#about" className="about-us-btn">
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
}
