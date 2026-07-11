"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, CheckCircle2, Package, Truck, WashingMachine } from "lucide-react";

export default function TrackOrder() {
  const [orderId, setOrderId] = useState("");
  const [tracking, setTracking] = useState(false);

  const statuses = [
    { title: "Order Placed", icon: Package, done: true },
    { title: "Picked Up", icon: Truck, done: true },
    { title: "Washing & Ironing", icon: WashingMachine, done: true, current: true },
    { title: "Out for Delivery", icon: Truck, done: false },
    { title: "Delivered", icon: CheckCircle2, done: false },
  ];

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    if (orderId) setTracking(true);
  };

  return (
    <div className="min-h-screen pt-24 pb-12 bg-gray-50 dark:bg-zinc-950 flex flex-col items-center">
      <div className="w-full max-w-2xl px-4 space-y-8">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Track Your Order</h1>
          <p className="text-gray-500">Enter your order ID (e.g., LD240001) to see its current status.</p>
        </div>

        <Card>
          <CardHeader>
            <form onSubmit={handleTrack} className="flex gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
                <Input 
                  placeholder="LD24XXXX" 
                  className="pl-9 h-10 text-lg uppercase"
                  value={orderId}
                  onChange={(e) => setOrderId(e.target.value.toUpperCase())}
                />
              </div>
              <Button type="submit" className="h-10 px-8">Track</Button>
            </form>
          </CardHeader>
          
          {tracking && (
            <CardContent className="pt-6 border-t border-gray-100 dark:border-gray-800">
              <div className="mb-8">
                <h3 className="font-bold text-lg mb-1">Order #{orderId}</h3>
                <p className="text-sm text-gray-500">Estimated Delivery: Tomorrow, 10:00 AM</p>
              </div>

              {/* Timeline */}
              <div className="relative pl-6 space-y-8">
                <div className="absolute left-[11px] top-2 bottom-2 w-0.5 bg-gray-200 dark:bg-gray-800" />
                
                {statuses.map((status, idx) => (
                  <div key={idx} className="relative flex gap-4 items-start">
                    <div className={`absolute -left-[30px] w-6 h-6 rounded-full flex items-center justify-center border-2 bg-white dark:bg-black transition-colors ${
                      status.current ? 'border-blue-600 shadow-[0_0_0_4px_rgba(37,99,235,0.2)]' :
                      status.done ? 'border-blue-600 bg-blue-600 text-white' : 'border-gray-300'
                    }`}>
                      {status.done && !status.current ? (
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      ) : (
                        <div className={`w-2 h-2 rounded-full ${status.current ? 'bg-blue-600' : 'bg-transparent'}`} />
                      )}
                    </div>
                    
                    <div className="pt-0.5">
                      <div className="flex items-center gap-2">
                        <status.icon className={`w-4 h-4 ${status.current ? 'text-blue-600' : status.done ? 'text-gray-700 dark:text-gray-300' : 'text-gray-400'}`} />
                        <h4 className={`font-semibold ${!status.done && !status.current ? 'text-gray-400' : ''}`}>
                          {status.title}
                        </h4>
                      </div>
                      {status.current && (
                        <p className="text-sm text-gray-500 mt-1">Your clothes are currently being processed with premium care.</p>
                      )}
                      {status.done && !status.current && (
                        <p className="text-sm text-gray-500 mt-1">Completed successfully.</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          )}
        </Card>
      </div>
    </div>
  );
}
