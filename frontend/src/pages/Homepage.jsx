import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Homepage() {
    const { logout, isAuthenticated } = useAuth();

    const navigate = useNavigate();
    useEffect(() => {
        if (!isAuthenticated) {
            navigate('/');
        }
    }, [isAuthenticated]);
    return (
        <div>
            <h1>Homepage</h1>
            {isAuthenticated && <button onClick={logout}>Logout</button>}
        </div>
    );
}