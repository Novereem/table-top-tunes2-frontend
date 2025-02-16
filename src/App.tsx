import React from "react";
import './assets/styles/main.css';
import {AuthProvider} from "./context/AuthContext.tsx";
import Router from "./Router.tsx";
import {NotificationProvider} from "./context/NotificationContext.tsx";

const App: React.FC = () => {

    return (
        <NotificationProvider>
            <AuthProvider>
                <Router />
            </AuthProvider>
        </NotificationProvider>
    );
};

export default App;