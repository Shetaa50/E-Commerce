import React ,{useContext} from "react";  
import './CartItems.css'
import { ShopContext } from "../../context/ShopContext";
import remove_icon from '../assets/cart_cross_icon.png'

const CartItems = ()=>{
    const{cartItems,all_product,removefromCart,getTotalCartAmount}=useContext(ShopContext)
return(
    <div className="cart_items">
        <div className="cart_items-main">
            <p>products</p>
            <p>title</p>
            <p>price</p>
            <p>quantity</p>
            <p>Total</p>
            <p>remove</p>
        </div>
        <hr />
        {all_product.map((e)=>{
            if(cartItems[e.id]>0)
            {
                return  <div>
                        <div className="cartitem-format cart_items-main">
                            <img src={e.image} alt="" className="cart-producticon" />
                            <p>{e.name}</p>
                            <p>${e.new_price}</p>
                            <button className="cartitem-quantity">{cartItems[e.id]}</button>
                            <p>${e.new_price*cartItems[e.id]}</p>
                            <img  src={remove_icon} onClick={()=>{removefromCart(e.id)}} className="cart-cross-icon" alt="" />
                            </div>
                        </div>
            }
            return null;
        })}
        <div className="cartitems-down">
            <div className="cartitems-total">
                <h1>Total</h1>
                <div>
                    <div className="cartitems-total-item">
                        <p>subtotal</p>
                        <p>${getTotalCartAmount()}</p>
                    </div>
                    <hr />
                    <div className="cartitems-total-item">
                        <p>Shipping free</p>
                        <p>Free</p>
                    </div>
                    <hr />
                    <div className="cartitems-total-item">
                        <h3>Total</h3>
                        <h3>${getTotalCartAmount()}</h3>

                       

                    </div>
                </div>
                <button> proceed to checkout!</button>
             
            </div>
            <div className="cartitems-promocode">
                <p>if you have a promo code,enter here</p>
                <div className="promobox">
                    <input type="text" placeholder="promo code" />
                    <button>Submit</button>
                </div>
            </div>
        </div>
    </div>
)
} 
export default CartItems