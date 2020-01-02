import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const Signup = props => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: ""
  });

  const handleChange = e => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    axiosWithAuth()
      .post(`/register`, credentials)
      .then(res => {
        props.history.push("/profile");
      })
      .catch(err => {
        console.log(err);
      });
    setCredentials({ email: "", password: "" });
  };

  return (
    <div>
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input
          onChange={handleChange}
          value={credentials.email}
          type="email"
          name="email"
        />
        <label htmlFor="password">Password</label>
        <input
          onChange={handleChange}
          value={credentials.password}
          type="password"
          name="password"
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
