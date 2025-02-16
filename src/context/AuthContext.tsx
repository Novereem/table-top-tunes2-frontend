import React, { createContext, useContext, useEffect, useState } from "react";
import { AuthContextType } from "../types/auth";
import { loginUser } from "../services/authService";
import {useNotification} from "./NotificationContext.tsx";

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [token, setToken] = useState<string | null>(() => localStorage.getItem("token"));
    const { showNotification } = useNotification();

    useEffect(() => {
        if (token) {
            localStorage.setItem("token", token);
        } else {
            localStorage.removeItem("token");
        }
    }, [token]);

    const login = async (username: string, password: string) => {
        try {
            const response = await loginUser(username, password);
            if (response.userMessage) {
                showNotification(response.userMessage);
            }
            setToken(response.data.token);
        } catch (error) {
            let errorMessage = "Something went wrong, please try again later.";
            if (error instanceof Error) {
                errorMessage = error.message;
            }
            showNotification(errorMessage);
            throw error;
        }
    };

    const logout = () => {
        setToken(null);
    };

    return (
        <AuthContext.Provider value={{ token, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};