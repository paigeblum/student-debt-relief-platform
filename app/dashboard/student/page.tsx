import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  GraduationCap,
  Users,
  FileText,
  Clock,
  AlertCircle,
  BookOpen,
  Heart
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Student Dashboard | Boomerang',
  description: 'Complete your loan verification to access your full dashboard.',
}

export default function StudentDashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Student Dashboard</h1>
          <p className="text-gray-600 mt-1">Complete your verification to unlock all features</p>
        </div>

        {/* Verification Status */}
        <Card className="mb-6 border-orange-200 bg-orange-50">
          <CardContent className="pt-6">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Clock className="h-6 w-6 text-orange-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-orange-800 mb-2">
                  Loan Verification In Progress
                </h3>
                <p className="text-orange-700 mb-4">
                  Your dashboard will be fully available once your loan documents are verified by our team.
                  This typically takes 3-5 business days.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button size="sm" asChild>
                    <Link href="/onboarding">
                      <FileText className="h-4 w-4 mr-2" />
                      Complete Verification
                    </Link>
                  </Button>
                  <Button size="sm" variant="outline">
                    <AlertCircle className="h-4 w-4 mr-2" />
                    Check Status
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* What You Can Do Now */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center">
              <BookOpen className="h-5 w-5 mr-2" />
              What You Can Do While Waiting
            </CardTitle>
            <CardDescription>
              Explore the platform and learn about other students' experiences
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4">
              <Button className="h-auto p-6 flex flex-col items-center space-y-2" variant="outline" asChild>
                <Link href="/students">
                  <Users className="h-8 w-8 text-blue-600" />
                  <div className="text-center">
                    <div className="font-semibold">Browse Students</div>
                    <div className="text-xs text-muted-foreground">See other student profiles</div>
                  </div>
                </Link>
              </Button>

              <Button className="h-auto p-6 flex flex-col items-center space-y-2" variant="outline" asChild>
                <Link href="/donors">
                  <Heart className="h-8 w-8 text-green-600" />
                  <div className="text-center">
                    <div className="font-semibold">Meet Donors</div>
                    <div className="text-xs text-muted-foreground">Learn about our donors</div>
                  </div>
                </Link>
              </Button>

              <Button className="h-auto p-6 flex flex-col items-center space-y-2" variant="outline" asChild>
                <Link href="/how-it-works">
                  <GraduationCap className="h-8 w-8 text-purple-600" />
                  <div className="text-center">
                    <div className="font-semibold">How It Works</div>
                    <div className="text-xs text-muted-foreground">Understand the process</div>
                  </div>
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Platform Stats */}
        <Card>
          <CardHeader>
            <CardTitle>Platform Impact</CardTitle>
            <CardDescription>
              See the difference Boomerang is making in students' lives
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-blue-600">$2.4M+</div>
                <div className="text-sm text-gray-600">Total Funded</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-600">1,200+</div>
                <div className="text-sm text-gray-600">Students Helped</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-600">3,400+</div>
                <div className="text-sm text-gray-600">Active Donors</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-orange-600">92%</div>
                <div className="text-sm text-gray-600">Success Rate</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Help */}
        <div className="mt-8 text-center">
          <p className="text-gray-600 mb-2">Need help with your application?</p>
          <Button variant="outline" asChild>
            <Link href="/how-it-works">Contact Support</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}