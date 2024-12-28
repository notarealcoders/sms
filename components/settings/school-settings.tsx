'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

export function SchoolSettings() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>School Information</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="schoolName">School Name</Label>
          <Input id="schoolName" defaultValue="Demo School" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="address">Address</Label>
          <Input id="address" defaultValue="123 Education St" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Phone</Label>
          <Input id="phone" defaultValue="+1 234 567 8900" />
        </div>
        <Button>Save Changes</Button>
      </CardContent>
    </Card>
  );
}