import { createUploadthing, type FileRouter } from "uploadthing/next";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

const f = createUploadthing();

export const ourFileRouter = {
  documentUpload: f({
    image: { maxFileSize: "10MB", maxFileCount: 1 },
    pdf: { maxFileSize: "10MB", maxFileCount: 1 },
  })
    .middleware(async ({ req }) => {
      const session = await getServerSession(authOptions);

      if (!session?.user) {
        throw new Error("Unauthorized");
      }

      // Check if user has student profile
      const studentProfile = await prisma.studentProfile.findUnique({
        where: { userId: session.user.id },
      });

      if (!studentProfile) {
        throw new Error("Student profile required");
      }

      return {
        userId: session.user.id,
        studentId: studentProfile.id,
      };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      console.log("Upload complete for userId:", metadata.userId);
      console.log("File URL:", file.url);

      return { uploadedBy: metadata.userId };
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;