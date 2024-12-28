export type UserRole = 'admin' | 'teacher' | 'student' | 'parent';

export interface User {
  id: number;
  email: string;
  name: string;
  role: UserRole;
}

export const MOCK_USERS = [
  { id: 1, email: 'admin@example.com', password: 'admin123', name: 'Admin User', role: 'admin' },
  { id: 2, email: 'teacher@example.com', password: 'teacher123', name: 'John Smith', role: 'teacher' },
  { id: 3, email: 'student@example.com', password: 'student123', name: 'Jane Doe', role: 'student' },
  { id: 4, email: 'parent@example.com', password: 'parent123', name: 'Robert Johnson', role: 'parent' },
] as const;

export async function authenticate(email: string, password: string): Promise<User | null> {
  const user = MOCK_USERS.find(
    (u) => u.email === email && u.password === password
  );
  
  if (!user) return null;
  
  const { password: _, ...userWithoutPassword } = user;
  return userWithoutPassword;
}