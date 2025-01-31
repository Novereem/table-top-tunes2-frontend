import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import LoginForm from "../components/LoginForm";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

const Login: React.FC = () => {
    const { theme, toggleTheme } = useTheme();
    const { login } = useAuth();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await login(username, password);
            navigate("/dashboard");
        } catch {
            setError("Login failed. Please check your credentials.");
        }
    };

    return (
        <div>
            <h2>Login</h2>
            {error && <p style={{color: "red"}}>{error}</p>}
            <LoginForm
                onSubmit={handleSubmit}
                username={username}
                setUsername={setUsername}
                password={password}
                setPassword={setPassword}
            />
            <button onClick={toggleTheme}>Switch to {theme === "light" ? "Dark" : "Light"} Mode</button>
        </div>
    );
};

export default Login;