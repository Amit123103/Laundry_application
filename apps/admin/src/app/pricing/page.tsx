import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function PricingPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Pricing & Settings</h1>
          <p className="text-gray-500">Configure global platform pricing and rules.</p>
        </div>
        <Button>Save Changes</Button>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Season Configuration</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>Active Season</Label>
              <Select defaultValue="summer">
                <SelectTrigger>
                  <SelectValue placeholder="Select season" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="summer">Summer</SelectItem>
                  <SelectItem value="winter">Winter</SelectItem>
                  <SelectItem value="auto">Automatic (Based on Date)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Global Charges</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>Delivery Charge (₹)</Label>
              <Input type="number" defaultValue={50} />
            </div>
            <div className="space-y-2">
              <Label>Express 24h Multiplier (x)</Label>
              <Input type="number" step="0.1" defaultValue={1.5} />
            </div>
            <div className="space-y-2">
              <Label>GST Rate (%)</Label>
              <Input type="number" defaultValue={18} />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
