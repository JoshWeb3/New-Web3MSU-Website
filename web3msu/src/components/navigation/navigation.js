import "./navigation.css";

import { React, useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";
import hamburger from "../../assets/hamburger.png";
import logo from "../../assets/msulogo.png";



export const Navigation = () => {
  const [showNav, setNav] = useState(false);
  
    function toggleNav() {
    if (showNav == false) {
      setNav(true);
    } else {
      setNav(false);
    }
  }
  
  const LinkMenu = () => {
  
  return (
    <div className="linkMenu">
      <div className="linkItems">
        {" "}
        <Link onClick={toggleNav} to="/" className="noDeco white">
          <div>Home</div>
        </Link>
        <br/>
        <div className="grey">About us</div>
       <br/>
       <Link onClick={toggleNav} to="/web3msuapp" className="noDeco white">
        <div>Login</div>
        </Link>
        <br />
      </div>
    </div>
  );
};



  if (showNav == false) {
    return (
      <>
        <div className="navigationBar">
          <div className="navigationItems">
            <div>
              <a href="/">
                <img className="navigationButton" src={logo} />
              </a>
            </div>
            <div onClick={toggleNav}>
              <img className="navigationButton" src={hamburger} />
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="navigationBar">
          <div className="navigationItems">
            <div>
              <a href="/">
                <img className="navigationButton" src={logo} />
              </a>
            </div>
            <div onClick={toggleNav}>
              <img className="navigationButton" src={hamburger} />
            </div>
          </div>
        </div>
        <LinkMenu />
      </>
    );
  }
};
