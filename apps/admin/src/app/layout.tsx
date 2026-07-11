import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AdminGuard } from "@/components/auth/AdminGuard";
import { DashboardLayout } from "@/components/layout/DashboardLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LightningFast Laundry Admin",
  description: "Admin panel for LightningFast Laundry Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gradient-to-br from-emerald-50 via-white to-emerald-50/50 dark:from-black dark:via-emerald-950/10 dark:to-black text-gray-900 dark:text-gray-50 min-h-screen`}>
        <AdminGuard>
          <DashboardLayout>
            {children}
          </DashboardLayout>
        </AdminGuard>
      </body>
    </html>
  );
}
