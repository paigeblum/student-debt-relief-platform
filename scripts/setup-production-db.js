#!/usr/bin/env node

/**
 * Production Database Setup Script
 *
 * This script helps set up the production database with proper configurations.
 * Run this after setting up your production database instance.
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

async function setupProductionDatabase() {
  console.log('🚀 Setting up Production Database...\n');

  // Check if DATABASE_URL is set
  if (!process.env.DATABASE_URL) {
    console.error('❌ DATABASE_URL environment variable is not set');
    console.log('Please set your production database URL first:');
    console.log('export DATABASE_URL="postgresql://user:pass@host:port/database"');
    process.exit(1);
  }

  console.log('✅ DATABASE_URL is configured');

  try {
    // 1. Generate Prisma Client
    console.log('📦 Generating Prisma Client...');
    execSync('npx prisma generate', { stdio: 'inherit' });
    console.log('✅ Prisma Client generated\n');

    // 2. Push schema to database (or run migrations)
    console.log('🔄 Pushing database schema...');
    try {
      execSync('npx prisma migrate deploy', { stdio: 'inherit' });
      console.log('✅ Database migrations applied\n');
    } catch (error) {
      console.log('⚠️  Migrations failed, trying db push instead...');
      execSync('npx prisma db push', { stdio: 'inherit' });
      console.log('✅ Database schema pushed\n');
    }

    // 3. Check database connection
    console.log('🔍 Testing database connection...');
    execSync('npx prisma db pull --print', { stdio: 'pipe' });
    console.log('✅ Database connection successful\n');

    console.log('🎉 Production database setup complete!');
    console.log('\nNext steps:');
    console.log('1. Set up all environment variables in your deployment platform');
    console.log('2. Deploy your application');
    console.log('3. Test the complete flow');

  } catch (error) {
    console.error('❌ Database setup failed:', error.message);
    console.log('\nTroubleshooting:');
    console.log('1. Check your DATABASE_URL format');
    console.log('2. Ensure database server is accessible');
    console.log('3. Verify database credentials');
    process.exit(1);
  }
}

// Check if this is a production environment
if (process.env.NODE_ENV !== 'production') {
  console.log('⚠️  This script is intended for production setup');
  console.log('Current NODE_ENV:', process.env.NODE_ENV || 'development');
  console.log('Continue anyway? (y/N)');

  const readline = require('readline');
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question('', (answer) => {
    rl.close();
    if (answer.toLowerCase() === 'y' || answer.toLowerCase() === 'yes') {
      setupProductionDatabase();
    } else {
      console.log('Setup cancelled');
      process.exit(0);
    }
  });
} else {
  setupProductionDatabase();
}