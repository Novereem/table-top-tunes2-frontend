import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./pages/Home.tsx";
import Profile from "./pages/Profile.tsx";

const Router = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/login" element={<Login />} />
            <Route element={<ProtectedRoute />}>
                <Route path="/profile" element={<Profile />} />
                <Route path="/dashboard" element={<Dashboard />} />
            </Route>
        </Routes>
    </BrowserRouter>
);

export default Router;