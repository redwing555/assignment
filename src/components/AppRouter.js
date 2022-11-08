import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Home from '../pages/Home';

const AppRouter = () => {
    const { currentUser } = useAuth()
    return (
        <Router>
            <Routes>
                <Route path="/" element={
                    currentUser ? <Home /> : <Login />
                } />
                <Route exact path="/login" element={
                    <Login />
                } />
                <Route exact path="/register" element={
                    <Register />
                } />
            </Routes>
        </Router>
    );
}


export default AppRouter;