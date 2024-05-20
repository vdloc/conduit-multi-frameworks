import type { Author } from '@customTypes/Article';

export interface Comment {
  id?: number;
  createdAt?: string;
  updatedAt?: string;
  body: string;
  author?: Author;
}

export interface SingleCommentResponse {
  comment: Comment;
}
