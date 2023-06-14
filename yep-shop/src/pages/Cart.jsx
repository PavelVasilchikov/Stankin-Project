import {Link} from "react-router-dom";

import axios from 'axios';

import { useState, useEffect } from 'react';


function Cart( {onRemoveBuy,items=[]} ){
  const [user, setUser] = useState(null);
  const userId = localStorage.getItem('userId');
  
  const onClickOrder = async () => {
  
    for (let i = 0; i < items.length; i++) {
        const item = items[i];
        await axios.post('https://647b4e51d2e5b6101db11d2d.mockapi.io/orders', item);
        // await  delay(500);
    }
  
    for (let i = 0; i < items.length; i++) {
        const item = items[i];
        await axios.delete('https://localhost:7245/api/Cart/' + item.id);
        // await  delay(500);
    }
    // setCartItems([]);
    window.location.href = '/';
  }
 
    let [newSumm,setNewSumm]=useState(0);
    let [newObj, setNewObj] = useState();
    // let[total,setTotal]=useState({ 
    //  summ:items.reduce((prev,curr)=>{return prev+curr.price*curr.counter},0),
    //  count:items.reduce((prev,curr)=>{return prev+curr.counter},0),
    //  tax: Math.round(items.reduce((prev,curr)=>{return prev+curr.price*curr.counter},0) * 0.05)
    // })



    
    const initialTotal = JSON.parse(localStorage.getItem('total')) || {
  };

  const [total, setTotal] = useState(initialTotal);

  useEffect(() => {
    // Вычисляем новое значение total при изменении items
    const newTotal = {
      summ: items.reduce((prev, curr) => prev + curr.price * curr.counter, 0),
      count: items.reduce((prev, curr) => prev + curr.counter, 0),
      tax: Math.round(items.reduce((prev, curr) => prev + curr.price * curr.counter, 0) * 0.05),
    };
    setTotal(newTotal);

    // Сохраняем значение в localStorage
    localStorage.setItem('total', JSON.stringify(newTotal));
  }, [items]);

  useEffect(() => {
    if (userId) {
    axios.get(`https://647b4e51d2e5b6101db11d2d.mockapi.io/account/${userId}`).then((res) => {
    setUser(res.data);
    }).catch((err) => {
    console.error(err);
    alert('Ошибка получения информации');
    });
    }
    }, []);
    
    if (!user) {
    return (<div>
        <div className="EmptyCart">
          
          
          <div className="mustAutorize">
          <Link to="/autorization" className="links"> <h2>Please login first</h2>
              </Link>
          </div> 
      
         
        </div>
      
        
    </div>   )  
    }



    function incrementCounter({obj}) {
   
     obj.counter+=1;
     newObj=setNewObj( obj.counter)
     const newSumm=items.reduce((prev,curr)=>{return prev+curr.price*curr.counter},0);
     const newCount=items.reduce((prev,curr)=>{return prev+curr.counter},0);
     const newTax = Math.round(newSumm * 0.05);
    setTotal({count:newCount,summ:newSumm,tax:newTax})
     console.log(obj.counter);
     console.log(total)
    }
    function decrementCounter({obj}) 
    {  
      obj.counter = obj.counter > 1 ? obj.counter - 1 : 1; 
      newObj=setNewObj( obj.counter)
      const newSumm=items.reduce((prev,curr)=>{return prev+curr.price*curr.counter},0);
      const newCount=items.reduce((prev,curr)=>{return prev+curr.counter},0);
      const newTax = Math.round(newSumm * 0.05);
      setTotal({count:newCount,summ:newSumm,tax:newTax})
            console.log(obj.counter);
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
         
           
            <p>{obj.price*obj.counter} p</p>
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
           <li className="liSumm">
             <span>Summ: </span>
             <div className="divTax"></div>
             <b> {total.summ}p</b>
           </li>  
           <li className="liSumm">
             <span>Items: </span>
             <div className="divTax"></div>
             <b> {total.count}</b>
           </li> 
           <li className="liSumm"> 
           <span>Tax 5%:</span>
           <div className="divTax"></div>
             <b>{total.tax}</b>
           </li>
          
            <div className="OrderButton">
            <button className="OrderBtn" onClick={onClickOrder} > Confirm Order</button>    
            </div>
         
         </div>

            
          </div>
        
        :
        <div className="EmptyCart">
          
          <div >
          <img width={300} height={200} src="img/empty-cart.svg" alt=""/>
            <p>YOUR CART IS EMPTY</p>

          </div>
          


        </div>
        
        
        
      
      




        }



        


       
        
</div>
);
}
export default Cart;