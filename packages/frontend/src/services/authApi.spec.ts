import { AuthApi } from '@/services/authApi';
import { vi, describe, it, expect } from 'vitest';

describe('AuthApi', () => {
  const authApi = new AuthApi();
  const userResponse = {
    email: 'johndoe@example.com',
    token: 'b1234c56-7890-12d3-4567-e89b12d3f456',
    username: 'john_doe_92',
    bio: 'Passionate explorer. Love to code, travel, and read.',
    image: 'https://example.com/images/johndoe.jpg',
  };
  // Can successfully login a user with valid credentials
  it('should successfully login a user with valid credentials', async () => {
    const userLogin = {
      user: {
        email: 'test@example.com',
        password: 'password123',
      },
    };
    vi.spyOn(authApi.client, 'post').mockResolvedValueOnce(userResponse);
    const response = await authApi.login(userLogin);
    expect(response.email).toBeDefined();
    expect(response.token).toBeDefined();
    expect(response.username).toBeDefined();
    expect(response.bio).toBeDefined();
    expect(response.image).toBeDefined();
  });

  // Can successfully register a user with valid credentials
  it('should successfully register a user with valid credentials', async () => {
    const userRegister = {
      user: {
        username: 'testuser',
        email: 'test@example.com',
        password: 'password123',
      },
    };
    vi.spyOn(authApi.client, 'post').mockResolvedValueOnce(userResponse);
    const response = await authApi.register(userRegister);
    expect(response.email).toBeDefined();
    expect(response.token).toBeDefined();
    expect(response.username).toBeDefined();
    expect(response.bio).toBeDefined();
    expect(response.image).toBeDefined();
  });

  // Returns a User object with email, token, username, bio, and image when login is successful
  it('should return a User object with email, token, username, bio, and image when login is successful', async () => {
    const userLogin = {
      user: {
        email: 'test@example.com',
        password: 'password123',
      },
    };
    vi.spyOn(authApi.client, 'post').mockResolvedValueOnce(userResponse);           
    const response = await authApi.login(userLogin);
    expect(response).toHaveProperty('email');
    expect(response).toHaveProperty('token');
    expect(response).toHaveProperty('username');
    expect(response).toHaveProperty('bio');
    expect(response).toHaveProperty('image');
  });

  // Returns an error object when login credentials are invalid
  it('should return an error object when login credentials are invalid', async () => {
    const userLogin = {
      user: {
        email: 'invalid@example.com',
        password: 'invalidpassword',
      },
    };
    const response = await authApi.login(userLogin);
    expect(response).toHaveProperty('error');
  });

  // Returns an error object when registration credentials are invalid
  it('should return an error object when registration credentials are invalid', async () => {
    const userRegister = {
      user: {
        username: 'testuser',
        email: 'invalid@example.com',
        password: 'invalidpassword',
      },
    };
    const response = await authApi.register(userRegister);
    expect(response).toHaveProperty('error');
  });

  // Returns an error object when login request fails
  it('should return an error object when login request fails', async () => {
    const userLogin = {
      user: {
        email: 'test@example.com',
        password: 'password123',
      },
    };
    // Simulate a failed request by throwing an error
    authApi.client.post = vi
      .fn()
      .mockRejectedValue(new Error('Request failed'));
    const response = await authApi.login(userLogin);
    expect(response).toHaveProperty('error');
  });
});
