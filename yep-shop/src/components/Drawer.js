function Drawer(){
    return(
        <div className="overlay">
        <div className="drawer">
        <h2> Cart <img  width={40} height={40} className="RemoveButton" src="img/close-btn.svg" alt=""/></h2>
       
        <div className="cartItems">
          
          <div className="cartItem">
          <img width={180} height={130}  src="img/1.png" alt=""/>
          <div>
            <p> Satisfactory </p>
            <p>300p</p>
          </div>
          <img className="RemoveButton" src="img/delete-btn.svg" alt=""/>
        </div>
        <div className="cartItem">
          <img width={180} height={130}  src="img/1.png" alt=""/>
          <div>
            <p> Satisfactory </p>
            <p>300p</p>
          </div>
          <img className="RemoveButton" src="img/delete-btn.svg" alt=""/>
        </div>
  
        <div className="cartItem">
          <img width={180} height={130}  src="img/1.png" alt=""/>
          <div>
            <p> Satisfactory </p>
            <p>300p</p>
          </div>
          <img className="RemoveButton" src="img/delete-btn.svg" alt=""/>
        </div>
  
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
     </div>
    );
}
export default Drawer;