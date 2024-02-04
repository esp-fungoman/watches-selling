import { User } from "../user";

export interface SignInPayload {
  password: string;
  email?: string;
  confirmPassword?: string;
}

export interface ResetPasswordPayload {
  password: string;
  passwordConfirmation: string;
  code: string;
}

export interface ForgotPasswordPayload {
  email: string;
}

export interface AuthResponse {
  token: string;
  user: User;
}
