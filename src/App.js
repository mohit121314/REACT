import React, { Component } from "react";
import Login from "../src/components/Login.js";
import Home from "../src/components/Home";
import State from "../src/components/State";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar.js";

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />

        <Router>
          <Route path="/" exact component={Login} />
          <Route path="/home" exact component={Home} />
          <Route path="/state" exact component={State} />
        </Router>
      </div>
    );
  }
}
