import { BaseApi } from '@services/baseApi';
import type { User, UserLogin, UserRegister } from '@customTypes/User';

export class AuthApi extends BaseApi {
  private readonly ENDPOINT = '/users';
  public async login(user: UserLogin): Promise<User> {
    try {
      return await this.client.post(`${this.ENDPOINT}/login`, user);
    } catch (error: Error | any) {
      return this.handleError(error);
    }
  }

  public async register(user: UserRegister): Promise<User> {
    try {
      return await this.client.post(`${this.ENDPOINT}`, user);
    } catch (error: Error | any) {
      return this.handleError(error);
    }
  }
}
