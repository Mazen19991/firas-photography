import React from "react";
import Nav from "./Navigation/Nav";
import logo from "../../Assets/Logo.png";
import headerStyle from "./Header.module.css";

function Header() {
  return (
    <>
      <div className={headerStyle.Container}>
        <img src={logo} width="7.5%" style={{marginLeft: "3.5%"}}></img>
        <div className={headerStyle.nav}>
          <Nav></Nav>
        </div>
      </div>
    </>
  );
}

export default Header;
