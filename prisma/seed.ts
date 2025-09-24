import { PrismaClient, UserRole } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Starting seed...')

  // Create admin user
  const adminUser = await prisma.user.upsert({
    where: { email: 'admin@example.com' },
    update: {},
    create: {
      email: 'admin@example.com',
      name: 'System Admin',
      role: UserRole.ADMIN,
    },
  })

  console.log('✅ Created admin user:', adminUser.email)

  // Create sample student
  const studentUser = await prisma.user.upsert({
    where: { email: 'student@example.com' },
    update: {},
    create: {
      email: 'student@example.com',
      name: 'Jane Student',
      role: UserRole.STUDENT,
      studentProfile: {
        create: {
          firstName: 'Jane',
          lastName: 'Student',
          dateOfBirth: new Date('1995-06-15'),
          address: '123 College St',
          city: 'University City',
          state: 'CA',
          zipCode: '90210',
          schoolName: 'University of California',
          major: 'Computer Science',
          graduationDate: new Date('2024-05-15'),
          totalDebtAmount: 45000,
          monthlyPayment: 400,
          interestRate: 0.045,
          loanServicer: 'FedLoan Servicing',
          employmentStatus: 'Part-time',
          annualIncome: 25000,
          displayName: 'CS Student',
          bio: 'Studying computer science and working part-time to pay for school.',
          isPublic: true,
          allowDirectDonations: true,
        },
      },
    },
    include: {
      studentProfile: true,
    },
  })

  console.log('✅ Created student user:', studentUser.email)

  // Create sample donor
  const donorUser = await prisma.user.upsert({
    where: { email: 'donor@example.com' },
    update: {},
    create: {
      email: 'donor@example.com',
      name: 'John Donor',
      role: UserRole.DONOR,
      donorProfile: {
        create: {
          firstName: 'John',
          lastName: 'Donor',
          company: 'Tech Corp',
          isAnonymous: false,
        },
      },
    },
    include: {
      donorProfile: true,
    },
  })

  console.log('✅ Created donor user:', donorUser.email)

  // Create a sample group campaign
  const groupCampaign = await prisma.groupCampaign.create({
    data: {
      name: 'CS Students Relief Fund',
      description: 'Supporting computer science students with their educational debt.',
      targetAmount: 50000,
      currentAmount: 0,
      startDate: new Date(),
      endDate: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000), // 90 days from now
      isTaxDeductible: true,
      members: {
        create: [
          {
            studentProfileId: studentUser.studentProfile!.id,
            allocationPercent: 100,
          },
        ],
      },
    },
  })

  console.log('✅ Created group campaign:', groupCampaign.name)

  console.log('🌱 Seed completed!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })