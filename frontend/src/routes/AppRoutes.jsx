import { Routes, Route, Navigate } from "react-router-dom";

import Landing from "../pages/Landing";
import Login from "../pages/Login";
import Register from "../pages/Register";

import Dashboard from "../pages/Dashboard";
import Analyze from "../pages/Analyze";
import History from "../pages/History";
import HistoryDetail from "../pages/HistoryDetail";

import MainLayout from "../components/layout/MainLayout";

function AppRoutes() {

    const token = localStorage.getItem("token");

    // ============================
    // BELUM LOGIN
    // ============================

    if (!token) {

        return (

            <Routes>

                <Route
                    path="/"
                    element={<Landing />}
                />

                <Route
                    path="/login"
                    element={<Login />}
                />

                <Route
                    path="/register"
                    element={<Register />}
                />

                <Route
                    path="*"
                    element={<Navigate to="/" replace />}
                />

            </Routes>

        );

    }

    // ============================
    // SUDAH LOGIN
    // ============================

    return (

        <Routes>

            <Route element={<MainLayout />}>

                <Route
                    path="/"
                    element={<Navigate to="/dashboard" replace />}
                />

                <Route
                    path="/dashboard"
                    element={<Dashboard />}
                />

                {/* CREATE */}
                <Route
                    path="/analyze"
                    element={<Analyze />}
                />

                {/* EDIT (Analyze Again) */}
                <Route
                    path="/analyze/:id"
                    element={<Analyze />}
                />

                {/* HISTORY */}
                <Route
                    path="/history"
                    element={<History />}
                />

                {/* READ */}
                <Route
                    path="/history/:id"
                    element={<HistoryDetail />}
                />

                <Route
                    path="*"
                    element={<Navigate to="/dashboard" replace />}
                />

            </Route>

        </Routes>

    );

}

export default AppRoutes;