import React, {useEffect} from 'react';
import {Link} from "react-router-dom";
import {doDropdown} from "../functions/dropdown";
import "../css/navbar.css"
import logo from '../img/Logo.png';

export default function Navbar() {
  useEffect(()=> {
    doDropdown();
  })

  return (
    <nav className="header-navbar">
      <Link to="/">
        <div className="nav-logo-container">
         <img src={logo} alt="Logo" className="header-logo"/> 
        </div>
      </Link>
      <div className="header-devs-container">
        <input type="checkbox" className="toggler" />
        
        <span className="nav-devs-span">Devs</span>
        <div className="burger-menu"><div></div></div>
        <div className="navbar-dropdown">
          <div>
            <div>
              <ul>
                <li><a className="dev-link" href="/profile-alex">Alexander</a></li>
                <li><a className="dev-link" href="/profile-sofia">Sofia</a></li>
                <li><a className="dev-link" href="/profile-ossian">Ossian</a></li>
                <li><a className="dev-link" href="/profile-kevin">Kevin</a></li>
                <li><a className="dev-link" href="/profile-timmie">Timmie</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}