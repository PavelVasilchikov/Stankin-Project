import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Autorization() {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [users, setUsers] = useState([]);
    const [user, setUser] = useState(null);
    
    useEffect(() => {
    axios.get('https://localhost:7245/User').then((res) => {
    setUsers(res.data);
    }).catch((err) => {
    console.error(err);
    alert('Error fetching users');
    });
    }, []);
    
    const handleLogin = (e) => {
    e.preventDefault();
    const authenticatedUser = users.find((u) => u.login === login && u.password === password);
    if (!authenticatedUser) {
    alert('Incorrect username or password');
    return;
    }
    localStorage.setItem('userId', authenticatedUser.id);
    localStorage.setItem('userLogin', login);
    setUser(authenticatedUser);
    window.location.href = '/';
    };
    
    useEffect(() => {
    document.querySelector('.overlay').style.display = 'block';
    }, []);
    
    return (
    <div className="overlay">
    <div className="Login">
        <Link to="/" className="links">
        <h1 > Back to home </h1 >
        </Link>
    <h2>Autorization</h2>

    <Link to="/registration" >
    <span>Create an account</span>
    </Link>
    
    <div className="login">
    <input placeholder="Login..." value={login} onChange={(e) => setLogin(e.target.value)} />
    </div>
    <div className="login">
    <input placeholder="Password..." value={password} onChange={(e) => setPassword(e.target.value)} />
    </div>
    <button className="logBtn" onClick={handleLogin}>
    Sign in
    </button>
    
    </div>
    </div>
    );
    }
    export default Autorization;