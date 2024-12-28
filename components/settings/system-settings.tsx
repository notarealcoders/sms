'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

export function SystemSettings() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>System Preferences</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <Label htmlFor="emailNotifications">Email Notifications</Label>
          <Switch id="emailNotifications" defaultChecked />
        </div>
        <div className="flex items-center justify-between">
          <Label htmlFor="smsNotifications">SMS Notifications</Label>
          <Switch id="smsNotifications" />
        </div>
        <div className="flex items-center justify-between">
          <Label htmlFor="maintenance">Maintenance Mode</Label>
          <Switch id="maintenance" />
        </div>
        <Button>Save Changes</Button>
      </CardContent>
    </Card>
  );
}