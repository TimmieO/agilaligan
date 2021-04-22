import React from 'react'
import { motion } from 'framer-motion'

function Banner() {
    
    return (
        <div className="banner-container">
            <div className="banner-text">
              <h1>AGILA LIGAN</h1>
              <p>Vi kom, Vi såg, Vi kodade... Error 404</p>
            </div>
            <motion.div 
                initial={{ scale: 0, y: 100 }} animate={{ scale: 1, y: 0}}
                transition={{
                    type: "spring",
                    stiffness: 80,
                    damping: 20,
                    delay: 0.6,
                    staggerDirection: -1 }}>
                <a href="#section" className="icon">
                    <i className="fa fa-chevron-down"></i>
                </a>
            </motion.div>
        </div> 
    )
}

export default Banner
