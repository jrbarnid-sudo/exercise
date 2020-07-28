import React from "react";
import logo from "./logo.svg";
import "./App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="container-fluid">
      <nav className="d-flex">
        <a class="navbar-brand" href="/">
          Exercise
        </a>

        <div class="navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto list-group-horizontal">
            <li class="nav-item px-4">
              <a class="nav-link" href="#">
                Defense
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Data
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default App;
