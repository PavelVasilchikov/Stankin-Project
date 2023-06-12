import Card from '../components/Card';
function Favorites({onRemoveFav,items=[]}){
return(
<div className="content">
        <h1> Favorite List</h1>
        <div className="CartItems">

{items.length>0 ?
  <div>
<div className="cartItems">
{items.map((obj)=>(
  <div className="cartItem">
  <img width={180} height={130}  src={obj.imageUrl} alt=""/>
  <div>
    <p> {obj.title} </p>
    <p>{obj.price}p</p>
  </div>
  <img onClick={()=>onRemoveFav(obj.id)} className="RemoveButton" src="img/delete-btn.svg" alt=""/>
  </div>
))}
</div>
 
  </div>

:
<div>
    <p>YOUR FAVORITES IS EMPTY</p>
</div>
}

</div>

</div>
);
}
export default Favorites;