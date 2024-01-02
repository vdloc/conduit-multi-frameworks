import { BaseApi } from './baseApi';
import type { TagsResponse } from '../types/Tags';

export class TagApi extends BaseApi {
  private readonly ENDPOINT = '/tags';
  async getTags(): Promise<TagsResponse> {
    try {
      return await this.client.get(this.ENDPOINT);
    } catch (error: Error | any) {
      return this.handleError(error);
    }
  }
}
