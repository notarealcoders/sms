import { UserRole } from './auth';

export interface MockUser {
  id: number;
  name: string;
  email: string;
  role: UserRole;
  status: 'active' | 'inactive';
}

export const mockUsers: MockUser[] = [
  { id: 1, name: 'Admin User', email: 'admin@example.com', role: 'admin', status: 'active' },
  { id: 2, name: 'John Smith', email: 'teacher@example.com', role: 'teacher', status: 'active' },
  { id: 3, name: 'Jane Doe', email: 'student@example.com', role: 'student', status: 'active' },
  { id: 4, name: 'Robert Johnson', email: 'parent@example.com', role: 'parent', status: 'active' },
  { id: 5, name: 'Sarah Wilson', email: 'sarah@example.com', role: 'teacher', status: 'inactive' },
  { id: 6, name: 'Mike Brown', email: 'mike@example.com', role: 'student', status: 'active' },
];