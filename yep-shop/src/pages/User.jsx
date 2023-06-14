import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


function User({favItems,cartItems}) {
const [user, setUser] = useState(null);
const userId = localStorage.getItem('userId');


useEffect(() => {
if (userId) {
axios.get(`https://localhost:7245/User/${userId}`).then((res) => {
setUser(res.data);
}).catch((err) => {
console.error(err);
alert('Ошибка получения информации');
});
}
}, []);

if (!user) {
return (
    <div>
        <div className="EmptyCart">
          
          
          <div className="mustAutorize">
          <Link to="/autorization" className="links"> <h2>Please login first</h2>
              </Link>
          </div> 
      
         
        </div>
      
        
    </div>
   
)  
}

const Exit =  () => {

      for (let i = 1; i < cartItems.length; i++) {
     
    const item = cartItems[i];
     console.log (item)
     console.log(item.id)

     axios.delete(`https://localhost:7245/api/Cart/${item.id}`);
     }
    for (let i = 0; i < favItems.length; i++) {
    const item = favItems[i];
     axios.delete('https://localhost:7245/Favorites/' + item.id);
    }
    // for (let i = 0; i < orders.length; i++) {
    // const item = orders[i];
    // await axios.delete('https://localhost:7045/UserOrders/' + item.id);
    // }
    localStorage.removeItem('userId'); // Удаляем id пользователя из LocalStorage
    localStorage.removeItem('userLogin'); // Удаляем логин пользователя из LocalStorage
    window.location.href = '/autorization';
    };

return (

<div className="">


<div className="userdata">

<div>
<span>Login:</span>
<b>{user.login} </b>
</div>
<div>
<span>Name:</span>
<b>{user.name} </b>
</div>
<div>
<span>E-mail:</span>
<b>{user.email} </b>
</div>


</div>

<button onClick={Exit} className="ExitButton">Exit</button>


</div>
);
}

export default User;