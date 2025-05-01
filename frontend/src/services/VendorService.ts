import axios from 'axios';
import type { Vendor } from '../types/Vendor';

const API_URL = 'http://localhost:3000/api'; // Assuming backend runs on port 3000

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