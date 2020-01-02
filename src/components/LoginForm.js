import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const LoginForm = props => {
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
      </Form.Group>
      <Button style={{ width: "100%" }} type="submit">
        Login
      </Button>
    </Form>
  );
};

export default LoginForm;
