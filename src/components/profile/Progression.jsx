import React from 'react'
import "../../css/progression.css";

export default function Progression() {
    return (
        <div className="progression-inner-container">
            <h3 className="textStyling">HTML <i className="fa fa-html5"></i></h3>
            <div className="myProgress">
                <div className="myBarHtml"></div>
            </div>
            <h3 className="textStyling">CSS <i className="fab fa-css3-alt"></i></h3>
            <div className="myProgress">
                <div className="myBarCSS"></div>
            </div>
            <h3 className="textStyling">JS <i className="fab fa-js-square"></i></h3>
            <div className="myProgress">
                <div className="myBarJs"></div>
            </div>
            <h3 className="textStyling">React <i className="fab fa-react"></i></h3>
            <div className="myProgress">
                <div className="myBarReact"></div>
            </div>
        </div>
    )
}