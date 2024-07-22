import React from "react";
import './Addproducts.css'
import Upload from '../../assets/upload_area.svg'
import { useState } from "react";


const Addproducts = () => {
    const [image,setImage]=useState(false);
    const[productDetails,setProductDetails]=useState({
        name:'',
        new_price:'',
        old_price:'',
        category:'women',
        image:'',
    });
    const imageHandler=(e)=>{
        setImage(e.target.files[0]);
    }
    const changeHandler=(e)=>{
      setProductDetails({...productDetails,[e.target.name]:e.target.value})
    }
    const addProduct =async()=>{
        let responseData;
        let product = productDetails;
        let formdata = new FormData();
        formdata.append("product",image)
        await fetch('http://localhost:4000/upload',{
            method:'POST',
            headers:{
                Accept:"application/json",
            },
            body:formdata,
        }).then((resp)=>resp.json()).then((data)=>{responseData=data});
        if(responseData.success){
            product.image = responseData.image_url;
            console.log(product);
            await fetch('http://localhost:4000/addproduct',{
                method:'POST',
                headers:{
                    Accept:"application/json",
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(product)
            }).then((resp)=>resp.json()).then((data)=>{
                data.success?alert("product added"):alert("product not added");
            })
        }
    }
        
    return (
        <div className="addproducts">
            <div className="addproducts-itemfield">
                <p>Product title</p>
                <input value={productDetails.name} onChange={changeHandler} type="text" name="name" placeholder="type here" />
            </div>
            <div className="addproduct-price">
            <div className="addproducts-itemfield">
                <p> Product price</p>
                <input value={productDetails.old_price} onChange={changeHandler} type="text" name="old_price" placeholder="type here" />
            </div>
            <div className="addproducts-itemfield">
                <p>Offer price</p>
                <input value={productDetails.new_price} onChange={changeHandler} type="text" name="new_price" placeholder="type here" />
            </div>
            </div>
            <div className="addproducts-itemfield">
                <p>Product category</p>
                <select value={productDetails.category} onChange={changeHandler} name="category" className="addproducts-selector" >
                    <option value="women">Women</option>
                    <option value="men">Men</option>
                    <option value="kid">Kid</option>
                </select>
            </div>
            <div className="addproducts-itemfield">
                <p>Product image</p>
                <label htmlFor="file input">
                    <img src={image?URL.createObjectURL(image):Upload}  className="addproduct-thunbnailimage" alt="" />
                </label>
                <input onChange={imageHandler} type="file" name="image" id="file input" hidden />
            </div>
            <button onClick={()=>{addProduct()}} className="addproducts-button">
                Add product
            </button>
        </div>
    )
}
export default Addproducts;