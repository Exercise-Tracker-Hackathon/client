import React from "react";
import LoginForm from "./LoginForm.js";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const Login = props => {
  return (
    <div
      style={{
        background: "#FFEBE4",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "30px 0 50px 0"
      }}
    >
      <h1
        style={{
          color: "#A33A18",
          fontSize: "48px",
          fontFamily: "Actor, sans-serif"
        }}
      >
        Get pumped
      </h1>
      <p style={{ color: "#A33A18" }}>Log in to your Pumpodoro account.</p>
      <Card
        style={{
          padding: "2rem",
          minWidth: "480px",
          maxWidth: "600px",
          width: "80%",
          margin: "20px auto"
        }}
      >
        <Card style={{ margin: "2rem", padding: "2rem" }}>
          <LoginForm {...props} />
        </Card>
        <p style={{ margin: "10px auto" }}>Don't have an account yet?</p>
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
            lineHeight: "1.5",
            margin: "0 auto"
          }}
        >
          Sign up for free
        </Link>
      </Card>
    </div>
  );
};

export default Login;
