import React from "react";
import './Rounder.css'
import hand_icon from '../assets/hand_icon.png'
import arrow_icon from '../assets/arrow.png'
import Rounder_icon from '../assets/hero_image.png'
const Rounder =() =>{
    return (
        <div className="Rounder">
            <div className="rounder-left">
                <h2>new arrivals only </h2>
                <div>
                    <div className="hand-hand-icon">
                        <p>new</p>
                        <img src={hand_icon} alt="" />
                    </div>
                    <p>collections</p>
                    <p>for everyone </p>

                </div>
                <div className="Rounder-latest-button">
                    <div>latest colection</div>
                    <img src={arrow_icon} alt="" />
                </div>
            </div>
            <div className="rounder-right">
                <img src={Rounder_icon} alt="" />
            </div>
        </div>
    )
}
export default Rounder