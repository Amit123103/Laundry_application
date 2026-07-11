"use client";

import { useEffect, useState } from "react";
import { auth } from "@laundry24/firebase";
import { onAuthStateChanged, User } from "firebase/auth";
import { useRouter, usePathname } from "next/navigation";

export function AdminGuard({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
      
      if (!user && pathname !== "/login") {
        router.push("/login");
      }
    });

    return () => unsubscribe();
  }, [pathname, router]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-zinc-950">
        <div className="animate-pulse flex flex-col items-center">
          <div className="w-12 h-12 border-4 border-gray-300 border-t-black rounded-full animate-spin"></div>
          <p className="mt-4 text-gray-500 font-medium text-sm">Authenticating Admin...</p>
        </div>
      </div>
    );
  }

  // Allow access to login page
  if (!user && pathname !== "/login") {
    return null; // Will redirect via useEffect
  }

  // Redirect away from login if already logged in
  if (user && pathname === "/login") {
    router.push("/");
    return null;
  }

  return <>{children}</>;
}
