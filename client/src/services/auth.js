// services/authService.js
import axios from 'axios';

const API_URL = 'http://localhost:3001/auth/register'; // Update with your actual backend URL

export const registerUser = async (userData) => {
    try {
        const response = await axios.post(`${API_URL}/register`, userData);
        return response.data; // Assuming the server returns the token upon successful registration
    } catch (error) {
        console.error('Error registering user:', error);
        throw error; // You might handle errors differently based on your application's requirements
    }
};

export const loginUser = async (credentials) => {
    try {
        const response = await axios.post(`${API_URL}/login`, credentials);
        return response.data.token; // Assuming the server returns the token upon successful login
    } catch (error) {
        console.error('Error logging in user:', error);
        throw error; // You might handle errors differently based on your application's requirements
    }
};
