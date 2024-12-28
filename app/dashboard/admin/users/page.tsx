'use client';

import { useState } from 'react';
import { DashboardLayout } from '@/components/layout/dashboard-layout';
import { UserTable } from '@/components/users/user-table';
import { UserFilters } from '@/components/users/user-filters';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import { mockUsers } from '@/lib/mock-data';
import { useToast } from '@/hooks/use-toast';

export default function UsersPage() {
  const [search, setSearch] = useState('');
  const [roleFilter, setRoleFilter] = useState('all');
  const { toast } = useToast();

  const filteredUsers = mockUsers.filter((user) => {
    const matchesSearch = user.name.toLowerCase().includes(search.toLowerCase()) ||
                         user.email.toLowerCase().includes(search.toLowerCase());
    const matchesRole = roleFilter === 'all' || user.role === roleFilter;
    return matchesSearch && matchesRole;
  });

  const handleEdit = (user: typeof mockUsers[0]) => {
    toast({
      title: 'Edit User',
      description: `Editing ${user.name} (${user.email})`,
    });
  };

  return (
    <DashboardLayout role="admin">
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Users</h1>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Add User
          </Button>
        </div>

        <UserFilters
          search={search}
          role={roleFilter}
          onSearchChange={setSearch}
          onRoleChange={setRoleFilter}
        />

        <UserTable users={filteredUsers} onEdit={handleEdit} />
      </div>
    </DashboardLayout>
  );
}