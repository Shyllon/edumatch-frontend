// src/api/api.js
import axios from 'axios';

// ✅ Declare BASE_URL only once
const BASE_URL = 'https://edumatch-nigeria.onrender.com/api';

// ✅ Signup API
export const signupUser = async (userData) => {
  try {
    const response = await axios.post(`${BASE_URL}/auth/register`, userData);
    return response.data;
  } catch (error) {
    console.error('Signup Error:', error.response?.data || error.message);
    throw error;
  }
};

// ✅ Login API
export const loginUser = async (credentials) => {
  try {
    const response = await axios.post(`${BASE_URL}/auth/login`, credentials);
    return response.data;
  } catch (error) {
    console.error('Login Error:', error.response?.data || error.message);
    throw error;
  }
};
