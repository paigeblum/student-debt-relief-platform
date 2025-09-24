import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowLeft, GraduationCap, Heart, Users, Target, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Get Started | Boomerang',
  description: 'Choose how you want to participate - as a student seeking support or as a donor helping students.',
}

export default function GetStartedPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
      {/* Header */}
      <div className="container flex h-16 items-center justify-end py-4">
        <Button variant="ghost" asChild>
          <Link href="/" className="flex items-center">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
        </Button>
      </div>

      {/* Main Content */}
      <div className="container py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Get Started with Boomerang</h1>
            <p className="text-xl text-gray-600">
              Choose how you want to make a difference in education
            </p>
          </div>

          {/* Two Path Options */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Student Path */}
            <Card className="relative overflow-hidden border-2 hover:border-blue-500 transition-colors">
              <div className="absolute top-4 right-4">
                <div className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded-full">
                  For Students
                </div>
              </div>
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <GraduationCap className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-2xl">I'm a Student</CardTitle>
                <CardDescription className="text-base">
                  Create your profile and connect with donors who want to help with your educational debt
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Create your verified student profile</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Share your story and goals</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Connect with supportive donors</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Get help with your educational debt</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <Button className="w-full" size="lg" asChild>
                    <Link href="/auth/signup">Create Student Account</Link>
                  </Button>

                  <div className="text-center">
                    <p className="text-sm text-muted-foreground">
                      Already have an account?{' '}
                      <Link
                        href="/auth/signin"
                        className="font-medium text-primary hover:underline"
                      >
                        Student Sign In
                      </Link>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Donor Path */}
            <Card className="relative overflow-hidden border-2 hover:border-green-500 transition-colors">
              <div className="absolute top-4 right-4">
                <div className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded-full">
                  For Donors
                </div>
              </div>
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Heart className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-2xl">I Want to Donate</CardTitle>
                <CardDescription className="text-base">
                  Browse student profiles and make direct donations to help with educational debt
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">No account needed to donate</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Browse verified student profiles</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Choose individual students or general fund</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Receive thanks and updates from students</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <Button className="w-full" size="lg" variant="outline" asChild>
                    <Link href="/donate">
                      <Heart className="h-4 w-4 mr-2" />
                      Browse Students to Support
                    </Link>
                  </Button>

                  <div className="grid grid-cols-2 gap-2">
                    <Button variant="ghost" size="sm" asChild>
                      <Link href="/donate#general-fund">General Fund</Link>
                    </Button>
                    <Button variant="ghost" size="sm" asChild>
                      <Link href="/donate#campaigns">Group Campaigns</Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Additional Info */}
          <div className="text-center space-y-6">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-semibold">1,200+ Students</h3>
                <p className="text-sm text-gray-600">Active profiles seeking support</p>
              </div>
              <div className="space-y-2">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                  <Heart className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="font-semibold">3,400+ Donors</h3>
                <p className="text-sm text-gray-600">Generous supporters helping students</p>
              </div>
              <div className="space-y-2">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto">
                  <Target className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="font-semibold">$2.4M+ Funded</h3>
                <p className="text-sm text-gray-600">Total educational debt relief</p>
              </div>
            </div>

            <div className="pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-600">
                Questions?{' '}
                <Link href="/how-it-works" className="text-primary hover:underline">
                  Learn how it works
                </Link>
                {' or '}
                <Link href="/about" className="text-primary hover:underline">
                  read our story
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}