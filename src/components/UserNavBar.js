import React from "react";
import { NavLink } from "react-router-dom";
import Timer from "./Timer";
import Logo from "./Logo.js";

const UserNavBar = ({ logOut }) => {
  return (
    <nav
      style={{
        padding: "0 15px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        maxWidth: "1400px",
        margin: "0 auto"
      }}
    >
      <NavLink to="/profile">
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
      <div
        style={{
          display: "flex",
          flex: 2,
          justifyContent: "space-around",
          alignItems: "center"
        }}
      >
        <Timer />
        <button onClick={logOut}>Logout</button>
      </div>
    </nav>
  );
};

export default UserNavBar;
