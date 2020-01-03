import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Login from "./components/Login";
import LandingPage from "./components/LandingPage";
import SignUp from "./components/Signup";
import Dashboard from "./components/Dashboard";
import PrivateRoute from "./components/PrivateRoute";

import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  return (
    <Router>
      <Layout isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}>
        <Route exact path="/" component={LandingPage} />
        <Route
          path="/login"
          render={props => <Login {...props} setIsLoggedIn={setIsLoggedIn} />}
        />
        <Route path="/register" component={SignUp} />
        <PrivateRoute path="/profile" component={Dashboard} />
      </Layout>
    </Router>
  );
}

export default App;
