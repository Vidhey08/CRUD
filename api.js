// services/api.js
import axios from 'axios';

const apiUrl = '/api'; // Use a relative URL for your backend API

export const getUsers = () => {
  return axios.get(`${apiUrl}/users`);
};

// Add more API functions as needed
