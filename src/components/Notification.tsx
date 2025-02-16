import { FC, useEffect, useState } from 'react';
import "../assets/styles/components/notification.css"

interface NotificationProps {
    message: string;
    onClose: () => void;
    duration?: number;
}

const Notification: FC<NotificationProps> = ({ message, onClose, duration = 5000 }) => {
    const [remainingTime, setRemainingTime] = useState(duration);

    useEffect(() => {
        if (!message) return;
        setRemainingTime(duration);
        const startTime = Date.now();
        const intervalMs = 50;

        const interval = setInterval(() => {
            const elapsed = Date.now() - startTime;
            const newRemaining = duration - elapsed;
            setRemainingTime(newRemaining > 0 ? newRemaining : 0);
        }, intervalMs);

        const timer = setTimeout(() => {
            onClose();
        }, duration);

        return () => {
            clearInterval(interval);
            clearTimeout(timer);
        };
    }, [message, duration, onClose]);

    if (!message) return null;

    const progressWidth = (remainingTime / duration) * 100;

    return (
        <div className={"notification"}>
            <div>{message}</div>
            <div className={"notificationBarContainer"}>
                <div
                    style={{
                        width: `${progressWidth}%`,

                    }}
                    className={"notificationBar"}
                ></div>
            </div>
        </div>
    );
};

export default Notification;
