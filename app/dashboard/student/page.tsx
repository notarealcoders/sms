'use client';

import { DashboardLayout } from '@/components/layout/dashboard-layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen, Clock, Calendar } from 'lucide-react';

export default function StudentDashboard() {
  const stats = [
    { title: 'Current Courses', value: '6', icon: BookOpen },
    { title: 'Classes Today', value: '4', icon: Clock },
    { title: 'Assignments Due', value: '3', icon: Calendar },
  ];

  return (
    <DashboardLayout role="student">
      <h1 className="text-3xl font-bold mb-8">Student Dashboard</h1>
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