import axios, { AxiosInstance } from 'axios';

export class BaseApi {
  private static readonly API_BASE_URL = 'https://api.realworld.io/api';
  static axiosClient: AxiosInstance = axios.create({
    baseURL: BaseApi.API_BASE_URL,
  });
  protected client: AxiosInstance;
  constructor() {
    this.client = BaseApi.axiosClient;
  }

  handleError(error: any) {
    return error;
  }
}
