export interface User {
  id?: number;
  name?: string;
  email: string;
  password: string;
}

export interface UserResponse {
  message: string;
  token: string;
  id: number;
}
