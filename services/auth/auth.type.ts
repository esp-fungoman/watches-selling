import { User } from "../user";

export interface SignInPayload {
  password: string;
  email?: string;
  confirmPassword?: string;
}

export interface SignUpPayload extends SignInPayload {
  firstName: string;
  lastName: string;
  gender: string;
  dateOfBirth: string;
  phoneNumber: string;
  role: string;
}

export interface ResetPasswordPayload {
  password: string;
  passwordConfirmation: string;
  code: string;
}

export interface ForgotPasswordPayload {
  email: string;
}

export interface ChangePasswordPayload {
  password: string;
  confirmPassword: string;
  currentPassword: string;
}
export interface AuthResponse {
  access_token: string;
  refresh_token: string;
  user: User;
}
