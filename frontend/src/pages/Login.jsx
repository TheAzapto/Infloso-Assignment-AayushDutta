import '../styles/LoginPage.css';
import React, { useState } from 'react';
import Splash from '../components/Splash';


export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
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
                <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
                <button type="submit">Login</button>
            </form>

        </div>
        </div>
        </>
    );
}
