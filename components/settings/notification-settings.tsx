'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

export function NotificationSettings() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Notification Preferences</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center space-x-2">
          <Checkbox id="attendance" defaultChecked />
          <Label htmlFor="attendance">Attendance Updates</Label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="grades" defaultChecked />
          <Label htmlFor="grades">Grade Changes</Label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="announcements" defaultChecked />
          <Label htmlFor="announcements">School Announcements</Label>
        </div>
        <Button>Save Changes</Button>
      </CardContent>
    </Card>
  );
}