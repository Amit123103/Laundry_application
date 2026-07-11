"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  ShoppingCart,
  Users,
  Settings,
  Tags,
  Percent,
  List,
  Droplet,
  Zap
} from "lucide-react";

const navItems = [
  { name: "Dashboard", href: "/", icon: LayoutDashboard },
  { name: "Orders", href: "/orders", icon: ShoppingCart },
  { name: "Services", href: "/services", icon: List },
  { name: "Pricing", href: "/pricing", icon: Tags },
  { name: "Customers", href: "/customers", icon: Users },
  { name: "Coupons", href: "/coupons", icon: Percent },
  { name: "Settings", href: "/settings", icon: Settings },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="flex h-full w-64 flex-col border-r bg-white/60 backdrop-blur-xl dark:bg-black/60 dark:border-white/10">
      <div className="flex h-16 items-center px-6 border-b dark:border-white/10">
        <Link href="/" className="flex items-center gap-2 font-extrabold text-2xl tracking-tight text-blue-700">
          <div className="relative flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white shadow-md">
            <Droplet className="w-5 h-5 absolute" />
            <Zap className="w-3 h-3 text-yellow-400 absolute fill-yellow-400" />
          </div>
          LightningFast<span className="text-gray-500 font-light">Laundry</span>
        </Link>
      </div>
      <div className="flex-1 overflow-auto py-4">
        <nav className="grid gap-1 px-4">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all hover:bg-emerald-50 dark:hover:bg-white/10",
                  isActive ? "bg-emerald-100/50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400" : "text-gray-600 dark:text-gray-400"
                )}
              >
                <item.icon className="h-5 w-5" />
                {item.name}
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
