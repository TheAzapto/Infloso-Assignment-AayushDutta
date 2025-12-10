import './App.css';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Landing from './pages/Landing';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Homepage from './pages/Homepage';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Homepage />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter >
  );
}

export default App;
