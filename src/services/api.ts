import axios from 'axios';
import type { UserRequest } from '../types/User';

const API_BASE_URL = 'https://api.realworld.io/api';
const apiClient = axios.create({
  baseURL: API_BASE_URL,
});

interface Error {
  errors: {
    body: string[];
  };
}

class API {
  async getCurrentUser() {
    try {
      return await apiClient.get(`/user`);
    } catch (error: Error | any) {
      return error.body;
    }
  }

  async login(user: UserRequest) {
    try {
      return await apiClient.post(`/users/login`, user);
    } catch (error: Error | any) {
      return error.body;
    }
  }
}

const Api = new API();
export default Api;
