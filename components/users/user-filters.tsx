'use client';

import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface UserFiltersProps {
  search: string;
  role: string;
  onSearchChange: (value: string) => void;
  onRoleChange: (value: string) => void;
}

export function UserFilters({ search, role, onSearchChange, onRoleChange }: UserFiltersProps) {
  return (
    <div className="flex gap-4">
      <div className="flex-1">
        <Input
          placeholder="Search users..."
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>
      <Select value={role} onValueChange={onRoleChange}>
        <SelectTrigger className="w-48">
          <SelectValue placeholder="Filter by role" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Roles</SelectItem>
          <SelectItem value="admin">Admin</SelectItem>
          <SelectItem value="teacher">Teacher</SelectItem>
          <SelectItem value="student">Student</SelectItem>
          <SelectItem value="parent">Parent</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}