import type { Article } from '@customTypes/Article';

export interface MultipleArticlesResponse {
  articles: Article[];
  articlesCount: number;
}
