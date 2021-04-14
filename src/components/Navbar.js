import React, { Component } from 'react';
import { Route, BrowserRouter as Router, Switch, Link, Redirect } from "react-router-dom";
import "../css/navbar.css"

class Navbar extends Component {

  constructor() {
    super();
    this.state = {
    }
  }
  componentDidMount(){
  }

  render() {
    return (
      <Router>
        <header>
          <nav className="header-navbar">
            <ul className="header-ul">
              <li className="nav-li">
                <Link to="/">
                  <span className="nav-li-icon">ICON</span>
                </Link>
              </li>
              <li className="nav-li">
                <Link to="/">
                  <span className="nav-li-devs">Devs &#8801;</span>
                </Link>
              </li>
            </ul>
          </nav>
        </header>
      </Router>
    );
  }
}

export default Navbar




