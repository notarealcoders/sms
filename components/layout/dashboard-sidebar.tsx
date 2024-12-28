'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import {
  LayoutDashboard,
  Users,
  Calendar,
  GraduationCap,
  MessageSquare,
  Settings
} from 'lucide-react';

const roleRoutes = {
  admin: [
    { name: 'Dashboard', href: '/dashboard/admin', icon: LayoutDashboard },
    { name: 'Users', href: '/dashboard/admin/users', icon: Users },
    { name: 'Settings', href: '/dashboard/admin/settings', icon: Settings },
  ],
  teacher: [
    { name: 'Dashboard', href: '/dashboard/teacher', icon: LayoutDashboard },
    { name: 'Classes', href: '/dashboard/teacher/classes', icon: GraduationCap },
    { name: 'Calendar', href: '/dashboard/teacher/calendar', icon: Calendar },
    { name: 'Messages', href: '/dashboard/teacher/messages', icon: MessageSquare },
  ],
  student: [
    { name: 'Dashboard', href: '/dashboard/student', icon: LayoutDashboard },
    { name: 'Classes', href: '/dashboard/student/classes', icon: GraduationCap },
    { name: 'Calendar', href: '/dashboard/student/calendar', icon: Calendar },
    { name: 'Messages', href: '/dashboard/student/messages', icon: MessageSquare },
  ],
  parent: [
    { name: 'Dashboard', href: '/dashboard/parent', icon: LayoutDashboard },
    { name: 'Progress', href: '/dashboard/parent/progress', icon: GraduationCap },
    { name: 'Messages', href: '/dashboard/parent/messages', icon: MessageSquare },
  ],
};

interface DashboardSidebarProps {
  role: keyof typeof roleRoutes;
}

export function DashboardSidebar({ role }: DashboardSidebarProps) {
  const pathname = usePathname();
  const routes = roleRoutes[role];

  return (
    <div className="w-64 bg-card h-full border-r">
      <nav className="p-4 space-y-2">
        {routes.map((route) => {
          const Icon = route.icon;
          return (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                'flex items-center space-x-3 px-3 py-2 rounded-md text-sm transition-colors',
                pathname === route.href
                  ? 'bg-secondary text-secondary-foreground'
                  : 'hover:bg-secondary/50'
              )}
            >
              <Icon className="h-4 w-4" />
              <span>{route.name}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}