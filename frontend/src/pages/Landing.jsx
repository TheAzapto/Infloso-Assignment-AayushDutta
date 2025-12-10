import '../styles/LandingPage.css';
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";


export default function Landing() {
    const navigate = useNavigate();
    const { isAuthenticated } = useAuth();

    const handleGetStarted = () => {
        if (isAuthenticated) {
            navigate('/home');
        } else {
            navigate('/login');
        }
    }
    return (
        <div className="wrapper">
            <h1><span id="music">Melody</span><span id="verse">Verse</span></h1>
            <p id="tagline">Where music meets melody</p>
            <button onClick={handleGetStarted}>Get Started</button>
        </div>
    );
}