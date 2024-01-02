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

export interface UserLogin {
  user: {
    email: string;
    password: string;
  };
}

export interface UserRegister {
  user: {
    username: string;
    email: string;
    password: string;
  };
}
