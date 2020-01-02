import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/Frame5.png";

const Logo = () => {
  return (
    <div>
      <img src={logo} alt="logo" />
      <h1 style={{ margin: "0" }}>
        <NavLink to="/">Pumpodoro</NavLink>
      </h1>
    </div>
  );
};
export default Logo;
