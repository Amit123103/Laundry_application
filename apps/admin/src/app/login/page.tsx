"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { auth } from "@laundry24/firebase";
import { sendSignInLinkToEmail, isSignInWithEmailLink, signInWithEmailLink } from "firebase/auth";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");
  const [error, setError] = useState("");
  const [isVerifying, setIsVerifying] = useState(false);

  useEffect(() => {
    if (isSignInWithEmailLink(auth, window.location.href)) {
      setIsVerifying(true);
      let emailForSignIn = window.localStorage.getItem("adminEmailForSignIn");
      
      if (!emailForSignIn) {
        emailForSignIn = window.prompt("Please provide your email for confirmation");
      }
      
      if (emailForSignIn) {
        signInWithEmailLink(auth, emailForSignIn, window.location.href)
          .then((result) => {
            window.localStorage.removeItem("adminEmailForSignIn");
            router.push("/");
          })
          .catch((err) => {
            setError(err.message);
            setIsVerifying(false);
          });
      }
    }
  }, [router]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setMsg("");
    
    const actionCodeSettings = {
      url: window.location.origin + '/login',
      handleCodeInApp: true,
    };
    
    try {
      await sendSignInLinkToEmail(auth, email, actionCodeSettings);
      window.localStorage.setItem("adminEmailForSignIn", email);
      setMsg("Magic link sent! Check your email to securely log in.");
    } catch (err: any) {
      setError(err.message || "Failed to send login link.");
    } finally {
      setLoading(false);
    }
  };

  if (isVerifying) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="text-center space-y-4">
          <div className="w-12 h-12 border-4 border-gray-300 border-t-black rounded-full animate-spin mx-auto"></div>
          <h2 className="text-2xl font-bold">Verifying Magic Link...</h2>
          <p className="text-gray-500">Please wait while we log you into the admin panel.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-emerald-50/50 dark:from-black dark:via-emerald-950/10 dark:to-black flex flex-col items-center justify-center p-4 relative overflow-hidden">
      
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/20 rounded-full blur-3xl opacity-60 pointer-events-none" />

      <Card className="w-full max-w-md shadow-2xl bg-white/80 dark:bg-black/80 backdrop-blur-xl border-white/20 dark:border-gray-800 relative z-10">
        <CardHeader className="space-y-2 text-center">
          <CardTitle className="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-500 dark:from-white dark:to-gray-400">
            Admin Portal
          </CardTitle>
          <CardDescription>Enter your admin email to receive a magic login link.</CardDescription>
        </CardHeader>
        <CardContent>
          {error && <div className="p-3 mb-4 text-sm text-red-500 bg-red-50 dark:bg-red-950/30 rounded-lg">{error}</div>}
          {msg && <div className="p-3 mb-4 text-sm text-green-600 bg-green-50 dark:bg-green-950/30 rounded-lg">{msg}</div>}

          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2 text-left">
              <Label htmlFor="email">Admin Email Address</Label>
              <Input 
                id="email" 
                type="email" 
                placeholder="admin@lightningfastlaundry.com" 
                value={email} 
                onChange={e => setEmail(e.target.value)} 
                required 
              />
            </div>

            <Button type="submit" disabled={loading} className="w-full bg-black hover:bg-gray-800 text-white dark:bg-white dark:text-black">
              {loading ? "Sending link..." : "Send Magic Link"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
