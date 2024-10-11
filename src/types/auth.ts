import { type User } from "./user";

export interface AuthContextType {
  user: User | null;
  token: string | null;
  loading: boolean;
  loginWithGoogle: () => void;
  logout: () => void;
}