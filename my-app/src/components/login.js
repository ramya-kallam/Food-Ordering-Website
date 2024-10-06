import React, { useState } from 'react';
import './login.css';
import { useNavigate } from 'react-router-dom';
function LoginForm() {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const validateForm = () => {
        const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if (!emailRegex.test(username)) {
            setErrorMessage('Please enter a valid email address');
            return;
        }

        else if (password.length < 8) {
            setErrorMessage('Password must be at least 8 characters long');
            return;
        }
        navigate('/menu');
        // Handle form submission
        // Example: You can perform any necessary actions here, such as making an API request
    };

    return (
        <div className="login-overlay">
            <h1 style={{ textAlign: "center" }}>CANTEEN ORDERING APP</h1>
            <h2>Login</h2>
            <form>
                <input
                    type="text"
                    placeholder="Email"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="button" onClick={validateForm}>Login</button>
                <p className="error-message">{errorMessage}</p>
            </form>
            <p>Don't have an account? </p>
        </div>
    );
}

export {LoginForm};
