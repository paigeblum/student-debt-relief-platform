import { NextAuthOptions } from 'next-auth'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import GoogleProvider from 'next-auth/providers/google'
import EmailProvider from 'next-auth/providers/email'
import { prisma } from '@/lib/prisma'
import { UserRole } from '@prisma/client'

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    EmailProvider({
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: process.env.EMAIL_SERVER_PORT,
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD,
        },
      },
      from: process.env.EMAIL_FROM,
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        // Fetch user role and profile data
        const userData = await prisma.user.findUnique({
          where: { id: user.id },
          include: {
            studentProfile: true,
            donorProfile: true,
          },
        })

        if (userData) {
          token.role = userData.role
          token.studentProfile = userData.studentProfile
          token.donorProfile = userData.donorProfile
        }
      }
      return token
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.sub!
        session.user.role = token.role as UserRole
        session.user.studentProfile = token.studentProfile as any
        session.user.donorProfile = token.donorProfile as any
      }
      return session
    },
    async signIn({ user, account, profile }) {
      // Allow sign in
      return true
    },
  },
  pages: {
    signIn: '/auth/signin',
    error: '/auth/error',
    verifyRequest: '/auth/verify-request',
    newUser: '/onboarding',
  },
  session: {
    strategy: 'jwt',
  },
  events: {
    async createUser({ user }) {
      console.log('New user created:', user.email)
    },
  },
}