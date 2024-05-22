// src/components/NewShipment.js
import React, { useState } from 'react';
import { createShipment } from '../services/shipmentService';

const NewShipment = () => {
  const [formData, setFormData] = useState({
    sender: '',
    receiver: '',
    packageSize: '',
    deliveryAddress: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createShipment(formData);
      alert('Shipment created successfully!');
    } catch (error) {
      alert('Failed to create shipment!');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="sender" placeholder="Sender" onChange={handleChange} />
      <input name="receiver" placeholder="Receiver" onChange={handleChange} />
      <input name="packageSize" placeholder="Package Size" onChange={handleChange} />
      <input name="deliveryAddress" placeholder="Delivery Address" onChange={handleChange} />
      <button type="submit">Create Shipment</button>
    </form>
  );
};

export default NewShipment;
