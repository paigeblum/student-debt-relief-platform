'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { useToast } from '@/hooks/use-toast'
import { Loader2, Upload, FileText, CheckCircle } from 'lucide-react'

interface DocumentUploadProps {
  studentId: string
  onUpload?: () => void
}

interface UploadFormData {
  type: string
  file: FileList
}

const documentTypes = [
  { value: 'LOAN_STATEMENT', label: 'Loan Statement (Required)' },
]

export function DocumentUpload({ studentId, onUpload }: DocumentUploadProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [uploadedFiles, setUploadedFiles] = useState<string[]>([])
  const { toast } = useToast()

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm<UploadFormData>()

  const selectedType = watch('type')

  const uploadToUploadThing = async (file: File) => {
    const formData = new FormData()
    formData.append('files', file)

    const response = await fetch('/api/uploadthing?slug=documentUpload', {
      method: 'POST',
      body: formData,
    })

    if (!response.ok) {
      throw new Error('Upload failed')
    }

    const data = await response.json()
    return data[0] // UploadThing returns array of uploaded files
  }

  const onSubmit = async (data: UploadFormData) => {
    if (!data.file || data.file.length === 0) {
      toast({
        title: "No file selected",
        description: "Please select a file to upload.",
        variant: "destructive",
      })
      return
    }

    const file = data.file[0]

    // Validate file size (10MB max)
    if (file.size > 10 * 1024 * 1024) {
      toast({
        title: "File too large",
        description: "Please select a file smaller than 10MB.",
        variant: "destructive",
      })
      return
    }

    // Validate file type
    const allowedTypes = [
      'application/pdf',
      'image/jpeg',
      'image/png',
      'image/webp',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    ]

    if (!allowedTypes.includes(file.type)) {
      toast({
        title: "Invalid file type",
        description: "Please upload a PDF, image, or Word document.",
        variant: "destructive",
      })
      return
    }

    setIsLoading(true)

    try {
      // Upload to UploadThing
      const uploadResult = await uploadToUploadThing(file)

      // Save document record
      const response = await fetch('/api/documents/upload', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: data.type,
          fileName: file.name,
          fileUrl: uploadResult.url,
          fileSize: file.size,
          mimeType: file.type,
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to save document')
      }

      toast({
        title: "Document uploaded!",
        description: "Your document has been uploaded and is pending verification.",
      })

      setUploadedFiles(prev => [...prev, data.type])
      reset()
      onUpload?.()
    } catch (error) {
      console.error('Upload error:', error)
      toast({
        title: "Upload failed",
        description: "Failed to upload your document. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <FileText className="mr-2 h-5 w-5" />
          Upload Your Loan Statement
        </CardTitle>
        <p className="text-sm text-muted-foreground mt-2">
          <strong>One document is all we need!</strong> Upload your most recent loan statement and we'll automatically extract all the information needed to verify your account.
        </p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Auto-set document type to loan statement */}
          <input type="hidden" {...register('type')} value="LOAN_STATEMENT" />

          {/* Info box explaining what we can extract */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
            <h4 className="font-medium text-blue-800 mb-2">🧠 What we'll automatically extract from your loan statement:</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-blue-700">
              <div>• Total loan balance</div>
              <div>• Monthly payment amount</div>
              <div>• Interest rate</div>
              <div>• Loan servicer name</div>
              <div>• Account numbers</div>
              <div>• Loan types & terms</div>
            </div>
            <p className="text-xs text-blue-600 mt-2">
              Our AI system will parse your statement and pre-fill all required information. You can review and edit before submitting.
            </p>
          </div>

          <div>
            <Label htmlFor="file">File</Label>
            <input
              id="file"
              type="file"
              accept=".pdf,.jpg,.jpeg,.png,.webp,.doc,.docx"
              {...register('file', { required: 'Please select a file' })}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
            <p className="text-sm text-muted-foreground mt-1">
              Accepted formats: PDF, images, Word documents (max 10MB)
            </p>
            {errors.file && (
              <p className="text-sm text-red-600 mt-1">{errors.file.message}</p>
            )}
          </div>

          <Button
            type="submit"
            disabled={isLoading}
            className="w-full bg-blue-600 hover:bg-blue-700"
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Processing & Extracting Data...
              </>
            ) : (
              <>
                <Upload className="mr-2 h-4 w-4" />
                Upload Loan Statement & Complete Verification
              </>
            )}
          </Button>
        </form>

        {uploadedFiles.length > 0 && (
          <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-md">
            <h4 className="font-medium text-green-800 mb-2">Uploaded Documents:</h4>
            <ul className="space-y-1">
              {uploadedFiles.map((type, index) => (
                <li key={index} className="flex items-center text-green-700">
                  <CheckCircle className="mr-2 h-4 w-4" />
                  {documentTypes.find(t => t.value === type)?.label}
                </li>
              ))}
            </ul>
            <p className="text-sm text-green-600 mt-2">
              Your documents are pending verification by our admin team.
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}