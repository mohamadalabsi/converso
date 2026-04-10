# Converso

Converso is a full-stack AI SaaS learning platform where users can create AI companions, talk to them in real time, and learn subjects through interactive voice sessions.

The app combines authentication, subscription limits, real-time voice AI, and persistent learning history into one modern web product.

## What This App Is For

Converso helps learners study with personalized AI tutors (called companions). Instead of static lessons, users can have live voice conversations with AI and learn topics like maths, science, coding, history, and more.

Main goals:
- Learn by talking to an AI companion
- Build custom companions for specific subjects/topics
- Track session history and learning activity
- Unlock more companion creation with subscription plans

## Core Features

- AI companion builder with custom:
	- Name
	- Subject
	- Topic
	- Voice (male/female)
	- Style (formal/casual)
	- Session duration
- Real-time voice sessions using Vapi
- Live transcript streaming during sessions
- Session history tracking per user
- Companion discovery and search
- User dashboard (My Journey)
- Authentication and user management with Clerk
- Subscription and pricing flow with Clerk Pricing Table
- Companion limits by plan/feature access
- Data persistence with Supabase

## Tech Stack

Frontend:
- Next.js 16.2.1 (App Router)
- React 19
- TypeScript (strict)
- Tailwind CSS v4
- Radix UI + shadcn style components
- React Hook Form + Zod
- Lottie animations

Backend and Platform:
- Next.js Server Actions
- Supabase (database)
- Clerk (auth + plans/features + user profile)
- Vapi Web SDK (real-time voice AI)

Monitoring and DX:
- Sentry for error monitoring
- ESLint for linting

## Project Structure

- app: routes and pages
	- app/page.tsx: home page (popular companions + recent sessions)
	- app/companions: companions library
	- app/companions/new: create companion page
	- app/companions/[id]: live companion session page
	- app/my-journey: user profile and history
	- app/Subscription: subscription page
	- app/sign-in: authentication route
- components: reusable UI and feature components
- lib/actions: server actions for companions and sessions
- lib/supabase.ts: Supabase client with Clerk access token integration
- lib/vapi.sdk.ts: Vapi client initialization
- constants: subjects, voices, UI constants
- types: global TS types

## How It Works

1. User signs in with Clerk.
2. User creates a companion from the Companion Builder.
3. Companion is saved in Supabase.
4. User starts a live session with Vapi on the companion page.
5. Transcripts stream in real time.
6. Completed sessions are stored in session history.
7. User can review progress in My Journey.

## Environment Variables

Create a .env.local file in the project root.

Required for this codebase:
- NEXT_PUBLIC_SUPABASE_URL
- NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY
- NEXT_PUBLIC_VAPI_WEB_TOKEN

Also required for auth/subscription setup (Clerk):
- NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY
- CLERK_SECRET_KEY

Depending on your Clerk setup, you may also need sign-in/sign-up URL variables.

## Local Development

Prerequisites:
- Node.js 20+
- npm
- A configured Supabase project
- A configured Clerk app (auth + plans/features)
- A Vapi token

Install dependencies:

npm install

Run development server:

npm run dev

Open:

http://localhost:3000

## Available Scripts

- npm run dev: Start development server
- npm run build: Create production build
- npm run start: Start production server
- npm run lint: Run ESLint

## Subscription and Limits

Companion creation permissions are enforced with Clerk feature/plan checks:
- Pro plan can create companions without the lower-tier cap
- Feature-based limits such as 3 or 10 companions are supported

If user limit is reached, the app shows an upgrade CTA and links to subscription.

## Notes

- This project uses Next.js 16 and React 19.
- Styling uses Tailwind v4 with tw-animate-css.
- The app is designed as a real-time AI teaching experience, not just static content delivery.

## Roadmap Ideas

- Bookmarks/favorites for companions
- Rich analytics for learning progress
- Multi-language support
- Group/classroom learning sessions
- Better search and filters in companion library

## License

Add your preferred license here (MIT, Apache-2.0, or proprietary).
