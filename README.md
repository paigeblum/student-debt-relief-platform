# Student Debt Relief Platform

A full-stack Next.js application that connects students with donors to provide debt relief and educational support.

## Features

- **Role-based Authentication**: Support for Students, Donors, and Admins with NextAuth
- **Student Profiles**: Comprehensive profiles with anonymity controls
- **Multiple Donation Paths**:
  - General Fund (tax deductible)
  - Individual Student donations (not tax deductible)
  - Group campaigns (varies)
- **Stripe Integration**: Secure payment processing in test mode
- **Mock Plaid Integration**: Loan verification system
- **Admin Dashboard**: Verification and fund distribution management
- **File Uploads**: Complete document upload functionality
- **Responsive Design**: Built with Tailwind CSS

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: NextAuth.js
- **Payments**: Stripe
- **File Uploads**: UploadThing
- **Deployment**: Vercel-ready

## Getting Started

### Prerequisites

- Node.js 18+
- PostgreSQL database
- Stripe account (test mode)
- Google OAuth credentials (optional)

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd student-debt-relief-platform
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your configuration
   ```

4. Set up the database:
   ```bash
   npm run db:push
   npm run db:seed
   ```

5. Start the development server:
   ```bash
   npm run dev
   ```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run typecheck` - Run TypeScript type checking
- `npm run db:push` - Push schema changes to database
- `npm run db:migrate` - Run database migrations
- `npm run db:generate` - Generate Prisma client
- `npm run db:seed` - Seed database with sample data
- `npm run db:studio` - Open Prisma Studio

## Project Structure

```
├── app/                    # Next.js 14 app directory
│   ├── api/               # API routes
│   ├── auth/              # Authentication pages
│   ├── dashboard/         # Dashboard pages
│   ├── admin/             # Admin pages
│   └── ...
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   ├── forms/            # Form components
│   └── ...
├── lib/                   # Utility functions
├── prisma/               # Database schema and migrations
├── types/                # TypeScript type definitions
└── providers/            # Context providers
```

## Environment Variables

See `.env.example` for all required environment variables.

### Required for Development
- `DATABASE_URL` - PostgreSQL connection string
- `NEXTAUTH_URL` - Application URL
- `NEXTAUTH_SECRET` - NextAuth secret key

### Optional but Recommended
- `GOOGLE_CLIENT_ID` & `GOOGLE_CLIENT_SECRET` - Google OAuth
- `STRIPE_PUBLISHABLE_KEY` & `STRIPE_SECRET_KEY` - Stripe payments
- `UPLOADTHING_SECRET` & `UPLOADTHING_APP_ID` - File uploads

## Deployment

This application is configured for deployment on Vercel:

1. Connect your GitHub repository to Vercel
2. Set up environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.