import React from 'react';
import Section from '../components/Section';
import "../css/main.css"

export default function Home() {
    return (
        <div>
          <div className="banner-container">
            <div className="banner-text">
              <h1>AGILA LIGAN</h1>
              <p>Vi kom, Vi såg, Vi programmerade, Error 404,</p>
            </div>
            <a href="#section" className="icon">
            <i className="fa fa-chevron-down"></i>
            </a>
          </div> 
          <Section />
        </div>
    );
  }