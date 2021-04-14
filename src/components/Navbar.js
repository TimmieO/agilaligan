import React from 'react';
import {Link} from "react-router-dom";
import "../css/navbar.css"
import logo from '../img/Logo.png';

export default function Navbar() {
  return (
    <nav className="header-navbar">
      <ul className="header-ul">
        <li className="nav-li">
          <Link to="/">
            <img src={logo} className="header-logo"/>
          </Link>
        </li>
        <li className="nav-li">
            <span className="nav-devs-span">Devs &#8801;</span>
        </li>
      </ul>
    </nav>
  );
}