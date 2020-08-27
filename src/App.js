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
import GetJob from "./features/jobs/GetJob";
import UserApplications from "./features/user/UserApplications";
import EditProfile from "./features/user/EditProfile";

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
            <UserApplications />
          </Layout>
        </Route>
        <Route path="/profile">
          <Layout>
            <EditProfile />
          </Layout>
        </Route>
        <Route path="/jobs/:id" exact>
          <Layout>
            <JobDetails />
          </Layout>
        </Route>
        <Route path="/company/:id/jobs">
          <h1>Hey there!</h1>
        </Route>
        <Route path="/jobs/:id/apply">
          <Layout>
            <GetJob />
          </Layout>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
