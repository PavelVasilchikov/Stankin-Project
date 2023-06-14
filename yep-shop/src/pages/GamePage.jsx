import React from "react";
import Favorites from "./Favorites";
function GamePage({GameDescription,gameid,title,altprice,imageUrl,price,onClickBuyBtn,onClickFavBtn}){
  const userId=localStorage.getItem("userId");
  const[isAdd,setIsAdd]=React.useState();
const onClickBuy=()=>{
  if (!userId){
    window.location.href="/autorization";
  }else{
  onClickBuyBtn({gameid,title,price,imageUrl});
  }
}




   const onClickFav=()=>{
    if (!userId){
      window.location.href="/autorization";
    }else{
    onClickFavBtn({gameid,title,price,imageUrl})
    }
    // 
    // 
    //   setIsAddFav(!isFav);
    //   onClickFavBtn({gameid,title,price,imageUrl})
    // 
    // 
    //   
    // 
  
    
   }
 

return(
 
<div className="GamePageСontent">
        <h1> {title}</h1>


  <div class="GamePage">
    
   <div className="GameBlock">

   
    <img className="GameImg" width={500} height={400} src={imageUrl} alt="Изображение товара"/>
   
   
     {GameDescription.map((obj)=>( 
            <p className="gameDescription">
            {obj.description}
            </p>
             ))} 
   </div>
   
    <div className="FavBlock">
      <div className="Price" >
      <s>{altprice}p</s>
      <p>{price}p</p>
      </div>
   
    <button className="FavBtn">
    <img className="FavImg" onClick={onClickFav} src="/img/fh.png"alt=""/>   
    {/* src={isFav?"/img/fh.png":"/img/eh.png "} */}
    </button>
  
    <button className="BuyBtn"  onClick={onClickBuy} >Add to cart</button>
  
    </div>

  </div>


</div>
);
}
export default GamePage;