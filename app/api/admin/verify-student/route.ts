import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { z } from 'zod'

const verifyStudentSchema = z.object({
  studentId: z.string(),
  action: z.enum(['APPROVE', 'REJECT']),
  notes: z.string().optional(),
})

export async function POST(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions)
    if (!session?.user || session.user.role !== 'ADMIN') {
      return NextResponse.json({ error: 'Admin access required' }, { status: 403 })
    }

    const body = await req.json()
    const data = verifyStudentSchema.parse(body)

    const student = await prisma.studentProfile.findUnique({
      where: { id: data.studentId },
      include: { user: true }
    })

    if (!student) {
      return NextResponse.json({ error: 'Student not found' }, { status: 404 })
    }

    const newStatus = data.action === 'APPROVE' ? 'VERIFIED' : 'REJECTED'

    // Update student status
    const updatedStudent = await prisma.studentProfile.update({
      where: { id: data.studentId },
      data: {
        status: newStatus,
        verificationNotes: data.notes,
        verifiedAt: data.action === 'APPROVE' ? new Date() : null,
        verifiedBy: session.user.id,
      }
    })

    // Log admin action
    await prisma.adminAction.create({
      data: {
        adminId: session.user.id,
        action: `${data.action}_STUDENT_VERIFICATION`,
        targetType: 'STUDENT',
        targetId: data.studentId,
        notes: data.notes,
        metadata: {
          previousStatus: student.status,
          newStatus: newStatus,
        }
      }
    })

    // Create notification for student
    await prisma.notification.create({
      data: {
        toUserId: student.userId,
        title: `Verification ${data.action === 'APPROVE' ? 'Approved' : 'Rejected'}`,
        message: data.action === 'APPROVE'
          ? 'Your student profile has been verified! You can now receive donations.'
          : `Your verification was not approved. ${data.notes || 'Please contact support for details.'}`,
        type: 'VERIFICATION_STATUS',
        metadata: {
          status: newStatus,
          notes: data.notes,
        }
      }
    })

    return NextResponse.json({
      success: true,
      student: updatedStudent,
    })
  } catch (error) {
    console.error('Verify student error:', error)
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: 'Invalid request data' }, { status: 400 })
    }
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}