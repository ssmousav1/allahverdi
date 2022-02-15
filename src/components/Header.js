import React from "react";
import "./header.css";
import logo from "../assets/img/img8.jpeg";
export const Header = () => {
  return (
    <div className="header-cntainer">
      <img style={{ width: "230px" }} src={logo} />
    </div>
  );
};
