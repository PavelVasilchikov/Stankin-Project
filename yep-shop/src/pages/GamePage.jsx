import React from "react";
import Favorites from "./Favorites";
function GamePage({GameDescription,Game}){
 

  const[isFav,setIsAddFav]=React.useState(false);
  const onClickFavBtn=()=>{
   
    setIsAddFav(!isFav);
  }
 

return(
 
<div className="GamePageСontent">
        <h1> {Game.title}</h1>


  <div class="GamePage">
   <div className="GameBlock">

   
    <img className="GameImg" width={500} height={400} src={Game.imageUrl} alt="Изображение товара"/>
   
   
     {GameDescription.map((obj)=>( 
            <p className="gameDescription">
            {obj.description}
            </p>
             ))} 
   </div>
   
    <div className="FavBlock">
      <div className="Price" >
      <s>{Game.altprice}p</s>
      <p>{Game.price}p</p>
      </div>
   
    <button className="FavBtn">
    <img className="FavImg" onClick={onClickFavBtn} src={isFav?"/img/fh.png":"/img/eh.png "}alt=""/> 
    </button>
  
    <button className="BuyBtn">Add to cart</button>
  
    </div>

  </div>


</div>
);
}
export default GamePage;