"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { auth } from "@laundry24/firebase";
import { RecaptchaVerifier, signInWithPhoneNumber, ConfirmationResult } from "firebase/auth";
import { useRouter } from "next/navigation";

// Required for RecaptchaVerifier on window object
declare global {
  interface Window {
    recaptchaVerifier: any;
  }
}

const ADMIN_PHONE = "+919056038595";

export default function AdminLogin() {
  const router = useRouter();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");
  const [error, setError] = useState("");
  
  // Auth state
  const [showOtpInput, setShowOtpInput] = useState(false);
  const [confirmationResult, setConfirmationResult] = useState<ConfirmationResult | null>(null);

  useEffect(() => {
    // Initialize RecaptchaVerifier
    if (typeof window !== "undefined" && !window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
        'size': 'invisible',
      });
    }
  }, []);

  const handleSendOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Strict admin phone validation
    const cleanPhone = phoneNumber.replace(/\s+/g, '');
    if (cleanPhone !== ADMIN_PHONE) {
      setError(`Unauthorized. Only ${ADMIN_PHONE} is allowed to access the admin portal.`);
      return;
    }

    setLoading(true);
    setError("");
    setMsg("");
    
    try {
      const appVerifier = window.recaptchaVerifier;
      if (!appVerifier) throw new Error("Recaptcha not initialized");
      
      const confirmation = await signInWithPhoneNumber(auth, cleanPhone, appVerifier);
      setConfirmationResult(confirmation);
      setShowOtpInput(true);
      setMsg("OTP sent successfully to your mobile number.");
    } catch (err: any) {
      console.error(err);
      setError(err.message || "Failed to send OTP. Try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!confirmationResult) return;
    
    setLoading(true);
    setError("");
    
    try {
      await confirmationResult.confirm(otp);
      // Successful login will trigger AdminGuard to redirect to /
      router.push("/");
    } catch (err: any) {
      console.error(err);
      setError(err.message || "Invalid OTP. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-emerald-50/50 dark:from-black dark:via-emerald-950/10 dark:to-black flex flex-col items-center justify-center p-4 relative overflow-hidden">
      
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/20 rounded-full blur-3xl opacity-60 pointer-events-none" />

      <Card className="w-full max-w-md shadow-2xl bg-white/80 dark:bg-black/80 backdrop-blur-xl border-white/20 dark:border-gray-800 relative z-10">
        <CardHeader className="space-y-2 text-center">
          <CardTitle className="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-500 dark:from-white dark:to-gray-400">
            Admin Portal
          </CardTitle>
          <CardDescription>
            {showOtpInput ? "Enter the OTP sent to your phone." : "Secure login via Phone OTP."}
          </CardDescription>
        </CardHeader>
        <CardContent>
          {error && <div className="p-3 mb-4 text-sm text-red-500 bg-red-50 dark:bg-red-950/30 rounded-lg">{error}</div>}
          {msg && <div className="p-3 mb-4 text-sm text-green-600 bg-green-50 dark:bg-green-950/30 rounded-lg">{msg}</div>}

          {!showOtpInput ? (
            <form onSubmit={handleSendOtp} className="space-y-4">
              <div className="space-y-2 text-left">
                <Label htmlFor="phone">Admin Mobile Number</Label>
                <Input 
                  id="phone" 
                  type="tel" 
                  placeholder="+91 90560 38595" 
                  value={phoneNumber} 
                  onChange={e => setPhoneNumber(e.target.value)} 
                  required 
                />
              </div>

              <div id="recaptcha-container"></div>

              <Button type="submit" disabled={loading} className="w-full bg-black hover:bg-gray-800 text-white dark:bg-white dark:text-black">
                {loading ? "Sending OTP..." : "Send OTP"}
              </Button>
            </form>
          ) : (
            <form onSubmit={handleVerifyOtp} className="space-y-4">
              <div className="space-y-2 text-left">
                <Label htmlFor="otp">6-Digit OTP</Label>
                <Input 
                  id="otp" 
                  type="text" 
                  placeholder="123456" 
                  value={otp} 
                  onChange={e => setOtp(e.target.value)} 
                  required 
                  maxLength={6}
                />
              </div>

              <Button type="submit" disabled={loading} className="w-full bg-black hover:bg-gray-800 text-white dark:bg-white dark:text-black">
                {loading ? "Verifying..." : "Verify & Login"}
              </Button>
              
              <Button type="button" variant="ghost" className="w-full mt-2" onClick={() => setShowOtpInput(false)}>
                Use a different number
              </Button>
            </form>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
