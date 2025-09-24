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
    const requiredFields = [
      'firstName',
      'lastName',
      'dateOfBirth',
      'address',
      'city',
      'state',
      'zipCode',
      'schoolName',
      'major',
      'totalDebtAmount',
      'displayName',
      'bio'
    ]

    for (const field of requiredFields) {
      if (!data[field]) {
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        )
      }
    }

    // Create student profile
    const studentProfile = await prisma.studentProfile.create({
      data: {
        userId: session.user.id,
        firstName: data.firstName,
        lastName: data.lastName,
        dateOfBirth: new Date(data.dateOfBirth),
        phone: data.phone || null,
        address: data.address,
        city: data.city,
        state: data.state,
        zipCode: data.zipCode,
        schoolName: data.schoolName,
        major: data.major,
        graduationDate: data.graduationDate ? new Date(data.graduationDate) : null,
        gpa: data.gpa ? parseFloat(data.gpa) : null,
        totalDebtAmount: parseFloat(data.totalDebtAmount),
        monthlyPayment: data.monthlyPayment ? parseFloat(data.monthlyPayment) : null,
        interestRate: data.interestRate ? parseFloat(data.interestRate) / 100 : null, // Convert percentage to decimal
        loanServicer: data.loanServicer || null,
        employmentStatus: data.employmentStatus || null,
        annualIncome: data.annualIncome ? parseFloat(data.annualIncome) : null,
        displayName: data.displayName,
        bio: data.bio,
        isPublic: false, // Default to private until approved
        allowDirectDonations: true,
      },
    })

    return NextResponse.json({ success: true, profile: studentProfile })
  } catch (error) {
    console.error('Error creating student profile:', error)
    return NextResponse.json(
      { error: 'Failed to create student profile' },
      { status: 500 }
    )
  }
}