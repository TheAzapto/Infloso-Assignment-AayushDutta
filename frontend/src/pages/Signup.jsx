import '../styles/LoginPage.css';
import React, { useState } from 'react';
import Splash from '../components/Splash';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Signup() {

    const navigate = useNavigate();
    const { signup, isAuthenticated } = useAuth();
    const [form, setForm] = useState({
        username: '',
        email: '',
        password: '',
    });
    const [error, setError] = useState('');

    if (isAuthenticated) {
        navigate('/home');
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await signup(form.username, form.email, form.password);
            navigate('/home');
        } catch (error) {
            setError(error.response.data.message);
        }
    }
    return (
        <>
        <div className="background">
            <Splash/>
            <div className="login-container">
            <form onSubmit={handleSubmit}>
            <h1>SIGN UP</h1>
            <p>{error}</p>
                <input type="text" placeholder="Username" onChange={(e) => setForm({...form, username: e.target.value})}/>
                <br />
                <input type="email" placeholder="Email" onChange={(e) => setForm({...form, email: e.target.value})}/>
                <br />
                <input type="password" placeholder="Password" onChange={(e) => setForm({...form, password: e.target.value})}/>
                <button type="submit">Sign Up</button>
            <p>Already Registered ? <Link to="/login" style={{textDecoration: "none", color: "var(--accent-color)"}}>Login</Link></p>
            </form>
        </div>
        </div>
        </>
    );
}
