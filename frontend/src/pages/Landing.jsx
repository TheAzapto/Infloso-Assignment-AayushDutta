import { Link } from "react-router-dom";
import '../styles/LandingPage.css';
import { useNavigate } from "react-router-dom";

export default function Landing() {
    const navigate = useNavigate();
    return (
        <div className="wrapper">
            <h1><span id="music">Melody</span><span id="verse">Verse</span></h1>
            <p id="tagline">Where music meets melody</p>
            <button onClick={() => navigate('/login')}>Get Started</button>
        </div>
    );
}