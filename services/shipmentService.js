// src/services/shipmentService.js
import axios from 'axios';

const API_URL = 'http://your-backend-api-url.com';

export const createShipment = (shipmentData) => {
  return axios.post(`${API_URL}/shipments`, shipmentData);
};

export const getShipments = () => {
  return axios.get(`${API_URL}/shipments`);
};

export const getShipmentById = (id) => {
  return axios.get(`${API_URL}/shipments/${id}`);
};
