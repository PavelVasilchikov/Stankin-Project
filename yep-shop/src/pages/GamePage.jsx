import React from "react";
import Favorites from "./Favorites";
function GamePage({GameDescription,title,altprice,imageUrl,price,onClickBuyBtn,onClickFavBtn}){
 
  const[isAdd,setIsAdd]=React.useState();
const onClickBuy=()=>{
  onClickBuyBtn({title,price,imageUrl});
}


  const[isFav,setIsAddFav]=React.useState(false);
  const onClickFav=()=>{
    onClickFavBtn({title,price,imageUrl})
    setIsAddFav(!isFav);
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
    <img className="FavImg" onClick={onClickFav} src={isFav?"/img/fh.png":"/img/eh.png "}alt=""/> 
    </button>
  
    <button className="BuyBtn"  onClick={onClickBuy} >Add to cart</button>
  
    </div>

  </div>


</div>
);
}
export default GamePage;