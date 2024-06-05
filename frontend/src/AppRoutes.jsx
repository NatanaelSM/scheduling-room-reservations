import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Home } from './pages/Home';
import { Reserva } from './pages/Reserva';
import { Login } from "./pages/Login";
import { useState, useEffect } from "react";

export function AppRoutes() {
    const [token, setToken] = useState(localStorage.getItem('token') || '');

    useEffect(() => {
        if (token) {
            localStorage.setItem('token', token);
        } else {
            localStorage.removeItem('token');
        }
    }, [token]);

    const isAuthenticated = !!token;

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={!isAuthenticated ? <Login setToken={setToken} /> : <Navigate replace to="/home" />} />
                <Route path="/home" element={isAuthenticated ? <Home token={token} /> : <Navigate replace to="/login" />} />
                <Route path="/reserva" element={isAuthenticated ? <Reserva token={token} /> : <Navigate replace to="/login" />} />
                <Route path="/" element={<Navigate replace to={isAuthenticated ? "/home" : "/login"} />} />
            </Routes>
        </BrowserRouter>
    );
}
