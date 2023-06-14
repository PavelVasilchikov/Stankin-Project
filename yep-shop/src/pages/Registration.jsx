import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Registration() {
const [email, setEmail] = React.useState('');
const [password, setPassword] = React.useState('');
const [Steam, setSteam] = React.useState('');
const [name, setName] = React.useState('');
const [login, setLogin] = React.useState('');



const handleLogin1 = (e) => {
e.preventDefault();
axios.post('https://647b4e51d2e5b6101db11d2d.mockapi.io/account', {
email,
password,
name,
login,

}).then((res) => {
localStorage.setItem('token', res.data.token);
window.location.href = '/autorization';
}).catch((err) => {
console.error(err);
alert('Registration Error');
});
};


return (
<div className="overlay">
<div className="Login">
<Link to="/autorization" className='links'>
        <h1>Back to login</h1>
        </Link>
<h2>Registration</h2>
<div className="login">
<input placeholder="Login" value={login} onChange={(e) => setLogin(e.target.value)} />
</div>
<div className="login">
<input placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
</div>
<div className="login">
<input placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
</div>
<div className="login">
<input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
</div>


<button className="logBtn" onClick={handleLogin1}>

Create profile

</button>



</div>
</div>
);
}
export default Registration