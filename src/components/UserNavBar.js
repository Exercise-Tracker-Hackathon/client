import React from "react";
import Button from "react-bootstrap/Button";
import { NavLink } from "react-router-dom";
import Timer from "./Timer";
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

      <div
        style={{
          display: "flex",
          flex: 2,
          justifyContent: "space-around",
          alignItems: "center"
        }}
      >
        <Timer />
      </div>

      <div>
        <Button
          href="/profile"
          style={{ background: "none", border: "none", color: "#9F9F9F" }}
        >
          Go to Dashboard
        </Button>
        <Button
          onClick={logOut}
          style={{ background: "none", border: "none", color: "#9F9F9F" }}
        >
          Logout
        </Button>
      </div>
    </nav>
  );
};

export default UserNavBar;
