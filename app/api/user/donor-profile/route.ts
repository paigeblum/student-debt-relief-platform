import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)

    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const data = await request.json()

    // Validate required fields
    if (!data.firstName || !data.lastName) {
      return NextResponse.json(
        { error: 'First name and last name are required' },
        { status: 400 }
      )
    }

    // Create donor profile
    const donorProfile = await prisma.donorProfile.create({
      data: {
        userId: session.user.id,
        firstName: data.firstName,
        lastName: data.lastName,
        company: data.company || null,
        phone: data.phone || null,
        isAnonymous: data.isAnonymous || false,
      },
    })

    return NextResponse.json({ success: true, profile: donorProfile })
  } catch (error) {
    console.error('Error creating donor profile:', error)
    return NextResponse.json(
      { error: 'Failed to create donor profile' },
      { status: 500 }
    )
  }
}