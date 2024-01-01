import type { Article } from './Article';

export interface MultipleArticlesResponse {
  articles: Article[];
  articlesCount: number;
}
