import { BaseApi } from '@services/baseApi';
import type { TagsResponse } from '@customTypes/Tags';

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
