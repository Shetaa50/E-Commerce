import React, { useState } from "react";
import { Link } from 'react-router-dom';
import'./Navbar.css'
import logo from '../assets/logo.png'
import cart_icon from '../assets/cart_icon.png'
import { ShopContext } from "../../context/ShopContext";
import { useContext } from "react";
import Drop_down from '../assets/drop_down.png'
import { useRef } from "react";

const Navbar = ()=>{
    const [menu,setMenu] = useState("Shop");
    const {getTotalCArtItems}= useContext(ShopContext);
    const menuref = useRef();
    const DropDown_toggle = (e)=>{
        menuref.current.classList.toggle("nav-menu-visible");
        e.target.classList.toggle('open');
    }
    return(
        <div className="nav">
            <div className="nav-logo">
            <img src={logo}alt="" /> 
            <p>E-commerce</p>
           </div>
           <img className="nav-dropdown" onClick={DropDown_toggle}  src={Drop_down} alt="" />
           <ul ref={menuref} className="nav-menu">
            <li onClick={()=>{setMenu("Shop")}}><Link style={{textDecoration:'none'}} to = '/'>Shop</Link>  {menu==='Shop'?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("men")}}><Link style={{textDecoration:'none'}}  to ='/men'> men</Link>{menu==='men'?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("women")}}><Link style={{textDecoration:'none'}}  to ='/women'>women</Link>{menu==='women'?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("kids")}}><Link style={{textDecoration:'none'}}  to ='/kids'>kids</Link>{menu==='kids '?<hr/>:<></>}</li>
           </ul>
            <div className="nav-login-cart">
                {localStorage.getItem('authToken')
                ?<button onClick={()=>{localStorage.removeItem('authToken');window.location.replace('/')}} >Logout</button>:   <Link to ='/login'><button>Login</button></Link> }
            
                <Link to = '/Cart'><img src={cart_icon} alt="" /></Link>
                <div className="nav-cart-count">
                    <p>{getTotalCArtItems()}</p>
                </div>
            </div>
            
        </div>
    )
}
export default Navbar;