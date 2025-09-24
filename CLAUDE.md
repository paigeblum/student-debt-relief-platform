# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
# Start development server
npm run dev

# Database operations
npm run db:push          # Push schema changes to database
npm run db:migrate       # Run database migrations
npm run db:generate      # Generate Prisma client
npm run db:seed          # Seed database with sample data
npm run db:studio        # Open Prisma Studio

# Code quality
npm run lint             # Run ESLint
npm run typecheck        # Run TypeScript type checking

# Build and deployment
npm run build            # Build for production
npm run start            # Start production server
```

## Architecture Overview

This is a full-stack student debt relief platform built with Next.js 14, featuring role-based authentication and multiple donation pathways.

### Core Architecture

- **Next.js 14**: App Router with TypeScript and server components
- **Database**: PostgreSQL with Prisma ORM, comprehensive schema with role-based access
- **Authentication**: NextAuth.js with Google OAuth and magic links, three user roles (ADMIN, STUDENT, DONOR)
- **Payments**: Stripe integration with webhook handling for three donation types
- **File Uploads**: UploadThing integration for document verification

### Database Schema Structure

The Prisma schema supports three user roles with distinct profiles:

- **Students**: Full verification system with loan details, document uploads, and anonymity controls
- **Donors**: Preference management and Stripe customer integration
- **Admins**: Comprehensive action tracking and verification workflows

Key entities include:
- Donations with multiple types (General Fund, Individual Student, Group Campaigns)
- Document verification system with admin approval workflow
- Group campaigns with allocation percentages
- Notification system for all user interactions

### Key Integration Points

- **Stripe**: Payment processing with webhook verification at `/api/webhooks/stripe`
- **Plaid**: Mock loan verification integration (sandbox mode)
- **UploadThing**: Document upload handling at `/api/uploadthing`
- **NextAuth**: Authentication API at `/api/auth/[...nextauth]`

### Folder Structure

- `/app` - Next.js 14 app directory with nested routing
- `/components` - Organized by feature (ui, forms, dashboard, navigation, etc.)
- `/lib` - Core utilities (auth, prisma, stripe, validation)
- `/prisma` - Database schema and seed data
- `/types` - TypeScript definitions including NextAuth extensions

### Development Patterns

- Server components by default, client components marked with 'use client'
- Form validation with react-hook-form and Zod schemas
- Database operations through Prisma with proper error handling
- Role-based routing and component access control
- Responsive design with Tailwind CSS and shadcn/ui components

### Environment Configuration

Critical environment variables include database URL, NextAuth configuration, Stripe keys, and integration credentials. See `.env.example` for complete list.

The application uses different configurations for development (`.env.local`) and production (Vercel environment variables).