import { describe, it, expect, vi } from 'vitest';
import { ArticleApi } from './articleApi';

describe('ArticleApi', () => {
  const articleApi = new ArticleApi();
  const error = { errors: { body: ['Invalid request'] } };

  // should be able to list articles with valid params
  it('should be able to list articles with valid params', async () => {
    const params = {
      tag: 'technology',
      author: 'john',
      favorited: 'true',
      limit: 10,
      offset: 0,
    };
    const response = {
      articles: [
        {
          slug: 'article-1',
          title: 'Article 1',
          description: 'This is article 1',
          body: 'Lorem ipsum dolor sit amet',
          tagList: ['technology'],
          createdAt: '2022-01-01T00:00:00Z',
          updatedAt: '2022-01-01T00:00:00Z',
          favorited: true,
          favoritesCount: 10,
          author: {
            username: 'john',
            bio: 'I am a writer',
            image: 'https://example.com/john.jpg',
            following: false,
          },
        },
      ],
      articlesCount: 1,
    };
    vi.spyOn(articleApi.client, 'get').mockResolvedValueOnce(response);

    const result = await articleApi.listArticles(params);

    expect(articleApi.client.get).toHaveBeenCalledWith(
      '/articles?author=john&favorited=true&limit=10&offset=0&tag=technology'
    );
    expect(result).toEqual(response);
  });

  // should be able to get article by slug
  it('should be able to get article by slug', async () => {
    const slug = 'article-1';
    const response = {
      slug: 'article-1',
      title: 'Article 1',
      description: 'This is article 1',
      body: 'Lorem ipsum dolor sit amet',
      tagList: ['technology'],
      createdAt: '2022-01-01T00:00:00Z',
      updatedAt: '2022-01-01T00:00:00Z',
      favorited: true,
      favoritesCount: 10,
      author: {
        username: 'john',
        bio: 'I am a writer',
        image: 'https://example.com/john.jpg',
        following: false,
      },
    };
    vi.spyOn(articleApi.client, 'get').mockResolvedValueOnce(response);

    const result = await articleApi.getArticle(slug);

    expect(articleApi.client.get).toHaveBeenCalledWith('/articles/article-1');
    expect(result).toEqual(response);
  });

  // should be able to create article with valid request
  it('should be able to create article with valid request', async () => {
    const article = {
      title: 'New Article',
      description: 'This is a new article',
      body: 'Lorem ipsum dolor sit amet',
      tagList: ['technology'],
    };
    const response = {
      slug: 'new-article',
      title: 'New Article',
      description: 'This is a new article',
      body: 'Lorem ipsum dolor sit amet',
      tagList: ['technology'],
      createdAt: '2022-01-01T00:00:00Z',
      updatedAt: '2022-01-01T00:00:00Z',
      favorited: false,
      favoritesCount: 0,
      author: {
        username: 'john',
        bio: 'I am a writer',
        image: 'https://example.com/john.jpg',
        following: false,
      },
    };
    vi.spyOn(articleApi.client, 'post').mockResolvedValueOnce(response);

    const result = await articleApi.createArticle({ article });

    expect(articleApi.client.post).toHaveBeenCalledWith('/articles', {
      article,
    });
    expect(result).toEqual(response);
  });

  // should be able to update article with valid slug and request
  it('should be able to update article with valid slug and request', async () => {
    const slug = 'article-1';
    const article = {
      title: 'Updated Article',
      description: 'This is an updated article',
      body: 'Lorem ipsum dolor sit amet',
    };
    const response = {
      slug: 'article-1',
      title: 'Updated Article',
      description: 'This is an updated article',
      body: 'Lorem ipsum dolor sit amet',
      tagList: ['technology'],
      createdAt: '2022-01-01T00:00:00Z',
      updatedAt: '2022-01-01T00:00:00Z',
      favorited: true,
      favoritesCount: 10,
      author: {
        username: 'john',
        bio: 'I am a writer',
        image: 'https://example.com/john.jpg',
        following: false,
      },
    };
    vi.spyOn(articleApi.client, 'post').mockResolvedValueOnce(response);

    const result = await articleApi.updateArticle(slug, { article });

    expect(articleApi.client.post).toHaveBeenCalledWith('/articles/article-1', {
      article,
    });
    expect(result).toEqual(response);
  });

  // should be able to delete article with valid slug
  it('should be able to delete article with valid slug', async () => {
    const slug = 'article-1';
    vi.spyOn(articleApi.client, 'delete').mockResolvedValueOnce(undefined);

    const result = await articleApi.deleteArticle(slug);

    expect(articleApi.client.delete).toHaveBeenCalledWith(
      '/articles/article-1'
    );
    expect(result).toBeUndefined();
  });

  // should be able to add comment to article with valid slug and request
  it('should be able to add comment to article with valid slug and request', async () => {
    const slug = 'article-1';
    const comment = {
      body: 'This is a comment',
    };
    vi.spyOn(articleApi.client, 'post').mockResolvedValueOnce(undefined);

    const result = await articleApi.addCommentToArticle(slug, comment);

    expect(articleApi.client.post).toHaveBeenCalledWith(
      '/articles/article-1/comments',
      comment
    );
    expect(result).toBeUndefined();
  });

  // should return error when listing articles with invalid params
  it('should return error when listing articles with invalid params', async () => {
    const params = {
      invalidParam: 'invalid',
    };

    vi.spyOn(articleApi.client, 'get').mockRejectedValueOnce(error);

    const result = await articleApi.listArticles(params);

    expect(articleApi.client.get).toHaveBeenCalledWith(
      '/articles?invalidParam=invalid'
    );
    expect(result).toEqual(['Invalid request']);
  });

  // should return error when getting article with invalid slug
  it('should return error when getting article with invalid slug', async () => {
    const slug = 'invalid-slug';

    vi.spyOn(articleApi.client, 'get').mockRejectedValueOnce(error);

    const result = await articleApi.getArticle(slug);

    expect(articleApi.client.get).toHaveBeenCalledWith(
      '/articles/invalid-slug'
    );
    expect(result).toEqual(['Invalid request']);
  });

  // should return error when creating article with invalid request
  it('should return error when creating article with invalid request', async () => {
    const article = {
      invalidField: 'invalid',
    };
    vi.spyOn(articleApi.client, 'post').mockRejectedValueOnce(error);

    const result = await articleApi.createArticle({ article });

    expect(articleApi.client.post).toHaveBeenCalledWith('/articles', {
      article,
    });
    expect(result).toEqual(['Invalid request']);
  });

  // should return error when updating article with invalid slug or request
  it('should return error when updating article with invalid slug or request', async () => {
    const slug = 'article-1';
    const article = {
      invalidField: 'invalid',
    };
    vi.spyOn(articleApi.client, 'post').mockRejectedValueOnce(error);

    const result = await articleApi.updateArticle(slug, { article });

    expect(articleApi.client.post).toHaveBeenCalledWith('/articles/article-1', {
      article,
    });
    expect(result).toEqual(['Invalid request']);
  });
});
