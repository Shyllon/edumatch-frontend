import axios from "axios";

const BASE_URL = "https://edumatch-nigeria.onrender.com/api";

// ✅ Signup API
export const signupUser = async (userData) => {
  try {
    const response = await axios.post(`${BASE_URL}/auth/register`, userData);
    return response.data; // Ensure we return response correctly
  } catch (error) {
    console.error("Signup Error:", error.response?.data || error.message);
    throw error;
  }
};

// ✅ Login API
export const loginUser = async (credentials) => {
  try {
    const response = await axios.post(`${BASE_URL}/auth/login`, credentials);
    
    // ✅ Extract token and user from response
    const { token, user } = response.data;

    // ✅ Save token & user info to local storage
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(user));

    return response.data; // Return full response
  } catch (error) {
    console.error("Login Error:", error.response?.data || error.message);
    throw error;
  }
};
