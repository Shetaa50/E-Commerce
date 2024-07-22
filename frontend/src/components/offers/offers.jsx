import React from "react";
import './offers.css'
import exclusive_image from '../assets/exclusive_image.png'
const Offers =()=>{
    return (
        <div className="offers">
            <div className="offers-left">
                <h1>Execlusives</h1>
                <h1>offers for you </h1>
                <p>only on bestsellers products</p>
                <button>Check now!</button>

            </div>
            <div className="offers-right">
                <img src={exclusive_image} alt="" />
            </div>
        </div>
    )
}
export default Offers