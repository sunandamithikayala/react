import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from '../src/accident-management/frontend/components/Navbar';
import Login from '../src/accident-management/frontend/pages/auth/Login';
import Register from '../src/accident-management/frontend/pages/auth/Register';
import ReportAccident from '../src/accident-management/frontend/pages/accidents/ReportAccident';
import AccidentList from '../src/accident-management/frontend/pages/accidents/AccidentList';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";

function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/report" element={<ReportAccident />} />
                <Route path="/accidents" element={<AccidentList />} />
            </Routes>
        </>
    );
}

export default App;
