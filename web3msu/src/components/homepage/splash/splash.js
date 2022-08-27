import "./splash.css";

import "@animxyz/core";

import { XyzTransition, XyzTransitionGroup } from "@animxyz/react";

export const Splash = () => {
  return (
    <div>
      <div className="backBackground"></div>
      <div className="background">
        <div className="backgroundTitle">
          <br />
          <br />
          <br />
          <br />
          <br />
          <XyzTransition
            appear
            xyz="fade down-100% back-5 duration-20 stagger-1"
          >
            {" "}
            <div className="moveLeft">
              <h1>The future is here</h1>
            </div>
          </XyzTransition>
          <br />
          <br />
          <XyzTransition appear xyz="duration-6 short-100% wide-25% stagger">
            {" "}
            <div className="moveRight">
              The <b>Web3 Association</b> is a club based in Montclair State
              University dedicated to an exciting and rapidly evolving industry
            </div>
          </XyzTransition>

          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
        <a
          className="noDeco"
          href="https://montclair.campuslabs.com/engage/organization/web3"
        >
          <div className="joinUs">
            <h3>Join us</h3>
          </div>
        </a>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    </div>
  );
};
