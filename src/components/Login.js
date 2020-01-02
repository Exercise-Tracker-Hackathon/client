import React from "react";
import LoginForm from "./LoginForm.js";

const Login = () => {
  return (
    <div>
      <h1>Get Pumped!</h1>
      <p>Log in to your Pumpodoro account.</p>
      <div>
        <div>
          <LoginForm />
        </div>
        <p>Don't have an account yet?</p>
        <button>Sign up for free</button>
      </div>
    </div>
  );
};

export default Login;
