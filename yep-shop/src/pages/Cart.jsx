import {Link} from "react-router-dom";
function Cart( {items=[]}){
    var count = 1; 
		
		function increment(count) {
			count++;
           console.log(count);
		}
		
		function decrement(count) {
			count--; 
            console.log(count);
		}
return(
<div className="CartItems">

        <h1> Cart</h1>
        <div className="cartItems">
        {items.map((obj)=>(
          <div className="cartItem">
          <img width={180} height={130}  src={obj.imageUrl} alt=""/>
          <div>
            <p> {obj.title} </p>
            <p>{obj.price}p</p>
          </div>

            <div className="counter">
                <button onclick={increment(count)}> +</button>
                <h2>{count}</h2>
                <button onclick={decrement(count)}> - </button>
            </div>
          <img className="RemoveButton" src="img/delete-btn.svg" alt=""/>
          </div>
        ))}
        </div>


        <div сlassName="cartTotalBlock">
        <ul>
          <li className="liSumm">
            <span>Summ: </span>
            <div className="divSumm"></div>
            <b>600р</b>
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
);
}
export default Cart;