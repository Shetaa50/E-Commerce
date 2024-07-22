import React, { useEffect } from "react";
import './Listproducts.css'
import delete_icon from '../../assets/cross_icon.png'
import { useState } from "react";
const Listproducts = () => {
    const [allproducts,setAllproducts] = useState([])
    const fetchinfo = async()=>{
        await fetch('http://localhost:4000/allproducts')
        .then((resp)=>resp.json())
        .then((data)=>{setAllproducts(data)}) ;
    }
    useEffect(()=>{
        fetchinfo();
    },[])

    const removeproduct = async(id)=>{
        await fetch('http://localhost:4000/removeproduct',{
            method:'POST',
            headers:{
                Accept:"application/json",
                "Content-Type":"application/json"
            },
            body:JSON.stringify({id:id})
        })
       await fetchinfo();
    }
    return (
        <div className="listproducts">
            <h1>All products</h1>
            <div className="listproducts-format-main">
                <p>products</p>
                <p>title</p>
                <p>old price</p>
                <p>new price</p>
                <p>category</p>
                <p>remove</p>
            </div>
            <div className="listproduct-allproducts">
                <hr />
                {allproducts.map((product,index)=>{
                    return <><div key={index} className="listproducts-format-main listproduct-format">
                            <img src={product.image} alt="" className="listproduct-producticon" />
                            <p>{product.name}</p>
                            <p>${product.old_price}</p>
                            <p>${product.new_price}</p>
                            <p>{product.category}</p>
                            <img onClick={()=>{removeproduct(product.id)}} src={delete_icon} className="listproduct-delete" alt="" />
                             </div>
                             <hr />
                             </>
                })}
            </div>
        </div>
    );
};
export default Listproducts;