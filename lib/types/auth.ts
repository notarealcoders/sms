export type UserRole = 'admin' | 'teacher' | 'student' | 'parent';

export interface User {
  id: number;
  email: string;
  name: string;
  role: UserRole;
  avatar?: string;
}

export interface AuthState {
  user: User | null;
  isLoading: boolean;
  error: string | null;
}