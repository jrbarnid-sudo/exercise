import React from "react";
import "./App.css";
import Defense from "./Defense";
import Data from "./Data";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="container-fluid">
        <nav className="d-flex">
          <a className="navbar-brand" href="/">
            Exercise
          </a>

          <div className="d-flex navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto list-group-horizontal">
              <li className="nav-item px-4">
                <Link to="/defense">Defense</Link>
              </li>
              <li className="nav-item">
                <Link to="/data">Data</Link>
              </li>
            </ul>
          </div>
        </nav>
        <div className="container text-center">
          <div>Welcome!</div>
          <div>Select Defense or Data to see the results</div>
        </div>

        <Switch>
          <Route path="/defense">
            <Defense />
          </Route>
          <Route path="/data">
            <Data />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
