import React from "react";
import "./header.css";
import logo from "../assets/img/logo.jpeg";
export const Header = () => {
  return (
    <div className="header-cntainer">
      <img style={{ width: "230px" }} src={logo} />
    </div>
  );
};
