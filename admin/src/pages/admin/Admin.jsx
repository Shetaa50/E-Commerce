import React from "react";
import './Admin.css'
import Sidebar from "../../components/sidebar/Sidebar";
import { Routes, Route } from "react-router-dom";
import Addproducts from "../../components/Addproducts/Addproducts";
import Listproducts from "../../components/Listproducts/Listproducts";
const Admin = () => {
    return (
        <div className="admin">
            <Sidebar/>

            <Routes>
                <Route path='/addproduct' element = {<Addproducts/>}/>
                <Route path='/Listproduct' element = {<Listproducts/>}/>
            </Routes>
        </div>
    );
};
export default Admin;