'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { GraduationCap } from 'lucide-react';

export function DashboardHeader() {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem('user');
    router.push('/login');
  };

  return (
    <header className="border-b bg-background">
      <div className="container mx-auto px-4">
        <div className="h-16 flex items-center justify-between">
          <Link href="/dashboard" className="flex items-center space-x-2">
            <GraduationCap className="h-6 w-6" />
            <span className="font-bold text-xl">EduManage</span>
          </Link>
          <Button variant="ghost" onClick={handleLogout}>
            Logout
          </Button>
        </div>
      </div>
    </header>
  );
}