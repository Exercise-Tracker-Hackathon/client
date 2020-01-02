import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "./Logo.js";

const NavBar = () => {
  return (
    <div
      style={{
        padding: "0 15px",
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
        maxWidth: "1200px",
        margin: "0 auto"
      }}
    >
      <h3 style={{ margin: "0" }}>
        <NavLink to="/">Pumpodoro</NavLink>
      </h3>
      <nav>
        <NavLink style={{ margin: "0 10px" }} to="/login">
          Login
        </NavLink>
        <NavLink style={{ margin: "0 10px" }} to="/register">
          Register
        </NavLink>
        <NavLink style={{ margin: "0 0 0 10px" }} to="/profile">
          Dashboard
        </NavLink>
      </nav>
    </div>
  );
};

export default NavBar;
