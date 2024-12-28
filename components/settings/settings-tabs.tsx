'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { SchoolSettings } from './school-settings';
import { SystemSettings } from './system-settings';
import { NotificationSettings } from './notification-settings';

export function SettingsTabs() {
  return (
    <Tabs defaultValue="school" className="space-y-4">
      <TabsList>
        <TabsTrigger value="school">School</TabsTrigger>
        <TabsTrigger value="system">System</TabsTrigger>
        <TabsTrigger value="notifications">Notifications</TabsTrigger>
      </TabsList>
      <TabsContent value="school">
        <SchoolSettings />
      </TabsContent>
      <TabsContent value="system">
        <SystemSettings />
      </TabsContent>
      <TabsContent value="notifications">
        <NotificationSettings />
      </TabsContent>
    </Tabs>
  );
}