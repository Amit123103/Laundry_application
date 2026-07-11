import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ServicesPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Services</h1>
          <p className="text-gray-500">Manage available laundry services.</p>
        </div>
        <Button>Add Service</Button>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Active Services</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
             <div className="p-4 border rounded-xl flex flex-col gap-2">
               <h3 className="font-bold text-lg">Wash & Fold</h3>
               <p className="text-sm text-gray-500">Standard washing and folding service.</p>
               <div className="flex justify-between items-center mt-2">
                 <span className="font-semibold text-blue-600">₹80 / kg</span>
                 <Button variant="outline" size="sm">Edit</Button>
               </div>
             </div>
             <div className="p-4 border rounded-xl flex flex-col gap-2">
               <h3 className="font-bold text-lg">Dry Cleaning</h3>
               <p className="text-sm text-gray-500">Premium dry cleaning for delicate clothes.</p>
               <div className="flex justify-between items-center mt-2">
                 <span className="font-semibold text-blue-600">₹150 / piece</span>
                 <Button variant="outline" size="sm">Edit</Button>
               </div>
             </div>
             <div className="p-4 border rounded-xl flex flex-col gap-2">
               <h3 className="font-bold text-lg">Ironing</h3>
               <p className="text-sm text-gray-500">Professional steam ironing.</p>
               <div className="flex justify-between items-center mt-2">
                 <span className="font-semibold text-blue-600">₹20 / piece</span>
                 <Button variant="outline" size="sm">Edit</Button>
               </div>
             </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
