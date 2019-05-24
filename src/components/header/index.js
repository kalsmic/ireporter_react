import React, { Component } from "react";
import "./syles.scss";
const Header = props => {
  return (
    <header className="header" data-test="headerComponent">
      <div className="wrap">
        <div className-="logo">
          <img data-test="logoIMG" src={"img/download.png"} alt="logo" />
        </div>
      </div>
    </header>
  );
};
export default Header;
