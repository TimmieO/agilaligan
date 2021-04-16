import React from 'react'
import Pic from "../img/profile/alexander.jpg";

export default function Section() {
    return (
        <section id="section">
            <h2>Vårat Team!</h2>
            <hr />
            <div className="cardProfile">
                <img src={Pic} alt="Profile pic"/>
                <div className="cardText">
                    <h3>Alexander Gustafsson</h3>
                    <p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum 
                    lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum 
                    </p>
                    <div className="icons">
                        <i className="fa fa-html5 fa-5x"></i>
                        <i className="fab fa-css3-alt fa-5x"></i>
                        <i className="fab fa-js-square fa-5x"></i>
                        <i className="fab fa-react fa-5x"></i>
                        <i className="fab fa-java fa-5x"></i>
                    </div>
                </div>
            </div>
        </section>
    );
}
