import { BaseApi } from './baseApi';
import type { User } from '../types/User';

export class UserApi extends BaseApi {
  async getCurrentUser(): Promise<User> {
    try {
      return await this.client.get(`/user`);
    } catch (error: Error | any) {
      return this.handleError(error);
    }
  }

  async updateUser(user: User): Promise<User> {
    try {
      return await this.client.post(`/users`, user);
    } catch (error: Error | any) {
      return this.handleError(error);
    }
  }
}
