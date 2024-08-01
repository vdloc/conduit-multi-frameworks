import { BaseApi } from '@services/baseApi';
import type {
  Article,
  ArticleCreateRequest,
  ArticleUpdateRequest,
} from '@customTypes/Article';
import type { MultipleArticlesResponse } from '@customTypes/Articles';
import type { Comment } from '@customTypes/Comment';
import type { MultipleCommentsResponse } from '@customTypes/Comments';
import queryString from 'query-string';

interface ListArticlesParams {
  tag?: string;
  author?: string;
  favorited?: string;
  limit?: number;
  offset?: number;
}

interface FeedArticlesParams {
  limit?: number;
  offset?: number;
}

export class ArticleApi extends BaseApi {
  private readonly ENDPOINT = '/articles';
  public async listArticles(
    params?: ListArticlesParams
  ): Promise<MultipleArticlesResponse> {
    try {
      const query = params ? queryString.stringify(params) : '';
      return await this.client.get(`${this.ENDPOINT}?${query}`);
    } catch (error: Error | any) {
      return this.handleError(error);
    }
  }

  public async feedArticles(
    params: FeedArticlesParams
  ): Promise<MultipleArticlesResponse> {
    try {
      const query = queryString.stringify(params);
      return await this.client.get(`${this.ENDPOINT}/feed${query}`);
    } catch (error: Error | any) {
      return this.handleError(error);
    }
  }

  public async getArticle(slug: string): Promise<Article> {
    try {
      return await this.client.get(`${this.ENDPOINT}/${slug}`);
    } catch (error: Error | any) {
      return this.handleError(error);
    }
  }

  public async createArticle(article: ArticleCreateRequest): Promise<Article> {
    try {
      return await this.client.post(this.ENDPOINT, article);
    } catch (error: Error | any) {
      return this.handleError(error);
    }
  }

  public async updateArticle(
    slug: string,
    article: ArticleUpdateRequest
  ): Promise<Article> {
    try {
      return await this.client.post(`${this.ENDPOINT}/${slug}`, article);
    } catch (error: Error | any) {
      return this.handleError(error);
    }
  }

  public async deleteArticle(slug: string): Promise<void> {
    try {
      return await this.client.delete(`${this.ENDPOINT}/${slug}`);
    } catch (error: Error | any) {
      return this.handleError(error);
    }
  }

  public async addCommentToArticle(
    slug: string,
    comment: Comment
  ): Promise<Comment> {
    try {
      return await this.client.post(
        `${this.ENDPOINT}/${slug}/comments`,
        comment
      );
    } catch (error: Error | any) {
      return this.handleError(error);
    }
  }

  public async getCommentFromArticle(
    slug: string
  ): Promise<MultipleCommentsResponse> {
    try {
      return await this.client.get(`${this.ENDPOINT}/${slug}/comments`);
    } catch (error: Error | any) {
      return this.handleError(error);
    }
  }

  public async deleteCommentFromArticle(
    slug: string,
    id: string
  ): Promise<void> {
    try {
      return await this.client.delete(
        `${this.ENDPOINT}/${slug}/comments/${id}`
      );
    } catch (error: Error | any) {
      return this.handleError(error);
    }
  }

  public async favoriteArticle(slug: string): Promise<Article> {
    try {
      return await this.client.post(`${this.ENDPOINT}/${slug}/favorite`);
    } catch (error: Error | any) {
      return this.handleError(error);
    }
  }

  public async unfavoriteArticle(slug: string): Promise<Article> {
    try {
      return await this.client.delete(`${this.ENDPOINT}/${slug}/favorite`);
    } catch (error: Error | any) {
      return this.handleError(error);
    }
  }
}
