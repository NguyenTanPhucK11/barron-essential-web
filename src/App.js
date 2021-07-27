import React from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Dashboard from "./components/dashboard/Dashboard";
import ProjectDetails from "./components/project/ProjectDetails";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Button from "react-bootstrap/Button";
import "./components/project/CreateProject.js";
import Page from "./components/Page";
import Timer from "./components/Timer";
import { createProject } from "./store/actions/projectActions";
import CreateProject from "./components/project/CreateProject.js";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
function App() {
  return (
    <div className="body-style">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/project/:id" component={ProjectDetails} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />{" "}
          <Route path="/create" component={CreateProject} />
        </Switch>
      </BrowserRouter>
      {/* <CreateProject /> */}
    </div>
  );
}

export default App;
