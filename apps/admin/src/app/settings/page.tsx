import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function SettingsPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Store Settings</h1>
          <p className="text-gray-500">Manage business details and contact information.</p>
        </div>
        <Button>Save Settings</Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Business Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>Business Name</Label>
              <Input defaultValue="LightningFast Laundry" />
            </div>
            <div className="space-y-2">
              <Label>Owner WhatsApp Number</Label>
              <Input defaultValue="919876543210" />
              <p className="text-xs text-gray-500">Order notifications will be sent here.</p>
            </div>
            <div className="space-y-2">
              <Label>Store Address</Label>
              <Input defaultValue="123 Main Street, Tech Park, City" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Operating Hours</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
             <div className="space-y-2">
              <Label>Opening Time</Label>
              <Input type="time" defaultValue="08:00" />
            </div>
            <div className="space-y-2">
              <Label>Closing Time</Label>
              <Input type="time" defaultValue="22:00" />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
