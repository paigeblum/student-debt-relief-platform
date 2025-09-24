# Production Setup Guide

This guide walks through setting up the Student Debt Relief Platform for production deployment.

## Database Schema Overview

The application uses PostgreSQL with the following key models:
- **Users**: Core user authentication with roles (ADMIN, STUDENT, DONOR)
- **StudentProfile**: Detailed student information, loan data, verification status
- **DonorProfile**: Donor preferences and Stripe customer information
- **Donations**: Payment tracking with Stripe integration
- **Documents**: File uploads for student verification
- **GroupCampaigns**: Group funding campaigns
- **AdminActions**: Audit trail for admin activities
- **Notifications**: In-app messaging system

## Required Environment Variables

### 1. Database Configuration
```bash
DATABASE_URL="postgresql://username:password@host:port/database"
# Example for production:
# DATABASE_URL="postgresql://user:pass@aws-rds-endpoint:5432/student_debt_relief"
```

### 2. Authentication (NextAuth.js)
```bash
NEXTAUTH_URL="https://your-production-domain.com"
NEXTAUTH_SECRET="your-secure-random-secret-minimum-32-characters"

# Generate secret with: openssl rand -base64 32
```

### 3. Google OAuth (Required)
```bash
GOOGLE_CLIENT_ID="your-google-client-id.googleusercontent.com"
GOOGLE_CLIENT_SECRET="your-google-client-secret"
```

### 4. Stripe Payment Processing (Required)
```bash
STRIPE_PUBLISHABLE_KEY="pk_live_..."  # Live key for production
STRIPE_SECRET_KEY="sk_live_..."       # Live key for production
STRIPE_WEBHOOK_SECRET="whsec_..."     # From Stripe webhook endpoint
```

### 5. File Uploads (UploadThing)
```bash
UPLOADTHING_SECRET="sk_live_..."
UPLOADTHING_APP_ID="your-app-id"
```

### 6. Email Configuration (Optional but Recommended)
```bash
EMAIL_SERVER_HOST="smtp.your-provider.com"
EMAIL_SERVER_PORT="587"
EMAIL_SERVER_USER="your-smtp-username"
EMAIL_SERVER_PASSWORD="your-smtp-password"
EMAIL_FROM="noreply@your-domain.com"
```

### 7. Plaid Integration (Student Loan Verification)
```bash
PLAID_CLIENT_ID="your-plaid-client-id"
PLAID_SECRET="your-plaid-secret"
PLAID_ENV="production"  # or "sandbox" for testing
```

### 8. Application Configuration
```bash
APP_NAME="Boomerang"
APP_URL="https://your-production-domain.com"
SUPPORT_EMAIL="support@your-domain.com"
```

## Production Database Setup Options

### Option 1: Managed PostgreSQL Services

#### Vercel Postgres (Recommended for Vercel deployments)
1. Go to your Vercel dashboard
2. Navigate to Storage > Create Database > Postgres
3. Follow the setup wizard
4. Copy the connection string to `DATABASE_URL`

#### AWS RDS PostgreSQL
1. Create RDS PostgreSQL instance
2. Configure security groups for access
3. Note connection details for `DATABASE_URL`

#### Railway PostgreSQL
1. Create new project on Railway
2. Add PostgreSQL service
3. Copy connection string

#### Supabase PostgreSQL
1. Create project on Supabase
2. Go to Settings > Database
3. Copy connection string

### Option 2: Self-Hosted PostgreSQL
```bash
# Install PostgreSQL
sudo apt update
sudo apt install postgresql postgresql-contrib

# Create database and user
sudo -u postgres createuser --interactive
sudo -u postgres createdb student_debt_relief
```

## Deployment Steps

### 1. Set up Production Database
- Choose a managed PostgreSQL service (recommended)
- Create database instance
- Note connection string for DATABASE_URL

### 2. Configure Environment Variables
- Set all required environment variables in your deployment platform
- Use secure, production-ready values (no test/sandbox keys)
- Generate secure NEXTAUTH_SECRET

### 3. Run Database Migrations
```bash
# Push schema to production database
npx prisma db push

# Or use migrations for better control
npx prisma migrate deploy

# Generate Prisma client
npx prisma generate
```

### 4. Seed Initial Data (Optional)
```bash
npm run db:seed
```

### 5. Deploy Application
- Deploy to your chosen platform (Vercel, Railway, etc.)
- Ensure all environment variables are set
- Test the deployment

## Security Considerations

### Database Security
- Use connection pooling for production
- Enable SSL connections
- Restrict database access to application servers only
- Regular backups

### Application Security
- Use strong NEXTAUTH_SECRET (minimum 32 characters)
- Enable HTTPS in production
- Set secure headers
- Implement rate limiting

### API Keys Security
- Use live/production API keys, not test keys
- Store securely in environment variables
- Rotate keys regularly
- Monitor for unauthorized usage

## Monitoring and Maintenance

### Database Monitoring
- Monitor connection count
- Watch for slow queries
- Set up alerts for high CPU/memory usage
- Regular performance reviews

### Application Monitoring
- Monitor API response times
- Track error rates
- Set up uptime monitoring
- Log important events

## Troubleshooting

### Common Issues
1. **Database Connection Errors**: Check DATABASE_URL format and credentials
2. **Authentication Failures**: Verify NEXTAUTH_URL matches deployment URL
3. **Payment Processing Issues**: Confirm Stripe webhook endpoint is configured
4. **File Upload Problems**: Check UploadThing configuration and API limits

### Debug Commands
```bash
# Test database connection
npx prisma db pull

# Check environment variables (be careful not to expose secrets)
echo $DATABASE_URL | sed 's/:.*/:[REDACTED]/'

# View database schema
npx prisma studio
```

## Next Steps After Setup

1. **Test Core Flows**:
   - Student signup and verification
   - Donation processing
   - File uploads

2. **Set up Monitoring**:
   - Error tracking (Sentry)
   - Performance monitoring
   - Uptime checks

3. **Configure Email**:
   - Transactional emails
   - Notification system
   - SMTP delivery

4. **Security Review**:
   - Penetration testing
   - GDPR compliance
   - Data encryption