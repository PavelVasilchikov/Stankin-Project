import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


function User({favItems=[10],cartItems=[10]}) {
const [user, setUser] = useState(null);
const userId = localStorage.getItem('userId');
const [orders,setOrders]= React.useState([]);
React.useEffect(() => {
    axios.get('https://localhost:7245/api/Orders').then((res) => {setOrders(res.data);
    });
}, []);


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

const Exit = async () => {
    for (let i = 0; i < cartItems.length; i++) {
    const item = cartItems[i];
    await axios.delete('https://localhost:7245/api/Cart/' + item.id);
    }
    for (let i = 0; i < favItems.length; i++) {
    const item = favItems[i];
    await axios.delete('https://localhost:7245/Favorites/' + item.id);
    }
     for (let i = 0; i < orders.length; i++) {
     const item = orders[i];
     await axios.delete('https://localhost:7245/api/Orders/' + item.id);
    }
    localStorage.removeItem('userId'); 
    localStorage.removeItem('userLogin'); 
    window.location.href = '/autorization';
    };

return (

<div className="userdiv">


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
<p className='orderBtn'>
    <Link to="/orders">
    My orders
    </Link>
    
</p>
<button onClick={Exit} className="logBtn">Exit</button>


</div>
);
}

export default User;