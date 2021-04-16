import React from 'react';
import Section from '../components/Section';
import "../css/main.css"

export default function Home() {
    return (
        <div>
          <div className="banner">

          </div>
          <div className="banner-container">
            <div className="banner-text">
              <h1>AGILA LIGAN</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>

            <a href="#section" className="icon">
            <i class="fa fa-chevron-down"></i>
            </a>
          </div> 
          <Section />
        </div>

    );
  }