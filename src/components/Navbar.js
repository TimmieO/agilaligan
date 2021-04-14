import React, { Component } from 'react';
import { Route, BrowserRouter as Router, Switch, Link, Redirect } from "react-router-dom";
import "../css/navbar.css"
import logo from '../img/logo.png';

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
                  <img src={logo} className="header-logo"/>
                </Link>
              </li>
              <li className="nav-li">
                <Link to="/">
                  <span className="nav-devs-span">Devs &#8801;</span>
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




