import React from 'react'
import Style from '../../css/profiles.module.css'
import PicSofia from "../../img/profile/sofia.jpg";
import Info from "../../components/profile/info"

export default function Sofia() {
    return (
        <div className={Style.backgroundWhite}>
            <div className={Style.container}>
                <img src={PicSofia} className={Style.picture} alt="kl" />
                <div className={Style.text}>
                <h2 className={Style.textStyle}>Sofia Björkman</h2>
                <h4>Stockholm, 123-456 78 sofiamabj@outlook.com</h4>
                <div className={Style.icons}>
                    <div className={Style.iconContainer}>
                        <a href="#" target="_blank">
                            <i className={Style.iconLogo} class="fab fa-instagram fa-3x"></i>
                        </a>
                    </div>
                    <i class="fab fa-linkedin fa-3x"></i>
                    <i class="fas fa-phone fa-3x"></i>
                    <i class="fas fa-envelope fa-3x"></i>
                    
                    {/* <a href="https://www.instagram.com/allexander_753/" target="_blank" className="aStyle">
                        <i class="fab fa-instagram"></i>
                    </a> */}
                </div>
                </div>
                
            </div>
            <hr className={Style.hrStyle}/>
            <Info />
        </div>
    )
}
