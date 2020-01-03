import React from "react";
import Button from "react-bootstrap/Button";
import AddWorkout from "./AddWorkout";
import { NavLink } from "react-router-dom";
import Logo from "./Logo.js";

const UserNavBar = ({ logOut }) => {
  return (
    <nav
      style={{
        padding: "15px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        margin: "0 auto"
      }}
    >
      <NavLink to="/" style={{ textDecoration: "none" }}>
        <h3
          style={{
            margin: "0",
            display: "flex",
            alignItems: "center",
            color: "#A33A18",
            fontFamily: "Actor, sans-serif"
          }}
        >
          <Logo /> pumpodoro
        </h3>
      </NavLink>
      <div>
        <Button
          style={{ background: "none", border: "none", color: "#9F9F9F" }}
        >
          Start a Timer
        </Button>
        <Button
          href="/profile"
          style={{ background: "none", border: "none", color: "#9F9F9F" }}
        >
          Go to Dashboard
        </Button>
        <Button
          onClick={logOut}
          style={{ background: "none", border: "none", color: "gray" }}
        >
          Logout
        </Button>
      </div>
    </nav>
  );
};

export default UserNavBar;
