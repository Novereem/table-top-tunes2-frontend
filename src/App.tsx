import React from "react";
import { useTheme } from "./context/ThemeContext";
import './assets/styles/main.css';

const App: React.FC = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div>
            <h1>Current Theme: {theme}</h1>
            <button onClick={toggleTheme}>
                Switch to {theme === "light" ? "Dark" : "Light"} Mode
            </button>
        </div>
    );
};

export default App;