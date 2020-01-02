import React from "react";
import SignupForm from "./SignupForm.js";

const SignUp = () => {
  return (
    <div>
      <h1>Get Pumped!</h1>
      <p>Create your Pumpodoro account.</p>
      <div>
        <div>
          <SignupForm />
        </div>
        <p>Already have an account?</p>
        <button>Log in here</button>
      </div>
    </div>
  );
};

export default SignUp;
