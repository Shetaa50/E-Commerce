import React from "react";
import './Sidebar.css';
import { Link } from "react-router-dom";
import addproduct from '../../assets/Product_Cart.svg'
import list_product from "../../assets/Product_list_icon.svg"
const Sidebar = () => {

    return (
        <div className="Sidebar">
            <Link to={'/addproduct'} style={{ textDecoration: 'none' }}>
                <div className="Sidebar-item">
                    <img src={addproduct} alt="" />
                    <p>Add Product</p>
                </div>
            </Link>
            
            <Link to={'/Listproduct'} style={{ textDecoration: 'none' }}>
                <div className="Sidebar-item">
                    <img src={list_product} alt="" />
                    <p>List Products</p>
                </div>
            </Link>
        </div>
    )
}
export default Sidebar;