import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Landing from "./components/Landing";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Landing />
        </Route>
        <Route path="/signin">
          <h1>Login</h1>
        </Route>
        <Route path="/signup">
          <h1>Sign up</h1>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
