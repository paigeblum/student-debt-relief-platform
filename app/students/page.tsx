import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  GraduationCap,
  Shield,
  DollarSign,
  Users,
  CheckCircle,
  FileText,
  Heart,
  TrendingUp,
  Clock,
  Lock
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'For Students | Boomerang',
  description: 'Get help with your student debt through our community of generous donors. Apply for debt relief and connect with supporters who believe in your education.',
}

export default function StudentsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
              <GraduationCap className="h-4 w-4 mr-2" />
              Student Debt Relief Program
            </div>
            <h1 className="text-5xl font-bold mb-6">
              Get Help with Your <span className="text-blue-600">Student Debt</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Connect with generous donors who want to support your education while maintaining complete control over your privacy.
              Start completely anonymous and choose when to share more - you decide what information to reveal and when.
            </p>
            <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-8">
              <Lock className="h-4 w-4 mr-2" />
              Your Identity Stays Private Until You Choose Otherwise
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8" asChild>
                <Link href="/auth/signup">
                  <GraduationCap className="h-5 w-5 mr-2" />
                  Apply for Help
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8" asChild>
                <Link href="#how-it-works">
                  Learn How It Works
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">$2.4M+</div>
              <div className="text-gray-600">Total Debt Relief Funded</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">1,200+</div>
              <div className="text-gray-600">Students Helped</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">85%</div>
              <div className="text-gray-600">Success Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600 mb-2">30 days</div>
              <div className="text-gray-600">Average Time to Funding</div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">How It Works for Students</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our platform makes it easy to get help with your student loans through a secure,
              verified process that connects you with caring donors.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle>1. Apply & Verify</CardTitle>
                <CardDescription>
                  Create your profile and upload loan documents for verification
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Start with anonymous profile</li>
                  <li>• Share your education story (no real names)</li>
                  <li>• Upload loan statements securely</li>
                  <li>• Get verified by our team</li>
                  <li>• Set your funding goals</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle>2. Connect with Donors</CardTitle>
                <CardDescription>
                  Get matched with donors who care about your field of study
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Anonymous profile shown to relevant donors</li>
                  <li>• Receive messages of support</li>
                  <li>• Choose when to reveal more information</li>
                  <li>• Build meaningful connections on your terms</li>
                  <li>• Update your progress</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle>3. Receive Support</CardTitle>
                <CardDescription>
                  Get direct payments toward your student loans
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Secure payment processing</li>
                  <li>• Direct loan payments</li>
                  <li>• Track your progress</li>
                  <li>• Thank your supporters</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Why Choose Boomerang?</h2>
              <p className="text-xl text-gray-600">
                We've built the most trusted and effective platform for student debt relief
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <Shield className="h-8 w-8 text-blue-600 mb-2" />
                  <CardTitle>Secure & Verified</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    All student profiles go through rigorous verification. Your personal information
                    is protected with bank-level security, and all donations are processed securely.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Users className="h-8 w-8 text-green-600 mb-2" />
                  <CardTitle>Supportive Community</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Connect with donors who genuinely care about your success. Build relationships
                    that go beyond financial support and gain mentors for your career.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Lock className="h-8 w-8 text-purple-600 mb-2" />
                  <CardTitle>Complete Privacy Control</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Start completely anonymous - no real names, photos, or identifying information required.
                    Only reveal personal details when you individually match with donors you trust.
                    You control every aspect of your privacy.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <TrendingUp className="h-8 w-8 text-orange-600 mb-2" />
                  <CardTitle>Track Your Progress</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Monitor your debt reduction in real-time, share updates with supporters,
                    and celebrate milestones together with your donor community.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy & Anonymity Section */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-full text-sm font-medium mb-6">
              <Lock className="h-4 w-4 mr-2" />
              Your Privacy is Our Priority
            </div>
            <h2 className="text-3xl font-bold mb-6">Stay Completely Anonymous</h2>
            <p className="text-xl text-gray-600 mb-8">
              We understand that sharing your financial situation can feel vulnerable. That's why we've built
              our platform to protect your identity every step of the way.
            </p>

            <div className="grid md:grid-cols-2 gap-8 text-left">
              <Card className="bg-white">
                <CardHeader>
                  <Shield className="h-8 w-8 text-green-600 mb-2" />
                  <CardTitle>Anonymous by Default</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Use a chosen display name instead of your real name</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>No photos or identifying information required</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Share only your field of study and general story</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Loan amounts shown without personal details</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-white">
                <CardHeader>
                  <Users className="h-8 w-8 text-blue-600 mb-2" />
                  <CardTitle>Reveal When Ready</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Build trust with donors through anonymous messages</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Choose to share more details with specific donors</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Reveal your identity only when you feel comfortable</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Maintain anonymity even after receiving donations</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8 p-6 bg-white rounded-lg border border-green-200">
              <p className="text-gray-700 font-medium">
                <strong>Important:</strong> Even our verification process protects your privacy.
                We verify your loan information securely without exposing your identity to donors until you choose to share it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility Section */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Am I Eligible?</h2>
              <p className="text-xl text-gray-600">
                We help students from all backgrounds and circumstances
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-6 flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-2" />
                  You qualify if you:
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Have federal or private student loans</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Are currently enrolled or graduated from an accredited institution</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Can provide documentation of your loans</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Are committed to completing your education</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-6">Popular Fields of Study</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Computer Science</Badge>
                  <Badge variant="secondary">Nursing</Badge>
                  <Badge variant="secondary">Education</Badge>
                  <Badge variant="secondary">Engineering</Badge>
                  <Badge variant="secondary">Business</Badge>
                  <Badge variant="secondary">Medicine</Badge>
                  <Badge variant="secondary">Psychology</Badge>
                  <Badge variant="secondary">Social Work</Badge>
                  <Badge variant="secondary">Arts & Design</Badge>
                  <Badge variant="secondary">And many more...</Badge>
                </div>
                <p className="text-gray-600 mt-4">
                  We welcome students from all fields of study. Every education path is valuable
                  and deserves support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join thousands of students who have received help with their education costs.
              Your application takes just a few minutes to complete.
            </p>
            <Button size="lg" variant="secondary" className="text-lg px-8" asChild>
              <Link href="/auth/signup">
                <GraduationCap className="h-5 w-5 mr-2" />
                Start Your Application
              </Link>
            </Button>
            <p className="text-blue-100 mt-4 text-sm">
              Free to apply • No hidden fees • Secure application process
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}