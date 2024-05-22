// src/services/authService.js
import axios from 'axios';

const API_URL = 'http://your-backend-api-url.com';

export const register = (userData) => {
  return axios.post(`${API_URL}/register`, userData);
};

export const login = (userData) => {
  return axios.post(`${API_URL}/login`, userData);
};
