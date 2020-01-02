import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const Login = props => {
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
      .post(`/auth/login`, credentials)
      .then(res => {
        localStorage.setItem("token", res.data.token);
        props.history.push("/profile");
      })
      .catch(err => {
        console.log(err);
      });
    setCredentials({ email: "", password: "" });
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          onChange={handleChange}
          value={credentials.name}
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
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
