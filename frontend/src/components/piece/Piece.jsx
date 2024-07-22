import React from "react";
import './Piece.css';
import arrow_icon from '../assets/breadcrum_arrow.png'

const Piece = (props) => {
    const {product}=props;

    return (
        <div className="piece"> 
        Home    <img src={arrow_icon} alt="" /> Shop <img src={arrow_icon} alt="" /> {product.category}<img src={arrow_icon} alt="" /> {product.name}

        </div>
    )
}
export default Piece