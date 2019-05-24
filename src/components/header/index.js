import React, { Component } from "react";
import "./syles.scss";
import logo from "../../../public/img/download.png";
const Header = props => {
  return (
    <header className="header" data-test="headerComponent">
      <div className="wrap">
        <div className-="logo">
          <img data-test="logoIMG" src={logo} alt="logo" />
        </div>
      </div>
    </header>
  );
};
export default Header;
