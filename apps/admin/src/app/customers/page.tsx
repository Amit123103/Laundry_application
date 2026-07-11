import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";

export default function CustomersPage() {
  const mockCustomers = [
    { id: "CUST-001", name: "Rahul Sharma", phone: "+91 9876543210", orders: 12, spent: 4500 },
    { id: "CUST-002", name: "Amit Singh", phone: "+91 8765432109", orders: 3, spent: 850 },
    { id: "CUST-003", name: "Priya Patel", phone: "+91 7654321098", orders: 5, spent: 2100 },
  ];

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Customers</h1>
          <p className="text-gray-500">Manage and view customer history.</p>
        </div>
        <Button>Export List</Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Customer Directory</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Phone</TableHead>
                <TableHead>Total Orders</TableHead>
                <TableHead className="text-right">Total Spent (₹)</TableHead>
                <TableHead className="w-[50px]"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockCustomers.map((cust) => (
                <TableRow key={cust.id}>
                  <TableCell className="font-medium">{cust.id}</TableCell>
                  <TableCell>{cust.name}</TableCell>
                  <TableCell>{cust.phone}</TableCell>
                  <TableCell>{cust.orders}</TableCell>
                  <TableCell className="text-right">₹{cust.spent}</TableCell>
                  <TableCell>
                    <Button variant="outline" size="sm">View</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
