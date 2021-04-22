import React from 'react'
import Style from '../../css/profiles.module.css'
import PicOssian from "../../img/profile/ossian.jpg";
import Pic from "../../img/portfolio.jpg";
import "../../css/info.css";
import "../../css/progression.css";
import Stylish from '../../css/progression/progressionOssian.module.css'
import { motion } from 'framer-motion'

export default function Ossian() {
    return ( 
        <div className={Style.backgroundWhite}>
            <div className={Style.container}>
                <div className={Style.avatarContainer}>
                <motion.div
                    drag
                    initial={{ scale: 0 }} animate={{ scale: 1,  rotate: 10100}}
                    transition={{
                        type: "spring",
                        stiffness: 5,
                        damping: 20,
                        delay: 0.2,
                        
                    }}>
                    <img src={PicOssian} className={Style.picture} alt="kl" />
                    </motion.div>
                </div>
                
                <div className={Style.text}>
                <h2 className={Style.textStyle}>Ossian Fredblad</h2>
                <h4 className={Style.textMail}>Stockholm · 070-306 99 23 · unithraclya@hotmail.se</h4>
                <div className={Style.icons}>
                    <motion.div
                    initial={{ scale: 0 }} animate={{ scale: 1 }}
                    transition={{
                        type: "spring",
                        stiffness: 80,
                        damping: 20,
                    }}>
                        <a className={Style.iconContainer} href="https://bonusgang.com/" target="_blank" rel="noreferrer">
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
                        <a className={Style.iconContainer} href="https://bonusgang.com/" target="_blank" rel="noreferrer">
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
                        <a className={Style.iconContainer} href="https://bonusgang.com/" target="_blank" rel="noreferrer">
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
                        <a className={Style.iconContainer} href="https://bonusgang.com/" target="_blank" rel="noreferrer">
                            <i  className="fab fa-instagram fa-2x"></i>
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
                        <p>Hardcore-nerd</p>
                    </div> 
                    <div className="info-text-container">
                        <h2>PAST EXPERIENCE</h2>
                        <p>Noob</p>
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
