import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

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
      .post(`/auth/register`, credentials)
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
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            onChange={handleChange}
            value={credentials.email}
            type="email"
            placeholder="Enter email"
            name="email"
          />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onChange={handleChange}
            value={credentials.password}
            type="password"
            placeholder="Create a password"
            name="password"
          />
          <Button varient="primary" type="submit">
            Sign Up
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
};

export default Signup;
