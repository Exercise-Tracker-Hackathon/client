import React from "react";
import Button from "react-bootstrap/Button";
import { NavLink } from "react-router-dom";
import Timer from "./Timer";
import Logo from "./Logo.js";
import "../styles/UserNavBar.css";

const UserNavBar = ({ logOut }) => {
  return (
    <nav className="user-nav-bar">
      <NavLink
        to="/"
        style={{ textDecoration: "none", display: "flex" }}
        className="nav-logo"
      >
        <h3>
          <Logo />
          <span className="text">pumpodoro</span>
        </h3>
      </NavLink>

      <div className="nav-timer">
        <Timer />
      </div>

      <div className="nav-links">
        <Button
          href="/profile"
          style={{ background: "none", border: "none", color: "#9F9F9F" }}
          variant="light"
        >
          Dashboard
        </Button>
        <Button
          onClick={logOut}
          style={{ background: "none", border: "none", color: "#9F9F9F" }}
          variant="light"
        >
          Logout
        </Button>
      </div>
    </nav>
  );
};

export default UserNavBar;
