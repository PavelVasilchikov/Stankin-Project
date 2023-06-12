import {Link} from "react-router-dom";
import React, { useState } from 'react';
function Cart( {onRemoveBuy,items=[]} ){
  
    let [newSumm,setNewSumm]=useState(0);
    let [newObj, setNewObj] = useState();
    function incrementCounter({obj}) {
     obj.counter+=1;
     newObj=setNewObj( obj.counter)

     console.log(obj.counter);
    }
    function decrementCounter({obj}) 
    {  
      obj.counter = obj.counter > 1 ? obj.counter - 1 : 1; 
      newObj=setNewObj( obj.counter)
      console.log(obj.counter);
    }
     function cartSummary({obj})
     {
      newSumm=setNewSumm(newSumm+obj.price*obj.counter);
     }

return(
    
<div className="CartItems">

        <h1> Cart</h1>
        {items.length>0 ?
          <div>
<div className="cartItems">
        {items.map((obj)=>(
          <div className="cartItem">
          <img width={180} height={130}  src={obj.imageUrl} alt=""/>
          <div>
            <p> {obj.title} </p>
            <p>{obj.price*obj.counter}p</p>
          </div>

            <div className="counter">
                <button   onClick={() => incrementCounter({obj})}> +</button>
               <h2>{obj.counter}</h2>
                <button onClick={() => decrementCounter({obj})}> - </button>
            </div>

          <img onClick={()=>onRemoveBuy(obj.id)} className="RemoveButton" src="img/delete-btn.svg" alt=""/>
          </div>
        ))}
        </div>
         <div сlassName="cartTotalBlock">
         <ul>
           <li className="liSumm">


       

             <span>Summ: </span>
             <div className="divSumm"></div>
             <b></b>
           </li>  
           <li className="liTax"> 
           <span>tax 5%:</span>
             <div className="divTax"></div>
             <b>50р</b>
           </li>
           <button className="OrderBtn"> Confirm Order</button>
         </ul>
         </div>

            
          </div>
        
        :
        <div>
            <p>YOUR CART IS EMPTY</p>


        </div>
        
        
        
      
      




        }



        


       
        
</div>
);
}
export default Cart;