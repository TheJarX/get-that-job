import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Landing from "./components/Landing";
import Navbar from "./components/Navbar";
import SignIn from "./features/auth/SignIn";
import SignUp from "./features/auth/SignUp";
import JobsList from "./features/jobs/JobsList";
import JobDetails from "./features/jobs/JobDetails";
import Layout from "./components/Layout";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Landing />
        </Route>
        <Route path="/signin">
          <SignIn />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/jobs" exact>
          <Layout>
            <JobsList />
          </Layout>
        </Route>
        <Route path="/applications">
          <Layout>
            <h1>applications</h1>
          </Layout>
        </Route>
        <Route path="/profile">
          <Layout>
            <h1>Profile</h1>
          </Layout>
        </Route>
        <Route path="/jobs/:id">
          <Layout>
            <JobDetails />
          </Layout>
        </Route>
        <Route path="/company/:id/jobs">
          <h1>Hey there!</h1>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
