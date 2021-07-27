import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Button from "react-bootstrap/Button";

import Page from "./components/Page";
import Timer from "./components/Timer";
function App() {
  return (
    <div className="body-style">
      <Page />
    </div>
  );
}

export default App;
