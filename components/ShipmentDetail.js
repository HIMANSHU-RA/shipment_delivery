// src/components/ShipmentDetail.js
import React, { useEffect, useState } from 'react';
import { getShipmentById } from '../services/shipmentService';
import { useParams } from 'react-router-dom';

const ShipmentDetail = () => {
  const { id } = useParams();
  const [shipment, setShipment] = useState(null);

  useEffect(() => {
    const fetchShipment = async () => {
      const response = await getShipmentById(id);
      setShipment(response.data);
    };

    fetchShipment();
  }, [id]);

  if (!shipment) return <div>Loading...</div>;

  return (
    <div>
      <h1>Shipment Details</h1>
      <p>Sender: {shipment.sender}</p>
      <p>Receiver: {shipment.receiver}</p>
      <p>Package Size: {shipment.packageSize}</p>
      <p>Delivery Address: {shipment.deliveryAddress}</p>
      <p>Status: {shipment.status}</p>
    </div>
  );
};

export default ShipmentDetail;
