import { useAuth } from "../context/AuthContext";

const Dashboard: React.FC = () => {
    const { logout } = useAuth();

    return (
        <div>
            <button onClick={logout}>Logout</button>
        </div>
    );
};

export default Dashboard;