# Laundry24 Platform

Lightning Fast Laundry. Get Your Clothes Back in 24 Hours.

## Technology Stack
- **Frontend**: Next.js 15, React 19, TailwindCSS v4, Shadcn UI, Framer Motion
- **Backend**: Firebase (Firestore, Auth, Storage, Cloud Functions, Admin SDK)
- **Architecture**: Turborepo Monorepo (pnpm workspaces)

## Project Structure
- `apps/client`: User Application (Landing, Booking, Tracking)
- `apps/admin`: Admin Dashboard (Orders, Services, Pricing, Customers)
- `packages/ui`: Shared UI Components
- `packages/shared`: Shared Types and Zod Validation Schemas
- `packages/firebase`: Firebase Initialization & Admin logic
- `functions`: Firebase Cloud Functions for backend triggers

## Setup Instructions

1. **Install Dependencies:**
   ```bash
   pnpm install
   ```

2. **Run Local Development:**
   ```bash
   pnpm dev
   ```

## Firebase Setup
1. Create a Firebase Project.
2. Enable Firestore, Auth, and Storage.
3. Deploy Firestore rules and indexes:
   ```bash
   firebase deploy --only firestore
   ```
4. Deploy Cloud Functions:
   ```bash
   cd functions && npm run deploy
   ```

## Deployment (Vercel)
Deploy `apps/client` and `apps/admin` as separate Vercel projects pointing to the same repository. Ensure the `Root Directory` is set to `apps/client` or `apps/admin` respectively.
