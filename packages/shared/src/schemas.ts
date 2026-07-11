import { z } from "zod";

export const AddressSchema = z.object({
  type: z.enum(["Law Gate", "Green Valley", "Other"]),
  houseNumber: z.string().optional(),
  street: z.string().optional(),
  landmark: z.string().optional(),
  city: z.string().optional(),
  state: z.string().optional(),
  pincode: z.string().optional(),
  googleMapUrl: z.string().url().optional(),
});

export const ClothesDetailSchema = z.object({
  itemType: z.string(),
  quantity: z.number().min(1),
  weight: z.number().min(0).optional(),
  specialInstructions: z.string().optional(),
});

export const OrderSchema = z.object({
  orderId: z.string(),
  uid: z.string(),
  customerName: z.string().min(2),
  mobile: z.string().min(10),
  altMobile: z.string().optional(),
  email: z.string().email().optional(),
  address: AddressSchema,
  clothes: z.array(ClothesDetailSchema),
  pickupDate: z.string(),
  pickupTime: z.string(),
  deliveryType: z.enum(["Standard", "24 Hours Express"]),
  status: z.enum([
    "Pending", "Accepted", "Pickup Assigned", "Picked Up", "Processing", 
    "Washing", "Drying", "Ironing", "Packing", "Out for Delivery", 
    "Delivered", "Cancelled"
  ]),
  timeline: z.array(z.object({
    status: z.string(),
    timestamp: z.string(),
    note: z.string().optional(),
  })),
  pricing: z.object({
    subtotal: z.number(),
    expressCharge: z.number(),
    pickupCharge: z.number(),
    deliveryCharge: z.number(),
    gst: z.number(),
    couponDiscount: z.number(),
    grandTotal: z.number(),
  }),
  paymentMethod: z.enum(["Cash on Delivery", "UPI", "Card", "Wallet"]),
  customerNotes: z.string().optional(),
  createdAt: z.string(),
});

export const PricingSchema = z.object({
  season: z.enum(["Summer", "Winter"]),
  mode: z.enum(["Automatic", "Manual"]),
  prices: z.object({
    basePerKg: z.number(),
    expressDeliveryCharge: z.number(),
    ironing: z.number(),
    dryCleaning: z.number(),
    blanket: z.number(),
    curtain: z.number(),
    bedsheet: z.number(),
    shoeCleaning: z.number(),
    carpetCleaning: z.number(),
    specialClothes: z.number(),
    pickupCharge: z.number(),
    deliveryCharge: z.number(),
    gstRate: z.number(),
  })
});
