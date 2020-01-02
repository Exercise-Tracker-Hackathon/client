import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Login from "./components/Login";
import LandingPage from "./components/LandingPage";
import Signup from "./components/Signup";
import Dashboard from "./components/Dashboard";
import PrivateRoute from "./components/PrivateRoute";

import "./App.css";

function App() {
  return (
    <Router>
      <Layout>
        <Route exact path="/" component={LandingPage} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Signup} />
        <PrivateRoute exact path="/profile" component={Dashboard} />
      </Layout>
    </Router>
  );
}

export default App;
