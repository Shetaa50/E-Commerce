import React from "react";
import './Footer.css'
import footer_logo from '../assets/logo_big.png'
import instagram_icon from '../assets/instagram_icon.png'
import whatsapp_icon from '../assets/whatsapp_icon.png'
import pintester_icon from '../assets/pintester_icon.png'

const Footer = ()=>{
    return(
        <div className="footer">  
        <div className="footer-logo">
        <img src={footer_logo} alt="" />
        <p>Shopper</p>
        </div>
        <ul className="footer-links">
            <li>company</li>
            <li>products</li>
            <li>offices</li>
            <li>about</li>
            <li>contact</li>
        </ul>
        <div className="social-footer-icons">
            <div className="footer-icon-container">
                <img src={instagram_icon} alt="" />
            </div>
            <div className="footer-icon-container">
                <img src={pintester_icon} alt="" />
            </div>
            <div className="footer-icon-container">
                <img src={whatsapp_icon} alt="" />
            </div>
        </div>
        <div className="copyright">
            <hr />
            <p>Copyright © 2022 Shopper. All rights reserved.</p>
        </div>
        </div>
    )
}

export default Footer