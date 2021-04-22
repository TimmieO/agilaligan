import React from 'react'
import Style from '../../css/profiles.module.css'
import PicAlex from "../../img/profile/alexander.jpg";
import Pic from "../../img/portfolio.jpg";
import "../../css/info.css";
import "../../css/progression.css";
import Styles from '../../css/progression/progressionAlex.module.css'
import { motion } from 'framer-motion'

export default function Alexander() {
    return (
        <div className={Style.backgroundWhite}>
            <div className={Style.container}>
                <img src={PicAlex} className={Style.picture} alt="kl" />
                <div className={Style.text}>
                <h2 className={Style.textStyle}>Alexander Gustafsson</h2>
                <h4 className={Style.textMail}>Stockholm · 123-456 78 · alegus753@gmail.com</h4>
                <div className={Style.icons}>
                    <motion.div
                    initial={{ scale: 0 }} animate={{ scale: 1 }}
                    transition={{
                        type: "spring",
                        stiffness: 80,
                        damping: 20,
                    }}>
                        <a className={Style.iconContainer} href="https://www.linkedin.com/in/alexander-gustafsson/" target="_blank" rel="noreferrer">
                            <i className="fab fa-linkedin fa-2x"></i>
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
                        <a className={Style.iconContainer} href="https://www.linkedin.com/in/alexander-gustafsson/"  target="_blank" rel="noreferrer">
                            <i className="fas fa-phone fa-2x"></i>
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
                        <a className={Style.iconContainer} href="https://www.linkedin.com/in/alexander-gustafsson/"  target="_blank" rel="noreferrer">
                            <i className="fas fa-envelope fa-2x"></i>
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
                        <a className={Style.iconContainer} href="https://www.linkedin.com/in/alexander-gustafsson/"  target="_blank" rel="noreferrer">
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
                        <div className="imgOverflow">
                        <a href="https://www.lansparkering.se/" target="_blank"  rel="noreferrer"><img src={Pic} alt="Portfolio Pic" /></a>
                        </div>
                    </div> 
                </div>
                <div className="widthPlaceholder"></div>
                <div className="progression-inner-container">
                        <h3 className="textStyling">HTML <i className="fa fa-html5"></i></h3>
                        <div className="myProgress">
                            <div className={Styles.myBarHtml}></div>
                        </div>
                        <h3 className="textStyling">CSS <i className="fab fa-css3-alt"></i></h3>
                        <div className="myProgress">
                            <div className={Styles.myBarCSS}></div>
                        </div>
                        <h3 className="textStyling">JavaScript <i className="fab fa-js-square"></i></h3>
                        <div className="myProgress">
                            <div className={Styles.myBarJs}></div>
                        </div>
                        <h3 className="textStyling">React <i className="fab fa-react"></i></h3>
                        <div className="myProgress">
                            <div className={Styles.myBarReact}></div>
                        </div>
                        <h3 className="textStyling">Java <i className="fab fa-java"></i></h3>
                        <div className="myProgress">
                            <div className={Styles.myBarJava}></div>
                        </div>
                        <h3 className="textStyling">C-sharp <strong>C#</strong></h3>
                        <div className="myProgress">
                            <div className={Styles.myBarCSharp}></div>
                        </div>
                    </div>
                </div>
            </div>
    )
}
