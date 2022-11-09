import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Dashboard from '../pages/dashboard/Dashboard';
import Devices from '../pages/devices/Devices';
import Graph from '../pages/graph/Graph';


const AppRouter = () => {
    const { currentUser } = useAuth()
    return (
        <Router>
            <Routes>
                <Route path="/" element={
                    currentUser ? <Dashboard /> : <Login />
                } />
                <Route exact path="/login" element={
                    currentUser ? <Login /> : <Dashboard />
                } />
                <Route exact path="/register" element={
                    <Register />
                } />

                <Route exact path="/devices" element={
                    currentUser ? <Devices /> : <Login />
                } />

                <Route exact path='/graph' element={
                    currentUser ? <Graph /> : <Login />
                } />


            </Routes>
        </Router>
    );
}


export default AppRouter;