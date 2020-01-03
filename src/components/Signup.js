import React from "react";
import SignupForm from "./SignupForm.js";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const SignUp = props => {
  return (
    <div>
      <h1>Get Pumped!!</h1>
      <p>Create your Pumpodoro account.</p>
      <Card style={{ padding: "2rem" }}>
        <Card style={{ margin: "2rem", padding: "2rem" }}>
          <SignupForm {...props} />
        </Card>
        <p>Already have an account?</p>
        <Link
          to="/login"
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
          Log in here
        </Link>
      </Card>
    </div>
  );
};

export default SignUp;
