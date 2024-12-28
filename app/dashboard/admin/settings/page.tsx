'use client';

import { DashboardLayout } from '@/components/layout/dashboard-layout';
import { SettingsTabs } from '@/components/settings/settings-tabs';

export default function SettingsPage() {
  return (
    <DashboardLayout role="admin">
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">Settings</h1>
        <SettingsTabs />
      </div>
    </DashboardLayout>
  );
}