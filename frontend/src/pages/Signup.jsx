import '../styles/LoginPage.css';
import React, { useState } from 'react';
import Splash from '../components/Splash';
import { Link } from 'react-router-dom';


export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const res = await fetch("http://localhost:5000/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password }),
        });
        console.log(res);
        const data = await res.json();
        setMessage(data.message);
    }
    return (
        <>
        <div className="background">
            <Splash/>
            <div className="login-container">
            <form onSubmit={handleSubmit}>
            <h1>SIGN IN</h1>

            <p> {message}</p>
                <input type="text" placeholder="Username or Email" onChange={(e) => setUsername(e.target.value)}/>
                <br />
                <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
                <br />
                <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
                <button type="submit">Sign Up</button>
            <p>Already Registered ? <Link to="/" style={{textDecoration: "none", color: "var(--accent-color)"}}>Login</Link></p>
            </form>
        </div>
        </div>
        </>
    );
}
