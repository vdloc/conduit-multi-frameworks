export interface Author {
  username: string;
  bio: string;
  image: string;
  following: boolean;
}

export interface Article {
  slug?: string;
  title: string;
  description: string;
  body: string;
  tagList?: string[];
  createdAt?: string;
  updatedAt?: string;
  favorited?: boolean;
  favoritesCount?: number;
  author?: Author;
}

export interface ArticleCreateRequest {
  article: Article;
}

export interface ArticleUpdateRequest {
  article: Partial<Article>;
}
