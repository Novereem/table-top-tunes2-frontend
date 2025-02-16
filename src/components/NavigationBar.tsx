import React from 'react';
import { useTheme } from '../context/ThemeContext.tsx';
import {useAuth} from "../context/AuthContext.tsx";
import {Link} from "react-router-dom";

const NavigationBar: React.FC = () => {
    const { theme, toggleTheme } = useTheme();
    const { token } = useAuth();

    return (
        <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem' }}>
            <div>
                <button onClick={toggleTheme}>
                    Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
                </button>
            </div>
            <div>
                {token ? (
                    <Link to="/profile">
                        <button>Profile</button>
                    </Link>
                ) : (
                    <Link to="/login">
                        <button>Login</button>
                    </Link>
                )}
            </div>
        </nav>
    );
};

export default NavigationBar;