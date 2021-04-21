import React from 'react';
import Progression from './Progression'
import "../../css/info.css";

export default function Info() {
  return (
    <div className="info-container">
      <div className="info-inner-container">
        <div className="info-text-container">
            <h2>ABOUT ME</h2>
            <p>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum 
                Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum 
                Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum 
                Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum.</p>
        </div> 
        <div className="info-text-container">
            <h2>PAST EXPERIENCE</h2>
            <p>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum 
                Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum 
                Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum 
                Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum.</p>
        </div> 
        <div className="info-text-container">
            <h2>PORTFOLIO</h2>
            <div>
              
            </div>
        </div> 
      </div>
      <div className="widthPlaceholder"></div>
      <Progression />
    </div>
  );
}