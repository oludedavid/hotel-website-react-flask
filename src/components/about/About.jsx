import React from "react";
import "./About.css";

export default function About(props) {
  return (
    <div>
      <div className="aboutContainer" id="about">
        <div className="about-header-wrapper">
          <div
            className="about-header-image content"
            style={{
              backgroundImage:
                "url(/assests/images/background-images/background1.jpg)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              opacity: "0.6",
            }}
          >
            <h2 className="image-text">Welcome to jasmine</h2>
            <h2 className="image-text">Welcome to jasmine</h2>
          </div>
        </div>
        <div className="about-paragraph-wrapper">
          <div className="about-paragraph">
            <section className="para-section">
              <h1>About Us</h1>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo
                dolorem impedit quidem repellat odit? Nesciunt earum optio
                placeat, quasi quisquam voluptates harum doloremque quibusdam
                minus officiis hic doloribus eaque quas. Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Esse quaerat, sapiente
                debitis amet nihil perferendis illo qui laboriosam inventore
                nemo eius quod enim reiciendis tempora cumque quae officia
                delectus autem.
              </p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo
                dolorem impedit quidem repellat odit? Nesciunt earum optio
                placeat, quasi quisquam voluptates harum doloremque quibusdam
                minus officiis hic doloribus eaque quas. Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Esse quaerat, sapiente
                debitis amet nihil perferendis illo qui laboriosam inventore
                nemo eius quod enim reiciendis tempora cumque quae officia
                delectus autem.
              </p>
            </section>
          </div>
          <div className="about-image">
            <img src="/assests/images/background-images/background1.jpg" />
          </div>
        </div>
      </div>
    </div>
  );
}
