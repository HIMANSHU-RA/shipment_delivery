// src/components/ShipmentList.js
import React, { useEffect, useState } from 'react';
import { getShipments } from '../services/shipmentService';
import { Link } from 'react-router-dom';

const ShipmentList = () => {
  const [shipments, setShipments] = useState([]);

  useEffect(() => {
    const fetchShipments = async () => {
      const response = await getShipments();
      setShipments(response.data);
    };

    fetchShipments();
  }, []);

  return (
    <div>
      <h1>Shipments</h1>
      <ul>
        {shipments.map((shipment) => (
          <li key={shipment.id}>
            <Link to={`/shipments/${shipment.id}`}>{shipment.sender} - {shipment.receiver}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShipmentList;
