import "./navigation.css";

import { React, useEffect, useState } from "react";

import hamburger from "../../assets/hamburger.png";
import logo from "../../assets/msulogo.png";

const LinkMenu = () => {
  return (
    <div className="linkMenu">
      <div className="linkItems">
        {" "}
        <a href="/" className="noDeco white">
          <div>Home</div>
        </a>
        <br />
        <div className="grey">About us</div>
        <br />
        <div className="grey">Resources</div>
        <br />
      </div>
    </div>
  );
};

export const Navigation = () => {
  const [showNav, setNav] = useState(false);

  function toggleNav() {
    if (showNav == false) {
      setNav(true);
    } else {
      setNav(false);
    }
  }

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
