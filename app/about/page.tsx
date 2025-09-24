import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Heart,
  Users,
  Shield,
  Target,
  TrendingUp,
  Globe,
  Award,
  CheckCircle,
  ArrowRight,
  BookOpen,
  Briefcase,
  GraduationCap
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Us | Boomerang',
  description: 'Learn about Boomerangs mission to democratize education funding and create meaningful connections between students and donors.',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">
              Democratizing <span className="text-blue-600">Education</span> Funding
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              We believe every student deserves access to education, regardless of their financial background.
              Boomerang connects generous donors with deserving students, creating a community that
              invests in the future together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8" asChild>
                <Link href="/auth/signup">
                  Join Our Mission
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8" asChild>
                <Link href="#mission">
                  Learn More
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                To create a world where financial barriers dont prevent talented individuals
                from pursuing their educational dreams and contributing to society.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle>Direct Impact</CardTitle>
                  <CardDescription>
                    Every dollar donated goes directly to student loans, creating immediate relief
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">
                    We eliminate traditional charity overhead by connecting donors directly with students,
                    ensuring maximum impact for every contribution.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-green-600" />
                  </div>
                  <CardTitle>Community Building</CardTitle>
                  <CardDescription>
                    Fostering meaningful relationships between donors and students
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">
                    Beyond financial support, we create lasting connections that provide mentorship,
                    career guidance, and a supportive community for life.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-8 w-8 text-purple-600" />
                  </div>
                  <CardTitle>Trust & Transparency</CardTitle>
                  <CardDescription>
                    Complete verification and tracking of every student and donation
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">
                    Our rigorous verification process and real-time tracking ensure donors can trust
                    where their money goes and see the impact it creates.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Story</h2>
              <p className="text-xl text-gray-600">
                How we started and where we are going
              </p>
            </div>

            <div className="prose max-w-none">
              <div className="bg-white rounded-lg p-8 shadow-sm">
                <p className="text-lg text-gray-700 mb-6">
                  Boomerang was born from a simple observation: there are generous people who want to help
                  students succeed, and there are deserving students who need that help. The traditional
                  systems of financial aid often fail both groups - donors cant see their impact, and
                  students get lost in bureaucracy.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  We created Boomerang to solve this problem by building direct, transparent connections.
                  Our platform ensures that every donation creates real impact, every student story is heard,
                  and every relationship has the potential to change lives.
                </p>
                <p className="text-lg text-gray-700">
                  Named "Boomerang" because we believe in the power of investment that comes back -
                  when you invest in a students education, they go on to contribute to society,
                  creating a positive cycle that benefits everyone.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Values</h2>
              <p className="text-xl text-gray-600">
                The principles that guide everything we do
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-semibold mb-2">Integrity</h3>
                <p className="text-sm text-gray-600">
                  Complete transparency in every transaction, verification, and relationship.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="font-semibold mb-2">Compassion</h3>
                <p className="text-sm text-gray-600">
                  Understanding that behind every application is a person with dreams and challenges.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="font-semibold mb-2">Impact</h3>
                <p className="text-sm text-gray-600">
                  Measuring success by the lives changed and the barriers broken down.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="font-semibold mb-2">Accessibility</h3>
                <p className="text-sm text-gray-600">
                  Making education funding available to students from all backgrounds and circumstances.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Impact So Far</h2>
            <p className="text-xl text-gray-600">
              Real numbers showing the difference we have made together
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">$2.4M+</div>
              <div className="text-gray-600 font-medium">Total Funded</div>
              <div className="text-sm text-gray-500 mt-1">Direct loan payments</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">1,200+</div>
              <div className="text-gray-600 font-medium">Students Helped</div>
              <div className="text-sm text-gray-500 mt-1">Across all fields of study</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">3,400+</div>
              <div className="text-gray-600 font-medium">Active Donors</div>
              <div className="text-sm text-gray-500 mt-1">From 50 states</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-600 mb-2">92%</div>
              <div className="text-gray-600 font-medium">Graduate Rate</div>
              <div className="text-sm text-gray-500 mt-1">Of funded students</div>
            </div>
          </div>
        </div>
      </section>


      {/* Future Vision */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-6">Our Vision for the Future</h2>
            <p className="text-xl mb-8 text-blue-100">
              We envision a world where every talented individual has access to education,
              where generous people can easily make meaningful impact, and where communities
              come together to invest in their shared future.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8 text-left">
              <div className="bg-white/10 rounded-lg p-6">
                <CheckCircle className="h-8 w-8 mb-3" />
                <h3 className="font-semibold mb-2">Global Reach</h3>
                <p className="text-sm text-blue-100">
                  Expand internationally to help students in developing countries access quality education.
                </p>
              </div>
              <div className="bg-white/10 rounded-lg p-6">
                <Award className="h-8 w-8 mb-3" />
                <h3 className="font-semibold mb-2">Skills-Based Matching</h3>
                <p className="text-sm text-blue-100">
                  Connect students with industry professionals for mentorship and career guidance.
                </p>
              </div>
              <div className="bg-white/10 rounded-lg p-6">
                <TrendingUp className="h-8 w-8 mb-3" />
                <h3 className="font-semibold mb-2">Impact Measurement</h3>
                <p className="text-sm text-blue-100">
                  Advanced analytics to track long-term career outcomes and societal impact.
                </p>
              </div>
            </div>

            <Button size="lg" variant="secondary" className="text-lg px-8" asChild>
              <Link href="/auth/signup">
                <Heart className="h-5 w-5 mr-2" />
                Join Our Mission Today
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}