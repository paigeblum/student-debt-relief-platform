import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  ArrowRight,
  GraduationCap,
  Heart,
  Users,
  Shield,
  DollarSign,
  CheckCircle,
  FileText,
  Search,
  CreditCard,
  BarChart3,
  MessageCircle,
  Zap,
  Lock,
  Star
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'How It Works | Boomerang',
  description: 'Learn how Boomerang connects students with donors to provide direct student debt relief. Our secure platform makes education funding transparent and impactful.',
}

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">
              How <span className="text-blue-600">Boomerang</span> Works
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              We connect students struggling with debt to generous donors who want to help.
              Students can start completely anonymous and choose when to share more personal information.
              Our platform ensures every dollar goes directly to loan servicers
              with complete transparency and security.
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">The Simple Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From application to graduation, we guide both students and donors through
              every step of the funding journey.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Step 1 */}
              <Card className="relative">
                <div className="absolute -top-4 left-6">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                    1
                  </div>
                </div>
                <CardHeader className="pt-8">
                  <Users className="h-8 w-8 text-blue-600 mb-2" />
                  <CardTitle>Connect</CardTitle>
                  <CardDescription>
                    Students create profiles and join the network
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Verified students join our network and become eligible for support through the general fund, group campaigns, or individual giving.
                  </p>
                </CardContent>
              </Card>

              {/* Step 2 */}
              <Card className="relative">
                <div className="absolute -top-4 left-6">
                  <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">
                    2
                  </div>
                </div>
                <CardHeader className="pt-8">
                  <DollarSign className="h-8 w-8 text-green-600 mb-2" />
                  <CardTitle>Fund</CardTitle>
                  <CardDescription>
                    Secure donations go directly toward verified student loans
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Donations are processed securely and applied directly to student loan
                    balances, with full transparency and tracking for all parties.
                  </p>
                </CardContent>
              </Card>

              {/* Step 3 */}
              <Card className="relative">
                <div className="absolute -top-4 left-6">
                  <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold">
                    3
                  </div>
                </div>
                <CardHeader className="pt-8">
                  <BarChart3 className="h-8 w-8 text-purple-600 mb-2" />
                  <CardTitle>Impact</CardTitle>
                  <CardDescription>
                    Track progress, celebrate milestones, and see lasting impact
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Follow student progress through graduation and beyond. Receive updates,
                    thank you messages, and see the career impact of your generosity.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* For Students Section */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-blue-800">For Students</h2>
              <p className="text-xl text-gray-600">
                Get the funding you need to focus on your education, not your debt
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-semibold mb-6">The Student Journey</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1">
                      <FileText className="h-4 w-4 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Create Your Anonymous Profile</h4>
                      <p className="text-gray-600">Start with a chosen display name only. Share your story and goals without revealing personal details. Upload verification documents securely.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1">
                      <Shield className="h-4 w-4 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Get Verified</h4>
                      <p className="text-gray-600">Our team reviews your application and verifies your student status and loan details.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1">
                      <Heart className="h-4 w-4 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Receive Support</h4>
                      <p className="text-gray-600">Get support through the general fund or optionally share your story to connect with individual donors who want to help.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1">
                      <BarChart3 className="h-4 w-4 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Receive Support & Graduate</h4>
                      <p className="text-gray-600">Get funding toward your loans, share progress updates, and celebrate milestones with your supporters.</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <Button className="bg-blue-600 hover:bg-blue-700" asChild>
                    <Link href="/students">
                      Learn More for Students
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h4 className="font-semibold mb-4">What You'll Need:</h4>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    <span>Current enrollment or recent graduation</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    <span>One loan statement (that's it!)</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    <span>Personal story and goals</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    <span>Commitment to your education</span>
                  </li>
                </ul>

                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm text-blue-700">
                    <strong>Average time to funding:</strong> 30 days after verification
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* For Donors Section */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-green-800">For Donors</h2>
              <p className="text-xl text-gray-600">
                Make a meaningful impact on student lives with complete transparency
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h4 className="font-semibold mb-4">Giving Options:</h4>
                <div className="space-y-4">
                  <div className="p-4 border-2 border-green-500 rounded-lg bg-green-50">
                    <h5 className="font-medium text-green-700">General Fund (Most Popular)</h5>
                    <p className="text-sm text-gray-600">Help all students in the network with one simple donation</p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h5 className="font-medium text-purple-700">Group Campaigns</h5>
                    <p className="text-sm text-gray-600">Support specific groups of students with shared characteristics</p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h5 className="font-medium text-blue-700">Individual Students (Optional)</h5>
                    <p className="text-sm text-gray-600">Browse and support specific students who share their stories</p>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-green-50 rounded-lg">
                  <p className="text-sm text-green-700">
                    <strong>Tax benefits:</strong> All donations are tax-deductible
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-6">The Donor Experience</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1">
                      <Search className="h-4 w-4 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Choose How to Give</h4>
                      <p className="text-gray-600">Select from the general fund, group campaigns, or optionally browse individual student profiles.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1">
                      <CreditCard className="h-4 w-4 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Make Your Gift</h4>
                      <p className="text-gray-600">Choose your amount, payment method, and frequency. All transactions are secure and transparent.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1">
                      <MessageCircle className="h-4 w-4 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">See Your Impact</h4>
                      <p className="text-gray-600">Receive updates on how your donation is helping students in the network achieve their goals.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1">
                      <Star className="h-4 w-4 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Track Progress</h4>
                      <p className="text-gray-600">View overall network impact including graduation rates and total debt relief provided.</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <Button className="bg-green-600 hover:bg-green-700" asChild>
                    <Link href="/donors">
                      Learn More for Donors
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Protection Section */}
      <section className="py-16 bg-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-purple-600 text-white rounded-full text-sm font-medium mb-6">
              <Lock className="h-4 w-4 mr-2" />
              Student Privacy Protected
            </div>
            <h2 className="text-3xl font-bold mb-6">Complete Anonymity Control</h2>
            <p className="text-xl text-gray-600 mb-12">
              Students maintain full control over their identity and personal information throughout the entire process.
            </p>

            <div className="grid md:grid-cols-3 gap-8 text-left">
              <Card className="bg-white">
                <CardHeader>
                  <Shield className="h-8 w-8 text-purple-600 mb-2" />
                  <CardTitle>Anonymous by Default</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• No real names required initially</li>
                    <li>• Choose your own display name</li>
                    <li>• No photos or identifying details</li>
                    <li>• Only field of study and loan amounts visible</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-white">
                <CardHeader>
                  <MessageCircle className="h-8 w-8 text-blue-600 mb-2" />
                  <CardTitle>Gradual Trust Building</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Start with anonymous messaging</li>
                    <li>• Build relationships over time</li>
                    <li>• Share more when you feel comfortable</li>
                    <li>• Individual control with each donor</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-white">
                <CardHeader>
                  <Lock className="h-8 w-8 text-green-600 mb-2" />
                  <CardTitle>Your Choice, Your Timeline</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Reveal identity only when ready</li>
                    <li>• Some students never share real names</li>
                    <li>• Still receive full funding support</li>
                    <li>• Privacy settings can be changed anytime</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="mt-12 p-6 bg-white rounded-lg border border-purple-200">
              <h3 className="font-semibold text-lg mb-3">Important: Verification vs. Public Identity</h3>
              <p className="text-gray-700 text-left">
                <strong>Behind the scenes:</strong> We verify your student status and loan information for security and compliance.
                <br />
                <strong>To donors:</strong> You appear only with your chosen display name and the information you decide to share.
                <br />
                <strong>Your control:</strong> You can remain completely anonymous to donors even after receiving funding.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Security & Trust Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Security & Trust</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your security and trust are our top priorities. We use industry-leading
              practices to protect your data and ensure funds reach their intended destination.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card>
              <CardHeader>
                <Shield className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle>Verified Students</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Every student undergoes rigorous verification including:
                </p>
                <ul className="text-sm space-y-1">
                  <li>• Enrollment verification</li>
                  <li>• Loan documentation review</li>
                  <li>• Identity confirmation</li>
                  <li>• Academic standing check</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Lock className="h-8 w-8 text-green-600 mb-2" />
                <CardTitle>Secure Payments</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  All financial transactions are protected by:
                </p>
                <ul className="text-sm space-y-1">
                  <li>• Bank-level encryption</li>
                  <li>• PCI DSS compliance</li>
                  <li>• Secure payment processing</li>
                  <li>• Fraud prevention systems</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Zap className="h-8 w-8 text-purple-600 mb-2" />
                <CardTitle>Direct Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Your donations create immediate impact:
                </p>
                <ul className="text-sm space-y-1">
                  <li>• Paid directly to loan servicers</li>
                  <li>• Students never receive cash</li>
                  <li>• Real-time progress tracking</li>
                  <li>• 100% goes to debt reduction</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Compliance & Legal Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Legal & Tax Information</h2>
              <p className="text-xl text-gray-600">
                Understand the tax implications and legal structure of your contributions
              </p>
            </div>

            <Card className="bg-white">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-green-700">General Fund Donations</h3>
                    <p className="text-gray-700">
                      Tax-deductible as charitable contributions to a qualified 501(c)(3) organization.
                      You will receive a tax receipt for your records.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-blue-700">Individual Student Support</h3>
                    <p className="text-gray-700">
                      Considered personal giving and is not tax-deductible. These are direct gifts to help specific students.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-purple-700">Group Campaign Support</h3>
                    <p className="text-gray-700">
                      Tax status varies by campaign structure and beneficiary organization. Check individual campaign details for specific tax information.
                    </p>
                  </div>

                  <div className="pt-6 border-t">
                    <div className="bg-green-50 p-4 rounded-lg">
                      <p className="text-green-800 font-medium">
                        🔒 <strong>100% Secure Payment Process</strong>
                      </p>
                      <p className="text-gray-700 mt-2">
                        All funds are held in trust and distributed directly to verified loan servicers (Sallie Mae, Nelnet, FedLoan, etc.) or qualified educational institutions.
                        No funds ever go to individual students as cash payments — we pay your servicer directly on your behalf.
                      </p>
                    </div>
                  </div>

                  <div className="pt-4">
                    <h3 className="font-semibold text-lg mb-3">How Loan Servicer Payments Work</h3>
                    <p className="text-gray-700 mb-3">
                      When you donate, your contribution goes directly to paying off student loan debt held by verified loan servicers. Here's what we pay:
                    </p>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span><strong>Principal balances</strong> on federal and private student loans</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span><strong>Outstanding interest</strong> that has accumulated on student loans</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span><strong>Payments to verified servicers</strong> including Sallie Mae, Nelnet, FedLoan Servicing, Great Lakes, Navient, and others</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-green-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Whether you need help with student debt or want to support others,
              Boomerang makes it simple, secure, and meaningful.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg px-8" asChild>
                <Link href="/auth/signup">
                  <GraduationCap className="h-5 w-5 mr-2" />
                  Apply as Student
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 border-white text-white hover:bg-white hover:text-purple-600" asChild>
                <Link href="/donate">
                  <Heart className="h-5 w-5 mr-2" />
                  Give as Donor
                </Link>
              </Button>
            </div>
            <p className="text-blue-100 mt-4 text-sm">
              Free to join • Secure platform • Meaningful impact
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}