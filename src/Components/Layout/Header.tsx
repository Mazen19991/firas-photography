import React from "react";
import Nav from "./Navigation/Nav";
import logo from "../../Assets/Logo.png";
import headerStyle from "./Header.module.css";

function Header() {
  return (
    <>
      <div style={{ minHeight: "12.5%", width: "100%", zIndex: "0",  backgroundColor: "#F7F5F1" }}>
        <div className={headerStyle.Container}>
          <img src={logo} width="7.5%" style={{ marginLeft: "3.5%" }}></img>
          <div className={headerStyle.nav}>
            <Nav/>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
