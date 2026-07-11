"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { IndianRupee, ShoppingBag, Users, Clock, Loader2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { db } from "@laundry24/firebase";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";

interface Order {
  id: string;
  orderNumber: string;
  customer: string;
  date: string;
  total: number;
  status: string;
}

export default function Dashboard() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const q = query(collection(db, "orders"), orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const fetchedOrders = snapshot.docs.map(doc => ({
        id: doc.id,
        orderNumber: doc.data().orderNumber || doc.id,
        customer: doc.data().customer || "Unknown",
        date: doc.data().createdAt?.toDate().toLocaleDateString() || "Today",
        total: doc.data().total || 450,
        status: doc.data().status || "Pending"
      }));
      setOrders(fetchedOrders);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const totalRevenue = orders.reduce((sum, o) => sum + o.total, 0);
  const pendingCount = orders.filter(o => o.status === "Pending").length;
  const uniqueCustomers = new Set(orders.map(o => o.customer)).size;
  return (
    <div className="flex flex-col gap-8 relative z-10">
      
      {/* Background Glows (matches client app aesthetic) */}
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-3xl opacity-50 pointer-events-none -z-10" />
      <div className="absolute top-40 left-0 w-[500px] h-[500px] bg-white/40 dark:bg-emerald-700/10 rounded-full blur-3xl opacity-50 pointer-events-none -z-10" />

      <div className="flex flex-col gap-2">
        <h1 className="text-4xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-500 dark:from-white dark:to-gray-400">
          Admin Dashboard
        </h1>
        <p className="text-gray-500 dark:text-gray-400 text-lg">Overview of your laundry platform today.</p>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card className="bg-white/80 dark:bg-black/80 backdrop-blur-md shadow-xl shadow-gray-200/40 dark:shadow-none border-gray-100 dark:border-gray-800">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-semibold text-gray-500">Total Revenue</CardTitle>
            <div className="w-8 h-8 rounded-full bg-emerald-50 dark:bg-emerald-900/20 flex items-center justify-center">
              <IndianRupee className="h-4 w-4 text-emerald-600" />
            </div>
          </CardHeader>
          <CardContent>
            {loading ? <Loader2 className="w-6 h-6 animate-spin text-gray-400" /> : <div className="text-3xl font-black mb-1">₹{totalRevenue.toLocaleString('en-IN')}</div>}
            <Badge variant="secondary" className="bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400 font-medium">
              +20.1% this month
            </Badge>
          </CardContent>
        </Card>

        <Card className="bg-white/80 dark:bg-black/80 backdrop-blur-md shadow-xl shadow-gray-200/40 dark:shadow-none border-gray-100 dark:border-gray-800">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-semibold text-gray-500">Orders Today</CardTitle>
            <div className="w-8 h-8 rounded-full bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center">
              <ShoppingBag className="h-4 w-4 text-blue-600" />
            </div>
          </CardHeader>
          <CardContent>
            {loading ? <Loader2 className="w-6 h-6 animate-spin text-gray-400" /> : <div className="text-3xl font-black mb-1">{orders.length}</div>}
            <Badge variant="secondary" className="bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400 font-medium">
              +19% from yesterday
            </Badge>
          </CardContent>
        </Card>

        <Card className="bg-white/80 dark:bg-black/80 backdrop-blur-md shadow-xl shadow-gray-200/40 dark:shadow-none border-gray-100 dark:border-gray-800">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-semibold text-gray-500">Active Customers</CardTitle>
            <div className="w-8 h-8 rounded-full bg-purple-50 dark:bg-purple-900/20 flex items-center justify-center">
              <Users className="h-4 w-4 text-purple-600" />
            </div>
          </CardHeader>
          <CardContent>
            {loading ? <Loader2 className="w-6 h-6 animate-spin text-gray-400" /> : <div className="text-3xl font-black mb-1">{uniqueCustomers}</div>}
            <p className="text-xs text-gray-500 font-medium mt-2">+104 this week</p>
          </CardContent>
        </Card>

        <Card className="bg-white/80 dark:bg-black/80 backdrop-blur-md shadow-xl shadow-gray-200/40 dark:shadow-none border-gray-100 dark:border-gray-800">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-semibold text-gray-500">Pending Pickups</CardTitle>
            <div className="w-8 h-8 rounded-full bg-orange-50 dark:bg-orange-900/20 flex items-center justify-center">
              <Clock className="h-4 w-4 text-orange-600" />
            </div>
          </CardHeader>
          <CardContent>
            {loading ? <Loader2 className="w-6 h-6 animate-spin text-gray-400" /> : <div className="text-3xl font-black mb-1">{pendingCount}</div>}
            <Badge variant="destructive" className="bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400 font-medium shadow-none">
              Requires assignment
            </Badge>
          </CardContent>
        </Card>
      </div>
      
      {/* Chart and Recent Orders Placeholders */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4 bg-white/80 dark:bg-black/80 backdrop-blur-md shadow-xl shadow-gray-200/40 dark:shadow-none border-gray-100 dark:border-gray-800">
          <CardHeader>
            <CardTitle className="text-xl font-bold">Revenue Overview</CardTitle>
          </CardHeader>
          <CardContent className="pl-2 flex justify-center items-center h-[300px] border-dashed border-2 m-4 rounded-2xl border-gray-200 dark:border-gray-800">
            <span className="text-gray-400 font-medium">Chart Component (Framer Motion / Recharts)</span>
          </CardContent>
        </Card>
        
        <Card className="col-span-3 bg-white/80 dark:bg-black/80 backdrop-blur-md shadow-xl shadow-gray-200/40 dark:shadow-none border-gray-100 dark:border-gray-800">
          <CardHeader>
            <CardTitle className="text-xl font-bold">Recent Orders</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {loading ? (
                <div className="flex justify-center p-4"><Loader2 className="w-6 h-6 animate-spin text-gray-400" /></div>
              ) : orders.length === 0 ? (
                <div className="text-gray-500 text-sm">No orders yet.</div>
              ) : (
                orders.slice(0, 5).map((order) => (
                  <div key={order.id} className="flex items-center gap-4 group">
                    <div className="h-10 w-10 rounded-full bg-emerald-50 dark:bg-emerald-900/20 flex items-center justify-center text-emerald-600 text-sm font-bold group-hover:scale-110 transition-transform">
                      {order.customer.charAt(0).toUpperCase()}
                    </div>
                    <div className="grid gap-1">
                      <p className="text-sm font-bold leading-none">{order.customer}</p>
                      <p className="text-xs text-gray-500 font-medium">{order.orderNumber}</p>
                    </div>
                    <div className="ml-auto font-bold text-gray-900 dark:text-white flex items-center gap-4">
                      <Badge variant="outline">{order.status}</Badge>
                      <span>₹{order.total}</span>
                    </div>
                  </div>
                ))
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
