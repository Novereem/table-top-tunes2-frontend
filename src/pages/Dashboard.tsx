import DashboardLayout from "../layouts/DashboardLayout.tsx";
import React from "react";
import SceneList from "../components/scenes/SceneList.tsx";

const Dashboard: React.FC = () => {

    return (
        <DashboardLayout>
            <SceneList />
        </DashboardLayout>
    );
};

export default Dashboard;