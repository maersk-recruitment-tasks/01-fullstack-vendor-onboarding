import axios from 'axios';
import type { Vendor } from '../types/Vendor';
const useNodeBackend = true; // Set to true if using Java backend
const API_URL_JAVA = 'http://localhost:3001/api'; // Assuming backend runs on port 3000
const API_URL_NODE = 'http://localhost:3000/api';

const API_URL = useNodeBackend ? API_URL_NODE : API_URL_JAVA;
export const VendorService = {
  async getVendors(): Promise<Vendor[]> {
    try {
      const response = await axios.get(`${API_URL}/vendors`);
      return response.data;
    } catch (error) {
      console.error('Error fetching vendors:', error);
      throw error;
    }
  },
  
  async createVendor(vendor: Vendor): Promise<Vendor> {
    try {
      const response = await axios.post(`${API_URL}/vendors`, vendor);
      return response.data;
    } catch (error) {
      console.error('Error creating vendor:', error);
      throw error;
    }
  }
}