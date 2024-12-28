'use client';

import { DashboardLayout } from '@/components/layout/dashboard-layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Clock, Calendar } from 'lucide-react';

export default function TeacherDashboard() {
  const stats = [
    { title: 'Total Students', value: '156', icon: Users },
    { title: 'Classes Today', value: '4', icon: Clock },
    { title: 'Upcoming Events', value: '3', icon: Calendar },
  ];

  return (
    <DashboardLayout role="teacher">
      <h1 className="text-3xl font-bold mb-8">Teacher Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index}>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">
                  {stat.title}
                </CardTitle>
                <Icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </DashboardLayout>
  );
}