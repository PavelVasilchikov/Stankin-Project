import Card from '../components/Card';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
function Favorites({onRemoveFav,items=[]}){

  const [user, setUser] = useState(null);
  const userId = localStorage.getItem('userId');
  
  
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
  
    
</div>  )  
  }
  
return(
  
<div className="CartItems">
        <h1> Favorite List</h1>
{items.length>0 ?
  <div>
<div className="cartItems">
{items.map((obj)=>(
  <div className="favItem">
  <img width={180} height={130}  src={obj.imageUrl} alt=""/>
  <div>
    <p> {obj.title} </p>
    <p>{obj.price}p</p>
  </div>
  <img onClick={()=>onRemoveFav(obj.id)} className="RemoveFavButton" src="img/delete-btn.svg" alt=""/>
  </div>
))}


</div>

</div>

:
<div className="EmptyFav">
    <p>YOUR FAVORITES IS EMPTY</p>
</div>
}
</div>
);
}
export default Favorites;