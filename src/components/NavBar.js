import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "./Logo.js";

const NavBar = () => {
  React.useEffect(() => {
    const id = localStorage.getItem("token");
    console.log(id);
  }, []);

  return (
    <nav
      style={{
        padding: "0 15px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        maxWidth: "1200px",
        margin: "0 auto"
      }}
    >
      <NavLink to="/">
        <h3
          style={{
            margin: "0",
            display: "flex",
            alignItems: "center",
            color: "#A33A18"
          }}
        >
          <Logo /> pumpodoro
        </h3>
      </NavLink>
      <div>
        <NavLink style={{ margin: "0 10px" }} to="/login">
          Login
        </NavLink>
        <NavLink style={{ margin: "0 10px" }} to="/register">
          Register
        </NavLink>
        <NavLink style={{ margin: "0 0 0 10px" }} to="/profile">
          Dashboard
        </NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
