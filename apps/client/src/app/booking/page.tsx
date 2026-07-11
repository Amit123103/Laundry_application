"use client";

import { useState, useEffect, Suspense } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, ArrowRight, ArrowLeft, Send } from "lucide-react";
import { useSearchParams } from "next/navigation";

function BookingWizardContent() {
  const searchParams = useSearchParams();
  const preSelectedService = searchParams.get("service");

  const [step, setStep] = useState(1);
  const totalSteps = 4;
  
  // Form State
  const [services, setServices] = useState<string[]>([]);
  
  // Step 2 State
  const [fullName, setFullName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [addressType, setAddressType] = useState("");
  const [fullAddress, setFullAddress] = useState("");
  
  // Step 3 State
  const [pickupTime, setPickupTime] = useState("");
  const [deliverySpeed, setDeliverySpeed] = useState("");
  
  // Order Generation
  const [orderNumber] = useState(`LD24-${Math.floor(1000 + Math.random() * 9000)}`);
  
  useEffect(() => {
    if (preSelectedService && !services.includes(preSelectedService)) {
      setServices([preSelectedService]);
    }
  }, [preSelectedService]);

  const handleNext = () => setStep(s => Math.min(totalSteps, s + 1));
  const handleBack = () => setStep(s => Math.max(1, s - 1));
  
  const isStepValid = () => {
    if (step === 1) return services.length > 0;
    if (step === 2) return fullName.trim() !== "" && mobileNumber.trim() !== "" && addressType !== "" && fullAddress.trim() !== "";
    if (step === 3) return pickupTime !== "" && deliverySpeed !== "";
    return true;
  };

  const generateWhatsAppLink = () => {
    const phone = "919876543210"; // Owner phone
    const orderDate = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });
    
    const text = `*New Order Alert - LightningFast Laundry* 🚀
    
*Order Number:* ${orderNumber}
*Date & Time:* ${orderDate}

*👤 Customer Details:*
*Name:* ${fullName}
*Mobile:* ${mobileNumber}

*📍 Address Details:*
*Area:* ${addressType}
*Full Address:* ${fullAddress}

*👕 Order Details:*
*Services:* ${services.join(', ')}
*Pickup Time:* ${pickupTime}
*Delivery Speed:* ${deliverySpeed}

*Estimated Total:* ₹450 (Final price calculated after weighing)

Please confirm this order!`;
    return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="w-full max-w-3xl px-4">
      {/* Progress Bar */}
      <div className="mb-8 flex items-center justify-between relative">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-gray-200 dark:bg-gray-800 -z-10 rounded-full overflow-hidden">
           <div className="h-full bg-blue-600 transition-all duration-500" style={{ width: `${((step-1)/(totalSteps-1))*100}%`}} />
        </div>
        {[1,2,3,4].map(i => (
          <div key={i} className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm border-2 transition-colors ${step >= i ? 'bg-blue-600 border-blue-600 text-white' : 'bg-white border-gray-300 text-gray-500 dark:bg-black dark:border-gray-700'}`}>
            {step > i ? <CheckCircle2 className="w-5 h-5" /> : i}
          </div>
        ))}
      </div>

      <Card className="shadow-2xl shadow-gray-200/50 dark:shadow-none border-gray-200/60">
        <CardHeader>
          <CardTitle className="text-2xl">
            {step === 1 && "Select Services"}
            {step === 2 && "Personal Details"}
            {step === 3 && "Pickup & Delivery"}
            {step === 4 && "Order Summary"}
          </CardTitle>
          <CardDescription>
            {step === 1 && "Choose what you need done today."}
            {step === 2 && "Where should we pick up your laundry?"}
            {step === 3 && "Schedule your pickup and delivery preferences."}
            {step === 4 && "Review your order and confirm via WhatsApp."}
          </CardDescription>
        </CardHeader>
        <CardContent>
          {/* Step 1: Services */}
          {step === 1 && (
            <div className="grid grid-cols-2 gap-4">
              {["Wash & Fold", "Dry Cleaning", "Ironing", "Premium Care"].map(srv => (
                <div 
                  key={srv} 
                  onClick={() => setServices(prev => prev.includes(srv) ? prev.filter(s => s !== srv) : [...prev, srv])}
                  className={`p-4 border rounded-xl cursor-pointer transition-all ${services.includes(srv) ? 'border-blue-600 bg-blue-50 dark:bg-blue-900/20' : 'hover:border-blue-300 dark:hover:border-blue-800'}`}
                >
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-semibold">{srv}</h4>
                    {services.includes(srv) && <CheckCircle2 className="w-5 h-5 text-blue-600" />}
                  </div>
                  <p className="text-xs text-gray-500">Premium care for your garments.</p>
                </div>
              ))}
            </div>
          )}

          {/* Step 2: Personal Details */}
          {step === 2 && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Full Name <span className="text-red-500">*</span></Label>
                  <Input 
                    placeholder="John Doe" 
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label>Mobile Number <span className="text-red-500">*</span></Label>
                  <Input 
                    placeholder="+91 9876543210" 
                    value={mobileNumber}
                    onChange={(e) => setMobileNumber(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label>Address Area <span className="text-red-500">*</span></Label>
                <Select value={addressType} onValueChange={setAddressType}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Area" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Law Gate">Law Gate</SelectItem>
                    <SelectItem value="Green Valley">Green Valley</SelectItem>
                    <SelectItem value="Other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2 mt-4">
                <Label>Full Address <span className="text-red-500">*</span></Label>
                <Input 
                  placeholder="House No, Street, City" 
                  value={fullAddress}
                  onChange={(e) => setFullAddress(e.target.value)}
                  required
                />
              </div>
            </div>
          )}

          {/* Step 3: Pickup & Delivery */}
          {step === 3 && (
            <div className="space-y-6">
              <div className="space-y-3">
                <Label className="text-base">Pickup Time <span className="text-red-500">*</span></Label>
                <div className="grid grid-cols-2 gap-3">
                  <div 
                    onClick={() => setPickupTime("Today (2:00 PM - 4:00 PM)")}
                    className={`p-3 border rounded-lg cursor-pointer transition-all ${pickupTime.includes("Today") ? 'border-blue-600 bg-blue-50 dark:bg-blue-900/20' : 'hover:border-gray-400'}`}
                  >
                    <div className="font-semibold flex items-center justify-between">
                      Today
                      {pickupTime.includes("Today") && <CheckCircle2 className="w-4 h-4 text-blue-600" />}
                    </div>
                    <div className="text-xs text-gray-500">2:00 PM - 4:00 PM</div>
                  </div>
                  <div 
                    onClick={() => setPickupTime("Tomorrow (Morning Slot)")}
                    className={`p-3 border rounded-lg cursor-pointer transition-all ${pickupTime.includes("Tomorrow") ? 'border-blue-600 bg-blue-50 dark:bg-blue-900/20' : 'hover:border-gray-400'}`}
                  >
                    <div className="font-semibold flex items-center justify-between">
                      Tomorrow
                      {pickupTime.includes("Tomorrow") && <CheckCircle2 className="w-4 h-4 text-blue-600" />}
                    </div>
                    <div className="text-xs text-gray-500">Morning Slot</div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-3">
                <Label className="text-base">Delivery Speed <span className="text-red-500">*</span></Label>
                <div className="grid grid-cols-2 gap-3">
                  <div 
                    onClick={() => setDeliverySpeed("Standard (48 Hrs)")}
                    className={`p-3 border rounded-lg cursor-pointer transition-all ${deliverySpeed.includes("Standard") ? 'border-blue-600 bg-blue-50 dark:bg-blue-900/20' : 'hover:border-gray-400'}`}
                  >
                    <div className="font-semibold flex items-center justify-between">
                      Standard 
                      <div className="flex items-center gap-2">
                        <Badge variant="outline">48 Hrs</Badge>
                        {deliverySpeed.includes("Standard") && <CheckCircle2 className="w-4 h-4 text-blue-600" />}
                      </div>
                    </div>
                    <div className="text-xs text-gray-500 mt-1">Regular pricing</div>
                  </div>
                  <div 
                    onClick={() => setDeliverySpeed("Express (24 Hrs)")}
                    className={`p-3 border rounded-lg cursor-pointer transition-all ${deliverySpeed.includes("Express") ? 'border-blue-600 bg-blue-50 dark:bg-blue-900/20' : 'hover:border-gray-400'}`}
                  >
                    <div className="font-semibold flex items-center justify-between">
                      Express 
                      <div className="flex items-center gap-2">
                        <Badge variant="default" className="bg-orange-500 text-white hover:bg-orange-600">24 Hrs</Badge>
                        {deliverySpeed.includes("Express") && <CheckCircle2 className="w-4 h-4 text-blue-600" />}
                      </div>
                    </div>
                    <div className="text-xs text-gray-500 mt-1">1.5x Surcharge</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 4: Summary */}
          {step === 4 && (
            <div className="space-y-6">
              <div className="bg-gray-50 dark:bg-zinc-900 p-6 rounded-xl space-y-4">
                <div className="flex justify-between border-b border-gray-200 dark:border-gray-800 pb-2">
                  <span className="text-gray-500">Order Number</span>
                  <span className="font-medium text-right text-blue-600">{orderNumber}</span>
                </div>
                <div className="flex justify-between border-b border-gray-200 dark:border-gray-800 pb-2">
                  <span className="text-gray-500">Services</span>
                  <span className="font-medium text-right">{services.length ? services.join(', ') : 'None selected'}</span>
                </div>
                <div className="flex justify-between border-b border-gray-200 dark:border-gray-800 pb-2">
                  <span className="text-gray-500">Estimated Total</span>
                  <span className="font-bold text-lg text-blue-600">₹450</span>
                </div>
                <p className="text-xs text-gray-400">Final price will be calculated after weighing your clothes at pickup.</p>
              </div>
            </div>
          )}
        </CardContent>
        
        <CardFooter className="flex justify-between border-t p-6">
          <Button variant="ghost" onClick={handleBack} disabled={step === 1}>
            <ArrowLeft className="w-4 h-4 mr-2" /> Back
          </Button>
          {step < totalSteps ? (
            <Button onClick={handleNext} disabled={!isStepValid()}>
              Next <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          ) : (
            <a href={generateWhatsAppLink()} target="_blank" rel="noopener noreferrer">
              <Button className="bg-[#25D366] hover:bg-[#128C7E] text-white">
                Confirm & Send <Send className="w-4 h-4 ml-2" />
              </Button>
            </a>
          )}
        </CardFooter>
      </Card>
    </div>
  );
}

export default function BookingWizard() {
  return (
    <div className="min-h-screen pt-24 pb-12 bg-gray-50 dark:bg-zinc-950 flex flex-col items-center">
      <Suspense fallback={<div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" />}>
        <BookingWizardContent />
      </Suspense>
    </div>
  );
}
