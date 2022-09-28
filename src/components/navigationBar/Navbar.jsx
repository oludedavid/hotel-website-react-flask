import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHotel } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const element = <FontAwesomeIcon icon={faHotel} />;

  const linkStyle = {
    margin: "1rem",
    textDecoration: "none",
    color: "white",
  };
  return (
    <div className="navContainer">
      <nav className="navMenu">
        <div className="logoContainer">
          <h1 className="logoText">
            Jasmines Hotels and Suites <span>{element}</span>
          </h1>
        </div>

        <div className="listContainer">
          <ul className="listItems">
            <li className="homeLink">
              <a className="homie" href="/">
                Home
              </a>
            </li>
            <li className="roomLink">
              <a className="roomie" href="/room">
                Room
              </a>
            </li>
            <li className="bookLink">
              <a className="bookie" href="/book">
                Book
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
