import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div>
      <h2>Pumpodoro Landing Page</h2>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam
        recusandae dicta rem incidunt atque consectetur nisi enim non porro at.
        Saepe necessitatibus temporibus iusto atque accusamus odit inventore
        debitis harum!
      </p>
      <Link to="/login">Login</Link>
      <Link to="/register">Sign Up</Link>
    </div>
  );
};

export default LandingPage;
