import { BaseApi } from './baseApi';
import type { Profile } from '../types/Profile';

export class ProfileApi extends BaseApi {
  private readonly ENDPOINT = '/profiles';
  public async getProfile(username: string): Promise<Profile> {
    try {
      return await this.client.get(`${this.ENDPOINT}/${username}`);
    } catch (error: Error | any) {
      return this.handleError(error);
    }
  }

  public async followUser(username: string): Promise<Profile> {
    try {
      return await this.client.post(`${this.ENDPOINT}/${username}/follow`);
    } catch (error: Error | any) {
      return this.handleError(error);
    }
  }

  public async unfollowUser(username: string): Promise<Profile> {
    try {
      return await this.client.delete(`${this.ENDPOINT}/${username}/follow`);
    } catch (error: Error | any) {
      return this.handleError(error);
    }
  }
}
