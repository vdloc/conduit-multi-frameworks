export interface User {
  email: string;
  token: string;
  username: string;
  bio: string;
  image: string | null;
}

export interface UserResponse {
  user: User;
}

export interface UserRequest {
  user: {
    email: string;
    password: string;
  };
}
