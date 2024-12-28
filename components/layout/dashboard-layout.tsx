'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { DashboardHeader } from './dashboard-header';
import { DashboardSidebar } from './dashboard-sidebar';
import type { UserRole } from '@/lib/auth';

interface DashboardLayoutProps {
  children: React.ReactNode;
  role: UserRole;
}

export function DashboardLayout({ children, role }: DashboardLayoutProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (!user) {
      router.push('/login');
      return;
    }

    const userData = JSON.parse(user);
    if (userData.role !== role) {
      router.push('/login');
      return;
    }

    setIsLoading(false);
  }, [router, role]);

  if (isLoading) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />
      <div className="flex h-[calc(100vh-4rem)]">
        <DashboardSidebar role={role} />
        <main className="flex-1 overflow-y-auto p-6">
          {children}
        </main>
      </div>
    </div>
  );
}