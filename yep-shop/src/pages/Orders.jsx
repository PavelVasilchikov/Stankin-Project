import {Link} from "react-router-dom";

import axios from 'axios';
import React from "react";
import { useState, useEffect } from 'react';


function Orders(){
    const [orders,setOrders]= React.useState([]);
    React.useEffect(() => {
        axios.get('https://647b4e51d2e5b6101db11d2d.mockapi.io/orders').then((res) => {setOrders(res.data);
        });
    }, []);
return(
    
<div className="CartItems">
<h2> <Link to="/profile">Back to profile </Link></h2>
        <h1> Orders</h1>
        {orders.length>0 ?
          <div>
<div className="cartItems">
        {orders.map((obj)=>(
          <div className="cartItem">
          <img width={180} height={130}  src={obj.imageUrl} alt=""/>
          <div>
            <p> {obj.title} </p>
           
            <p>Total Price:{obj.price*obj.counter} p</p>
          </div>

            <div className="counter">

               <h2>Count:{obj.counter}</h2>
            </div>
          </div>
        ))}
        </div>

            
          </div>
        
        :
        <div className="EmptyCart">
          
          <div >
            <p>NO ORDERS</p>

          </div>
          


        </div>
        
        }         
</div>
);
}
export default Orders;