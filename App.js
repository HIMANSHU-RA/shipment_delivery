// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Header from './components/Header';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import NewShipment from './components/NewShipment';
import ShipmentList from './components/ShipmentList';
import ShipmentDetail from './components/ShipmentDetail';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/new-shipment" element={<NewShipment />} />
          <Route path="/shipments/:id" element={<ShipmentDetail />} />
          <Route path="/shipments" element={<ShipmentList />} />
          <Route path="/" element={<Login />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
