import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { z } from 'zod'

const uploadDocumentSchema = z.object({
  type: z.enum(['LOAN_STATEMENT', 'INCOME_VERIFICATION', 'ENROLLMENT_PROOF', 'TAX_DOCUMENT', 'OTHER']),
  fileName: z.string(),
  fileUrl: z.string(),
  fileSize: z.number(),
  mimeType: z.string(),
})

export async function POST(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions)
    if (!session?.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const studentProfile = await prisma.studentProfile.findUnique({
      where: { userId: session.user.id }
    })

    if (!studentProfile) {
      return NextResponse.json({ error: 'Student profile required' }, { status: 400 })
    }

    const body = await req.json()
    const data = uploadDocumentSchema.parse(body)

    const document = await prisma.document.create({
      data: {
        studentProfileId: studentProfile.id,
        type: data.type,
        fileName: data.fileName,
        fileUrl: data.fileUrl,
        fileSize: data.fileSize,
        mimeType: data.mimeType,
      }
    })

    // Create notification for admins
    const admins = await prisma.user.findMany({
      where: { role: 'ADMIN' }
    })

    await Promise.all(
      admins.map(admin =>
        prisma.notification.create({
          data: {
            toUserId: admin.id,
            title: 'New Document Uploaded',
            message: `${studentProfile.firstName} ${studentProfile.lastName} uploaded a ${data.type.replace('_', ' ').toLowerCase()} document`,
            type: 'DOCUMENT_UPLOAD',
            metadata: {
              documentId: document.id,
              studentId: studentProfile.id,
              documentType: data.type,
            }
          }
        })
      )
    )

    return NextResponse.json({
      success: true,
      document: document,
    })
  } catch (error) {
    console.error('Upload document error:', error)
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: 'Invalid request data' }, { status: 400 })
    }
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}