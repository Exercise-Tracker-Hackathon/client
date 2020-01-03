import React from "react";
import LoginForm from "./LoginForm.js";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const Login = props => {
  return (
    <div>
      <h1>Get Pumped!</h1>
      <p>Log in to your Pumpodoro account.</p>
      <Card style={{ padding: "2rem" }}>
        <Card style={{ margin: "2rem", padding: "2rem" }}>
          <LoginForm {...props} />
        </Card>
        <p>Don't have an account yet?</p>
        <Link
          to="/register"
          style={{
            width: "fit-content",
            textDecoration: "none",
            borderRadius: ".25rem",
            display: "inline-block",
            fontWeight: "400",
            textAlign: "center",
            verticalAlign: "middle",
            border: "1px solid #EC6033",
            color: "black",
            padding: ".375rem .75rem",
            fontSize: "1rem",
            lineHeight: "1.5"
          }}
        >
          Sign up for free
        </Link>
      </Card>
    </div>
  );
};

export default Login;
