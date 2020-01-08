import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import UserNavBar from "./UserNavBar";
import Logo from "./Logo.js";
import "../styles/UserNavBar.css";

const NavBar = props => {
  console.log(props.isLoggedIn);
  const logOut = e => {
    localStorage.clear();
    props.setIsLoggedIn(false);
    props.history.push("/");
  };

  if (props.isLoggedIn) {
    return <UserNavBar logOut={logOut} {...props} />;
  } else {
    return (
      <nav className="user-nav-bar">
        <NavLink to="/" style={{ textDecoration: "none" }} className="nav-logo">
          <h3
            style={{
              margin: "0",
              display: "flex",
              alignItems: "center",
              color: "#A33A18",
              fontFamily: "Actor, sans-serif"
            }}
          >
            <Logo />
            <span className="text">pumpodoro</span>
          </h3>
        </NavLink>
        <div className="nav-links">
          <NavLink style={{ margin: "0 10px", color: "#9F9F9F" }} to="/login">
            Login
          </NavLink>
          <NavLink
            style={{ margin: "0 10px", color: "#9F9F9F" }}
            to="/register"
          >
            Register
          </NavLink>
        </div>
      </nav>
    );
  }
};

export default withRouter(NavBar);
