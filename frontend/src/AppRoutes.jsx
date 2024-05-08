import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from './pages/Home';
import { Reserva } from './pages/Reserva';
import { Login } from "./pages/Login";


export function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/reserva" element={<Reserva />}></Route>
                <Route path="/login" element={<Login />}></Route>
            </Routes>
        </BrowserRouter >
    )
} 