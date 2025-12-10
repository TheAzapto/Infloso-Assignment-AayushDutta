import '../styles/LoginPage.css';
import React, { useState } from 'react';
import Splash from '../components/Splash';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function Login() {

    const { login, isAuthenticated } = useAuth();
    const navigate = useNavigate();

    if (isAuthenticated) {
        navigate('/home');
    }

    const [form, setForm] = useState({
        username: '',
        password: '',
    });
    const [error, setError] = useState('');


    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        
        try{
            const res = await login(form.username, form.password);
            navigate('/home');

        }catch(err){
            setError(err.response.data.message);
        }
    }
    
    return (
        <>
        <div className="background">
            <Splash/>
            <div className="login-container">
            <form onSubmit={handleSubmit}>
            <h1>SIGN IN</h1>

            <p> {error}</p>
                <input type="text" placeholder="Username or Email" onChange={(e) => setForm({...form, username: e.target.value})}/>
                <input type="password" placeholder="Password" onChange={(e) => setForm({...form, password: e.target.value})}/>
                <button type="submit">Login</button>
                <p>Don't have an account? <Link to="/signup" style={{textDecoration: "none", color: "var(--accent-color)"}}>Sign up</Link></p>
            </form>

        </div>
        </div>
        </>
    );
}
