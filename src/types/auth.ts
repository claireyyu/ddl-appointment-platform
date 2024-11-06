import { type User } from "./user";

export interface AuthContextType {
  user: User | null;
  token: string | null;
  loading: boolean;
  loginWithGoogle: () => void;
  signup: (name: string, email: string, password: string) => Promise<void>;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  sendResetPasswordEmail: (email: string) => Promise<void>;
  verifyCode: (email: string, token: string) => Promise<void>;
  resetPassword: (email: string, token: string, password: string, password_confirmation: string) => Promise<void>;
}