import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Login from "./components/Login";
import LandingPage from "./components/LandingPage";
import SignUp from "./components/SignUp";
import Dashboard from "./components/Dashboard";
import AddWorkout from "./components/AddWorkout";
import PrivateRoute from "./components/PrivateRoute";

import "./App.css";

function App() {
  return (
    <Router>
      <Layout>
        <Route exact path="/" component={LandingPage} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={SignUp} />
        <PrivateRoute path="/profile" component={Dashboard} />
        <PrivateRoute path="/add-workout" component={AddWorkout} />
      </Layout>
    </Router>
  );
}

export default App;
