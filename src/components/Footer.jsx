import React from "react";
import "../App.css";
import logo from "../logo.svg";

export const Footer = () => {
  return (
    <div className="header">
      <header className="App-header">
        <img
          src={logo}
          className="App-logo"
          alt="logo"
          height="50"
          width="50"
        />
        React devlopment Company
        <div className="header-right">
          Footer
          {/* <a class="active" href="#home">
          Home
        </a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a> */}
        </div>
      </header>
    </div>
  );
};
