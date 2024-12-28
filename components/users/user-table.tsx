'use client';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { UserRole } from '@/lib/auth';

interface User {
  id: number;
  name: string;
  email: string;
  role: UserRole;
  status: 'active' | 'inactive';
}

interface UserTableProps {
  users: User[];
  onEdit: (user: User) => void;
}

export function UserTable({ users, onEdit }: UserTableProps) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Role</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {users.map((user) => (
          <TableRow key={user.id} className="cursor-pointer" onClick={() => onEdit(user)}>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell className="capitalize">{user.role}</TableCell>
            <TableCell>
              <Badge variant={user.status === 'active' ? 'default' : 'secondary'}>
                {user.status}
              </Badge>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}