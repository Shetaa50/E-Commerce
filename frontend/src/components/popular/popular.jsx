import React from "react";
import './popular.css'
import Item  from "../item/Item";
import { useState } from "react";
import { useEffect } from "react";
const Popular = ()=>{

    const[popular,setPopular]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:4000/popular')
        .then((response) => response.json())
        .then((data)=>setPopular(data))
    },[])


    return(
        <div className="popular">
            <h1>Popular in women </h1>
            <hr />
            <div className="popular-item">
                {popular.map((item,i)=>{
                    return<Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
                })}
            </div>
        </div>
    )
}
export default Popular