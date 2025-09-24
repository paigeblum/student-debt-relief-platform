# Vercel Deployment Guide

This guide walks through deploying the Student Debt Relief Platform on Vercel with a production database.

## Step 1: Database Setup (Vercel Postgres)

### Option A: Vercel Postgres (Recommended)

1. **Go to Vercel Dashboard**
   - Navigate to your project
   - Go to "Storage" tab
   - Click "Create Database" → "Postgres"

2. **Create Database**
   - Choose your plan (Hobby for testing, Pro for production)
   - Select region closest to your users
   - Click "Create"

3. **Get Connection Strings**
   - After creation, go to the database settings
   - Copy the `POSTGRES_URL` for pooled connections
   - Copy the `POSTGRES_URL_NON_POOLING` for direct connections

### Option B: External Database (Railway, Supabase, AWS RDS)

1. **Create database on your chosen provider**
2. **Get the connection string in this format:**
   ```
   postgresql://username:password@host:port/database?sslmode=require
   ```

## Step 2: Environment Variables Setup

In your Vercel project settings, add these environment variables:

### Required Variables

```bash
# Database (Use your actual connection strings)
DATABASE_URL=your-postgres-url-pooled
DIRECT_DATABASE_URL=your-postgres-url-direct

# NextAuth (CRITICAL - Generate secure secret)
NEXTAUTH_URL=https://your-app.vercel.app
NEXTAUTH_SECRET=your-super-secure-secret-32-chars-minimum

# Google OAuth (Get from Google Cloud Console)
GOOGLE_CLIENT_ID=your-google-client-id.googleusercontent.com
GOOGLE_CLIENT_SECRET=your-google-client-secret

# Stripe (Get from Stripe Dashboard - USE LIVE KEYS FOR PRODUCTION)
STRIPE_PUBLISHABLE_KEY=pk_live_...
STRIPE_SECRET_KEY=sk_live_...
STRIPE_WEBHOOK_SECRET=whsec_...

# UploadThing (Get from UploadThing Dashboard)
UPLOADTHING_SECRET=sk_live_...
UPLOADTHING_APP_ID=your-app-id

# Application Configuration
APP_NAME=Boomerang
APP_URL=https://your-app.vercel.app
SUPPORT_EMAIL=support@yourdomain.com
```

### Optional Variables (for enhanced features)

```bash
# Email (for notifications - recommended)
EMAIL_SERVER_HOST=smtp.your-provider.com
EMAIL_SERVER_PORT=587
EMAIL_SERVER_USER=your-smtp-username
EMAIL_SERVER_PASSWORD=your-smtp-password
EMAIL_FROM=noreply@yourdomain.com

# Plaid (for loan verification)
PLAID_CLIENT_ID=your-plaid-client-id
PLAID_SECRET=your-plaid-secret
PLAID_ENV=production
```

## Step 3: Third-Party Service Setup

### Google OAuth Setup

1. **Go to Google Cloud Console**
2. **Create/Select Project**
3. **Enable Google+ API**
4. **Create OAuth 2.0 Credentials**
   - Application Type: Web Application
   - Authorized origins: `https://your-app.vercel.app`
   - Authorized redirect URIs: `https://your-app.vercel.app/api/auth/callback/google`

### Stripe Setup

1. **Get Stripe Account**
2. **Get API Keys** (Dashboard → API Keys)
3. **Set up Webhook Endpoint**
   - URL: `https://your-app.vercel.app/api/webhooks/stripe`
   - Events: `payment_intent.succeeded`, `payment_intent.payment_failed`

### UploadThing Setup

1. **Create UploadThing Account**
2. **Create App** and get API keys
3. **Configure file upload limits**

## Step 4: Deployment Process

### Initial Deployment

1. **Connect GitHub Repository**
   - Go to Vercel Dashboard
   - Click "New Project"
   - Import your GitHub repository

2. **Configure Build Settings**
   - Framework Preset: Next.js
   - Build Command: `npm run build`
   - Install Command: `npm install`
   - Output Directory: `.next` (default)

3. **Set Environment Variables**
   - Add all the environment variables from Step 2
   - Make sure NEXTAUTH_URL matches your Vercel domain

4. **Deploy**
   - Click "Deploy"
   - Wait for build to complete

### Post-Deployment Setup

1. **Run Database Migrations**
   ```bash
   # In your local terminal with production DATABASE_URL
   npx prisma migrate deploy

   # Or use the setup script
   node scripts/setup-production-db.js
   ```

2. **Test Core Functionality**
   - Test user signup with Google
   - Test payment flow (small amount)
   - Test file uploads

## Step 5: Custom Domain (Optional)

1. **Add Custom Domain**
   - In Vercel project settings
   - Go to "Domains" tab
   - Add your domain

2. **Update Environment Variables**
   - Update `NEXTAUTH_URL` to your custom domain
   - Update `APP_URL` to your custom domain
   - Update OAuth redirect URIs in Google Console

## Step 6: Monitoring and Maintenance

### Set Up Monitoring

1. **Vercel Analytics**
   - Enable in project settings
   - Monitor performance and usage

2. **Error Tracking** (Optional)
   - Set up Sentry or similar
   - Monitor application errors

3. **Database Monitoring**
   - Monitor connection pool usage
   - Set up alerts for high usage

### Regular Maintenance

1. **Database Backups**
   - Set up automated backups
   - Test restore procedures

2. **Security Updates**
   - Keep dependencies updated
   - Monitor for security alerts

3. **Performance Monitoring**
   - Monitor API response times
   - Optimize slow queries

## Troubleshooting

### Common Issues

1. **Build Failures**
   - Check TypeScript errors: `npm run typecheck`
   - Check linting: `npm run lint`
   - Ensure all environment variables are set

2. **Database Connection Issues**
   - Verify DATABASE_URL format
   - Check database server status
   - Test connection locally

3. **Authentication Problems**
   - Verify NEXTAUTH_URL matches deployment URL
   - Check Google OAuth configuration
   - Ensure NEXTAUTH_SECRET is set and secure

4. **Payment Processing Issues**
   - Verify Stripe webhook endpoint
   - Check Stripe keys (live vs test)
   - Monitor Stripe dashboard for errors

### Debug Commands

```bash
# Check environment (locally with production vars)
node -e "console.log(process.env.DATABASE_URL ? 'DB configured' : 'DB missing')"

# Test database connection
npx prisma db pull --print

# View deployed environment (in Vercel function)
console.log('Environment check:', {
  db: !!process.env.DATABASE_URL,
  auth: !!process.env.NEXTAUTH_SECRET,
  stripe: !!process.env.STRIPE_SECRET_KEY
});
```

### Performance Optimization

1. **Database Query Optimization**
   - Use database indexes effectively
   - Implement proper pagination
   - Cache frequently accessed data

2. **API Route Optimization**
   - Implement proper error handling
   - Add request/response caching where appropriate
   - Use middleware for common operations

3. **Frontend Optimization**
   - Implement proper loading states
   - Use Next.js Image optimization
   - Add proper meta tags for SEO

## Security Checklist

- [ ] All API keys are production-ready (not test keys)
- [ ] NEXTAUTH_SECRET is strong and unique
- [ ] Database connections use SSL
- [ ] HTTPS is enforced (automatic with Vercel)
- [ ] Environment variables are secure
- [ ] OAuth redirect URIs are properly configured
- [ ] Webhook endpoints are secured
- [ ] Input validation is implemented
- [ ] Rate limiting is configured
- [ ] Error messages don't expose sensitive data

## Go-Live Checklist

- [ ] Database is set up and accessible
- [ ] All environment variables are configured
- [ ] Authentication flow works end-to-end
- [ ] Payment processing works (test with small amount)
- [ ] File uploads work
- [ ] Email notifications work (if configured)
- [ ] All pages load without errors
- [ ] Mobile responsiveness is tested
- [ ] Performance is acceptable
- [ ] Monitoring is set up
- [ ] Backup procedures are in place