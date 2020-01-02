import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div>
      <h2>Pumpodoro</h2>
      <Link to="/login">Login</Link>
      <Link to="/register">Sign Up</Link>
    </div>
  );
};

export default LandingPage;
