// src/context/NotificationContext.tsx
import { createContext, useContext, useState, ReactNode, FC } from 'react';
import Notification from '../components/Notification';

interface NotificationContextType {
    showNotification: (message: string) => void;
}

const NotificationContext = createContext<NotificationContextType | undefined>(undefined);

export const NotificationProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [message, setMessage] = useState('');

    const showNotification = (msg: string) => {
        setMessage(msg);
    };

    const handleNotificationClose = () => {
        setMessage('');
    };

    return (
        <NotificationContext.Provider value={{ showNotification }}>
            {children}
            <Notification message={message} onClose={handleNotificationClose} />
        </NotificationContext.Provider>
    );
};

export const useNotification = (): NotificationContextType => {
    const context = useContext(NotificationContext);
    if (!context) {
        throw new Error('useNotification must be used within a NotificationProvider');
    }
    return context;
};