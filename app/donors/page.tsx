import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  Heart,
  TrendingUp,
  Users,
  Shield,
  DollarSign,
  Star,
  CheckCircle,
  Gift,
  Award,
  BarChart3,
  MessageCircle,
  Target
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'For Donors | Boomerang',
  description: 'Make a meaningful impact on student lives. Help fund education and watch your contributions create lasting change in students futures.',
}

export default function DonorsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-6">
              <Heart className="h-4 w-4 mr-2" />
              Verified Impact Platform
            </div>
            <h1 className="text-5xl font-bold mb-6">
              Change Lives Through <span className="text-green-600">Education</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Make tangible impact now with our General Fund, or choose specific students to support.
              Every dollar goes directly to loan servicers — never to students' pockets — creating lasting impact on careers and communities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 bg-green-600 hover:bg-green-700" asChild>
                <Link href="/donate">
                  <Heart className="h-5 w-5 mr-2" />
                  Start Giving
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8" asChild>
                <Link href="#impact">
                  See Your Impact
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Your Donations Create Real Impact</h2>
            <p className="text-xl text-gray-600">See how our donor community is changing lives</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">$2.4M+</div>
              <div className="text-gray-600">Total Donated</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">3,400+</div>
              <div className="text-gray-600">Active Donors</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">1,200+</div>
              <div className="text-gray-600">Students Funded</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600 mb-2">92%</div>
              <div className="text-gray-600">Graduate Successfully</div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">How Giving Works</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our platform makes it simple and secure to support students while giving you
              complete transparency into your impact.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="text-center flex flex-col h-full">
              <CardHeader className="flex-shrink-0">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Gift className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle>1. Choose Your Approach</CardTitle>
                <CardDescription className="min-h-[3rem] flex items-center justify-center">
                  General Fund for instant impact, or browse individual students
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• General Fund (most popular)</li>
                  <li>• Individual student selection</li>
                  <li>• Group campaigns</li>
                  <li>• One-time or recurring</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center flex flex-col h-full">
              <CardHeader className="flex-shrink-0">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle>2. We Pay Directly</CardTitle>
                <CardDescription className="min-h-[3rem] flex items-center justify-center">
                  100% secure process — funds go straight to loan servicers
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Paid to Nelnet, Sallie Mae, etc.</li>
                  <li>• Never goes to students</li>
                  <li>• Bank-grade security</li>
                  <li>• Tax-deductible receipt</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center flex flex-col h-full">
              <CardHeader className="flex-shrink-0">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle>3. Track Your Impact</CardTitle>
                <CardDescription className="min-h-[3rem] flex items-center justify-center">
                  See real results and graduation success stories
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Quarterly impact reports</li>
                  <li>• Graduation notifications</li>
                  <li>• Success story updates</li>
                  <li>• Personal dashboard</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Giving Options Section */}
      <section id="impact" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Ways to Give</h2>
            <p className="text-xl text-gray-600">
              Choose the giving approach that works best for you
            </p>
          </div>

          {/* Prominent General Fund Card */}
          <div className="max-w-3xl mx-auto mb-12">
            <Card className="border-2 border-green-500 bg-green-50/50 shadow-lg">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-2xl text-green-800">General Fund</CardTitle>
                <CardDescription className="text-lg">
                  <strong>The fastest way to make an impact.</strong> Your donation helps students with the most urgent needs.
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• <strong>One-click donation</strong> - no browsing required</li>
                    <li>• Maximum impact allocation to urgent cases</li>
                    <li>• Help students in crisis situations</li>
                  </ul>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Tax-optimized for maximum deduction</li>
                    <li>• Quarterly impact reports sent to you</li>
                    <li>• 100% goes directly to loan servicers</li>
                  </ul>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8" asChild>
                    <Link href="/donate?type=general">
                      <Heart className="h-5 w-5 mr-2" />
                      Donate to General Fund
                    </Link>
                  </Button>
                  <Badge className="bg-green-600 text-white px-4 py-2 text-sm font-semibold">Most Popular Choice</Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mb-8">
            <h3 className="text-xl font-semibold text-gray-700 mb-2">Or choose a more personal approach</h3>
            <p className="text-gray-600">If you prefer to connect directly with students, here are your options:</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="flex flex-col h-full">
              <CardHeader className="flex-shrink-0">
                <Target className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle>Browse Individual Students</CardTitle>
                <CardDescription className="min-h-[3rem] flex items-center">
                  Support specific students whose stories resonate with you
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col justify-between">
                <ul className="space-y-2 text-sm text-gray-600 mb-4 flex-grow">
                  <li>• Personal connection with students</li>
                  <li>• Follow their specific journey</li>
                  <li>• Receive personal thank you notes</li>
                  <li>• See direct loan impact</li>
                </ul>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/donate?type=individual">Browse Students</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="flex flex-col h-full">
              <CardHeader className="flex-shrink-0">
                <Award className="h-8 w-8 text-purple-600 mb-2" />
                <CardTitle>Group Campaigns</CardTitle>
                <CardDescription className="min-h-[3rem] flex items-center">
                  Join community efforts for special causes
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col justify-between">
                <ul className="space-y-2 text-sm text-gray-600 mb-4 flex-grow">
                  <li>• Support underrepresented groups</li>
                  <li>• Fund specific programs</li>
                  <li>• Join company initiatives</li>
                  <li>• Build giving communities</li>
                </ul>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/donate?type=group">View Campaigns</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Donor Benefits */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Why Donors Choose Boomerang</h2>
              <p className="text-xl text-gray-600">
                Experience the most rewarding and transparent way to support education
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <Shield className="h-8 w-8 text-green-600 mb-2" />
                  <CardTitle>100% Transparency</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Every student is verified, every donation tracked, and every impact measured.
                    See exactly where your money goes and the difference it makes.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <MessageCircle className="h-8 w-8 text-blue-600 mb-2" />
                  <CardTitle>Personal Connection</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Build meaningful relationships with students. Receive updates, messages,
                    and graduation announcements from those you've helped.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <DollarSign className="h-8 w-8 text-purple-600 mb-2" />
                  <CardTitle>Tax Benefits</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    All donations are tax-deductible. We provide detailed receipts and
                    year-end summaries to maximize your tax benefits.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <TrendingUp className="h-8 w-8 text-orange-600 mb-2" />
                  <CardTitle>Measurable Impact</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Track graduation rates, career outcomes, and debt reduction statistics.
                    See the long-term impact of your generosity on careers and communities.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Donors Say</h2>
            <p className="text-xl text-gray-600">
              Hear from donors who are making a difference
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <Star className="h-5 w-5 text-yellow-500 fill-current" />
                  <Star className="h-5 w-5 text-yellow-500 fill-current" />
                  <Star className="h-5 w-5 text-yellow-500 fill-current" />
                  <Star className="h-5 w-5 text-yellow-500 fill-current" />
                  <Star className="h-5 w-5 text-yellow-500 fill-current" />
                </div>
                <blockquote className="text-gray-600 mb-4">
                  "I've helped 12 students so far and received graduation announcements from 8 of them.
                  It's incredibly rewarding to be part of their success story."
                </blockquote>
                <div className="font-semibold">Sarah M.</div>
                <div className="text-sm text-gray-500">Software Engineer, 3 years giving</div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <Star className="h-5 w-5 text-yellow-500 fill-current" />
                  <Star className="h-5 w-5 text-yellow-500 fill-current" />
                  <Star className="h-5 w-5 text-yellow-500 fill-current" />
                  <Star className="h-5 w-5 text-yellow-500 fill-current" />
                  <Star className="h-5 w-5 text-yellow-500 fill-current" />
                </div>
                <blockquote className="text-gray-600 mb-4">
                  "The transparency is amazing. I can see exactly how my donations are being used
                  and track the progress of students I support. Best charitable platform I've used."
                </blockquote>
                <div className="font-semibold">David Chen</div>
                <div className="text-sm text-gray-500">Financial Advisor, 2 years giving</div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <Star className="h-5 w-5 text-yellow-500 fill-current" />
                  <Star className="h-5 w-5 text-yellow-500 fill-current" />
                  <Star className="h-5 w-5 text-yellow-500 fill-current" />
                  <Star className="h-5 w-5 text-yellow-500 fill-current" />
                  <Star className="h-5 w-5 text-yellow-500 fill-current" />
                </div>
                <blockquote className="text-gray-600 mb-4">
                  "My company started a group campaign and we've funded 30 nursing students.
                  Knowing we're solving the healthcare shortage makes it feel even more meaningful."
                </blockquote>
                <div className="font-semibold">Lisa Rodriguez</div>
                <div className="text-sm text-gray-500">HR Director, 1 year giving</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-6">
              Start Making a Difference Today
            </h2>
            <p className="text-xl text-green-100 mb-8">
              Join thousands of donors who are helping students achieve their dreams.
              Your first donation can be as small as $25 and still make a meaningful impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg px-8" asChild>
                <Link href="/donate">
                  <Heart className="h-5 w-5 mr-2" />
                  Start Donating
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 border-white text-white hover:bg-white hover:text-green-600" asChild>
                <Link href="/donate">
                  Browse Students
                </Link>
              </Button>
            </div>
            <p className="text-green-100 mt-4 text-sm">
              Tax-deductible • Secure payments • No account required
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}