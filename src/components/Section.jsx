import React from 'react'
import PicAlex from "../img/profile/alexander.jpg";
import PicOssian from "../img/profile/ossian.jpg";
import PicKevin from "../img/profile/kevin.jpg";
import PicSofia from "../img/profile/sofia.jpg";
import PicTimmie from "../img/profile/timmie.jpg";
import { Link } from "react-router-dom";

export default function Section() {
    return (
        <section id="section">
            <h2>Vårat Team!</h2>
            <hr />
            <div className="cardProfile">
                <img src={PicAlex} alt="Profile pic"/>
                <div className="cardText">
                    <h3>Alexander Gustafsson</h3>
                    <p>Jag jobbar för att bli en Frontend-utvecklare p.g.a mitt intresse i både programmering och design av alla dess slag. 
                        I nuläget skapar jag en hemsida för ett företag innan jag går vidare med en yrkeshögskoleutbildning i Frontend-utveckling. 
                        Jag är även högst intresserad i fotografi privat och för att ge mina hemsidor extra personlighet.
                    </p>
                    <div className="icons">
                        <i className="fa fa-html5 fa-5x"></i>
                        <i className="fab fa-css3-alt fa-5x"></i>
                        <i className="fab fa-js-square fa-5x"></i>
                        <i className="fab fa-react fa-5x"></i>
                        <i className="fab fa-java fa-5x"></i>
                        <p><strong>C#</strong></p>
                    </div>
                    <div className="centerButton"><Link to="/Alexander" className="readMore">Läs mer!</Link></div>
                </div>
            </div>

            <div className="cardProfileReverted">
                <div className="cardTextReverted">
                    <h3>Sofia Björkman</h3>
                    <p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum 
                    lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum 
                    </p>
                    <div className="iconsReverted">
                        <i className="fa fa-html5 fa-5x"></i>
                        <i className="fab fa-css3-alt fa-5x"></i>
                        <i className="fab fa-js-square fa-5x"></i>
                        <i className="fab fa-react fa-5x"></i>
                    </div>
                    <div className="centerButton"><Link to="/Sofia" className="readMore">Läs mer!</Link></div>
                </div>
                <img src={PicSofia} alt="Profile pic"/>
            </div>

            <div className="cardProfile">
                <img src={PicOssian} alt="Profile pic"/>
                <div className="cardText">
                    <h3>Ossian Fredblad</h3>
                    <p> Hardcore-nörd som gillar fötter, gillar att markera mitt missnöje men 
                        har även en mjuk sida. Pilla mig i naveln så är jag din. Jag är chef och du är ingenting.
                    </p>
                    <div className="icons">
                        <i className="fa fa-html5 fa-5x"></i>
                        <i className="fab fa-css3-alt fa-5x"></i>
                        <i className="fab fa-js-square fa-5x"></i>
                        <i className="fab fa-react fa-5x"></i>
                    </div>
                    <div className="centerButton"><Link to="/Ossian" className="readMore">Läs mer!</Link></div>
                </div>
            </div>

            <div className="cardProfileReverted">
                <div className="cardTextReverted">
                    <h3>Kevin Angleborn</h3>
                    <p>
        
                    I denna utbildning får jag specialiserade kunskaper inom ostronslurpning av karismatisk karaktär men också överblick över angränsande 
                    områden som projektledning, testning, backendutvidgning med AN/US. Jag kommer att få erfarenhet utav att arbeta med att planera, utföra samt 
                    identifiera resurser för att kunna utveckla säkra webbapplikationer med interaktivitet och responsivt innehåll.

                    {/* Efter utbildningen är målet att jag självständigt ska kunna ansvara för frontendutvecklingen i ett webbprojekt 
                    med särskilt fokus på säkerhetsaspekter och vara delaktig i kvalitetssäkring av webbutvecklingsarbetet genom att övervaka och följa upp att projektet 
                    levererar det som definierats enligt kravspecifikation, samt vid behov kommunicera problem och ge förslag på lösningar. */}
                    </p>
                    <div className="iconsReverted">
                        <i className="fa fa-html5 fa-5x"></i>
                        <i className="fab fa-css3-alt fa-5x"></i>
                        <i className="fab fa-js-square fa-5x"></i>
                        <i className="fab fa-react fa-5x"></i>
                    </div>
                    <div className="centerButton"><Link to="/Kevin" className="readMore">Läs mer!</Link></div>
                </div>
                <img src={PicKevin} alt="Profile pic"/>
            </div>

            <div className="cardProfile">
                <img src={PicTimmie} alt="Profile pic"/>
                <div className="cardText">
                    <h3>Timmie</h3>
                    <p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum 
                    lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum 
                    </p>
                    <div className="icons">
                        <i className="fa fa-html5 fa-5x"></i>
                        <i className="fab fa-css3-alt fa-5x"></i>
                        <i className="fab fa-js-square fa-5x"></i>
                        <i className="fab fa-react fa-5x"></i>
                        <i className="fab fa-python fa-5x"></i>
                        <p><strong>C#</strong></p>
                    </div>
                    <div className="centerButton"><Link to="/Timmie" className="readMore">Läs mer!</Link></div>
                </div>
            </div>
        </section>
    );
}
