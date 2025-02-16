import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import LoginForm from "../components/LoginForm";
import { useNavigate } from "react-router-dom";
import MainLayout from "../layouts/MainLayout.tsx";

const Login: React.FC = () => {
    const { login } = useAuth();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await login(username, password);
            navigate("/dashboard");
        } catch {
            /* empty catch*/
        }
    };

    return (
        <MainLayout>
            <div className="login-container">
                <LoginForm
                    onSubmit={handleSubmit}
                    username={username}
                    setUsername={setUsername}
                    password={password}
                    setPassword={setPassword}
                />
            </div>
        </MainLayout>
    );
};

export default Login;