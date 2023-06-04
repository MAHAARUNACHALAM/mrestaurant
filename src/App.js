import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './screens/Home/Home';
import Login from './screens/Login/Login';
import Reservation from './screens/Reservation/Reservation';
import { AuthProvider } from './AuthContext';

function App() {
  return (
    <Router>
    <div className="App">
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/reservation" element={<Reservation />} />
      </Routes>
      </AuthProvider>
    </div>
  </Router>
  
  );
}

export default App;
