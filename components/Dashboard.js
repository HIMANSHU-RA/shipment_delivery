// src/components/Dashboard.js
import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <Link to="/new-shipment">Create New Shipment</Link>
      <Link to="/shipments">View Shipments</Link>
    </div>
  );
};

export default Dashboard;
