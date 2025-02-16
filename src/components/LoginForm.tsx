import React from "react";
import "../assets/styles/pages/login.css"

interface LoginFormProps {
    onSubmit: (e: React.FormEvent) => void;
    username: string;
    setUsername: React.Dispatch<React.SetStateAction<string>>;
    password: string;
    setPassword: React.Dispatch<React.SetStateAction<string>>;
}

const LoginForm: React.FC<LoginFormProps> = ({ onSubmit, username, setUsername, password, setPassword }) => {
    return (
        <form onSubmit={onSubmit} className="login-form">
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            <button type="submit">Login</button>
        </form>
    );
};

export default LoginForm;