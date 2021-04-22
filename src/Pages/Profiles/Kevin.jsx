import React from 'react'
import Style from '../../css/profiles.module.css'
import PicKevin from "../../img/profile/kevin.jpg";
import Pic from "../../img/portfolio.jpg";
import "../../css/info.css";
import "../../css/progression.css";
import Stylish from '../../css/progression/progressionKevin.module.css'
import { motion } from 'framer-motion'

export default function Kevin() {
    return (
        <div className={Style.backgroundWhite}>
            <div className={Style.container}>
                <img src={PicKevin} className={Style.picture} alt="kl" />
                <div className={Style.text}>
                <h2 className={Style.textStyle}>Kevin Angleborn</h2>
                <h4 className={Style.textMail}>Stockholm · 070-926 76 36 · Kevinangleborn@hotmail.com</h4>
                <div className={Style.icons}>
                    <motion.div
                    initial={{ scale: 0 }} animate={{ scale: 1 }}
                    transition={{
                        type: "spring",
                        stiffness: 80,
                        damping: 20,
                    }}>
                        <a className={Style.iconContainer} href="https://bonusgang.com/"  target="_blank" rel="noreferrer">
                            <i class="fab fa-linkedin fa-2x"></i>
                        </a>
                    </motion.div>
                    <motion.div
                    initial={{ scale: 0 }} animate={{ scale: 1 }}
                    transition={{
                        type: "spring",
                        stiffness: 80,
                        damping: 20,
                        delay: 0.2
                    }}>
                        <a className={Style.iconContainer} href="https://bonusgang.com/"  target="_blank" rel="noreferrer">
                            <i class="fas fa-phone fa-2x"></i>
                        </a>
                    </motion.div>
                    <motion.div 
                    initial={{ scale: 0 }} animate={{ scale: 1 }}
                    transition={{
                        type: "spring",
                        stiffness: 80,
                        damping: 20,
                        delay: 0.4
                    }}>
                        <a className={Style.iconContainer} href="https://bonusgang.com/"  target="_blank" rel="noreferrer">
                            <i class="fas fa-envelope fa-2x"></i>
                        </a>
                    </motion.div>
                    <motion.div 
                    initial={{ scale: 0 }} animate={{ scale: 1 }}
                    transition={{
                        type: "spring",
                        stiffness: 80,
                        damping: 20,
                        delay: 0.6
                    }}>
                        <a className={Style.iconContainer} href="https://bonusgang.com/"  target="_blank" rel="noreferrer">
                            <i className="fab fa-instagram fa-2x"></i>
                        </a>
                    </motion.div>
                </div>
                </div>
            </div>
            <hr className={Style.hrStyle}/>
            <div className="info-container">
                <div className="info-inner-container">
                    <div className="info-text-container">
                        <h2>ABOUT ME</h2>
                        <p>Djurgårdens IF</p>
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
                        <div className="imgOverflow">
                        <a href="https://bonusgang.com/" target="_blank" rel="noreferrer"><img src={Pic} alt="Portfolio Pic" /></a>
                        </div>
                    </div> 
                </div>
                <div className="widthPlaceholder"></div>
                <div className="progression-inner-container">
                        <h3 className="textStyling">HTML <i className="fa fa-html5"></i></h3>
                        <div className="myProgress">
                            <div className={Stylish.myBarHtml}></div>
                        </div>
                        <h3 className="textStyling">CSS <i className="fab fa-css3-alt"></i></h3>
                        <div className="myProgress">
                            <div className={Stylish.myBarCSS}></div>
                        </div>
                        <h3 className="textStyling">JavaScript <i className="fab fa-js-square"></i></h3>
                        <div className="myProgress">
                            <div className={Stylish.myBarJs}></div>
                        </div>
                        <h3 className="textStyling">React <i className="fab fa-react"></i></h3>
                        <div className="myProgress">
                            <div className={Stylish.myBarReact}></div>
                        </div>
                    </div>
                </div>
            </div>
    )
}
