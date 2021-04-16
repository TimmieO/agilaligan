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
         <img src={logo} className="header-logo"/> 
        </div>
      </Link>
      <div className="header-devs-container">
        <input type="checkbox" className="toggler" />
        
        <span className="nav-devs-span">Devs</span>
        <div class="burger-menu"><div></div></div>
        <div class="navbar-dropdown">
          <div>
            <div>
              <ul>
                <li><a href="#">Alexander</a></li>
                <li><a href="#">Ossian</a></li>
                <li><a href="#">Sofia</a></li>
                <li><a href="#">Kevin</a></li>
                <li><a href="#">Timmie</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}