import React from "react";
import { NavLink } from "react-router-dom";
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
        maxWidth: "1200px",
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
      <div>
        <button>Start a Timer</button>
        <button>Add Exercise</button>
        <button onClick={logOut}>Logout</button>
      </div>
    </nav>
  );
};

export default UserNavBar;
