import { UserRole, StudentProfile, DonorProfile } from '@prisma/client'
import NextAuth from 'next-auth'

declare module 'next-auth' {
  interface User {
    role: UserRole
    studentProfile?: StudentProfile
    donorProfile?: DonorProfile
  }

  interface Session {
    user: {
      id: string
      name?: string | null
      email?: string | null
      image?: string | null
      role: UserRole
      studentProfile?: StudentProfile | null
      donorProfile?: DonorProfile | null
    }
  }
}