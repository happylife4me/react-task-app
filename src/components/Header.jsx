import React from "react";
import { Route, Link, Switch } from "react-router-dom";

import MainBody from "./empComponents/MainBody";
import Products from "./ProductsComponents/Products";
import { BodyDisplay } from "./BodyDisplay";
import EleContext from "./EleComponents/EleContext";

import "../App.css";
import logo from "../logo.svg";

export const Header = () => {
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
        {/* <div className="header-right">
          <a className="active" href="#home">
            Home
          </a>
          <a href="#contact">Shopping</a>
          <a href="#about">About</a>
        </div> */}
        <div className="header-right">
          <Link exact to="/">
            Home
          </Link>
          <Link exact to="/employee">
            Employee List
          </Link>
          <Link exact to="/shopping1">
            Shopping Cart 1
          </Link>
          <Link exact to="/shopping2">
            Shopping Cart 2
          </Link>
        </div>
      </header>
      <hr />
      <div className="container">
        <Switch>
          <Route path="/" exact component={BodyDisplay} />
          <Route path="/employee" exact component={MainBody} />
          <Route path="/shopping1" exact component={Products} />
          <Route path="/shopping2" exact component={EleContext} />
        </Switch>
      </div>
      <hr />
    </div>
  );
};
