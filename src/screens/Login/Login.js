import React, { useState, useEffect, useContext } from 'react';
import './Login.css';
import usersData from './users.json';
import { AuthContext } from '../../AuthContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);

  useEffect(() => {
    setErrorMessage('');
  }, [email, password]);

  const handleLogin = (e) => {
    e.preventDefault();

    // Find user with matching username and password
    const user = usersData.find((user) => user.email === email && user.password === password);

    if (user) {
      // Successful login
      console.log('Logged in:', user);
      setIsAuthenticated(true);
      // Clear the form fields
      setEmail('');
      setPassword('');
      setErrorMessage('');
      // Redirect to the Reservation page
    window.location.href = '/reservation';
    } else {
      // Invalid credentials
      setErrorMessage('Invalid username or password');
    }
  };

  return (
    <div className="login-container">
      <h1>Login Page</h1>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
