
function DrawerFav({onClose,items=[]}){
    return(
        <div className="overlay">
        <div className="drawer">
        <h2> Favorites <img onClick={onClose} width={40} height={40} className="CloseBtn" src="img/close-btn.svg" alt=""/></h2>
       
        <div className="cartItems">
          {
             items.map((obj)=>( 
            <div className="cartItem">
            <img width={180} height={130}  src={obj.imageUrl} alt=""/>
            <div>
              <p>{obj.title} </p>
              <p>{obj.price}</p>
            </div>
            <img className="RemoveButton" src="img/delete-btn.svg" alt=""/>
          </div>
            ))
          }
         
       
  
      
  
        </div>
        {/* <div сlassName="cartTotalBlock">
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
        </div> */}
        
  
      </div>
     </div>
    );
}
export default DrawerFav;