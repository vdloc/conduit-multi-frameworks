import axios, { AxiosInstance } from 'axios';


export class BaseApi {
  private static readonly API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
  static axiosClient: AxiosInstance = axios.create({
    baseURL: BaseApi.API_BASE_URL,
  });
  client: AxiosInstance;
  constructor() {
    this.client = BaseApi.axiosClient;
  }

  handleError(error: any) {
    return error;
  }
}
