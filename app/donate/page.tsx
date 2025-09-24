import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import {
  Heart,
  Users,
  Target,
  Award,
  DollarSign,
  GraduationCap,
  MapPin,
  Clock,
  ArrowLeft
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Support Students | Boomerang',
  description: 'Browse student profiles and make donations to help with educational debt.',
}

export default function DonatePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="container py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold">Support Students</h1>
              <p className="text-gray-600 mt-1">Make a direct impact on student debt relief</p>
            </div>
            <Button variant="outline" asChild>
              <Link href="/">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="container py-8">
        {/* Ways to Give */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card className="hover:shadow-lg transition-shadow flex flex-col h-full">
            <CardHeader className="text-center flex-shrink-0">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <CardTitle className="text-lg">Individual Students</CardTitle>
              <CardDescription className="min-h-[3rem] flex items-center">
                Support specific students whose stories resonate with you
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center flex-grow flex flex-col justify-between">
              <div>
                <Badge variant="secondary" className="mb-3">Most Personal</Badge>
                <p className="text-sm text-gray-600 mb-4 min-h-[2.5rem]">
                  View verified student profiles, read their stories, and choose who to support
                </p>
              </div>
              <Button className="w-full mt-auto">Browse Students</Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow flex flex-col h-full">
            <CardHeader className="text-center flex-shrink-0">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-green-600" />
              </div>
              <CardTitle className="text-lg">General Fund</CardTitle>
              <CardDescription className="min-h-[3rem] flex items-center">
                Help students with the most urgent needs
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center flex-grow flex flex-col justify-between">
              <div>
                <Badge variant="outline" className="mb-3">Highest Impact</Badge>
                <p className="text-sm text-gray-600 mb-4 min-h-[2.5rem]">
                  Your donation goes to students who need help most urgently
                </p>
              </div>
              <Button className="w-full mt-auto">Donate to Fund</Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow flex flex-col h-full">
            <CardHeader className="text-center flex-shrink-0">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-purple-600" />
              </div>
              <CardTitle className="text-lg">Group Campaigns</CardTitle>
              <CardDescription className="min-h-[3rem] flex items-center">
                Join community efforts for special causes
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center flex-grow flex flex-col justify-between">
              <div>
                <Badge variant="outline" className="mb-3">Community Driven</Badge>
                <p className="text-sm text-gray-600 mb-4 min-h-[2.5rem]">
                  Support underrepresented groups and specific programs
                </p>
              </div>
              <Button className="w-full mt-auto">View Campaigns</Button>
            </CardContent>
          </Card>
        </div>

        {/* Featured Students */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6">Featured Students</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Sample Student Profiles */}
            <Card className="hover:shadow-lg transition-shadow flex flex-col h-full">
              <CardHeader className="flex-shrink-0">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <GraduationCap className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Sarah M.</CardTitle>
                    <p className="text-sm text-gray-600 flex items-center">
                      <MapPin className="h-3 w-3 mr-1" />
                      Boston, MA
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col">
                <div className="space-y-3 flex-grow">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Computer Science</span>
                    <Badge variant="secondary">Verified</Badge>
                  </div>
                  <p className="text-sm text-gray-700 min-h-[3rem] line-clamp-3">
                    "Working part-time while studying to become a software engineer. Your support would help me focus on my studies..."
                  </p>
                  <div className="space-y-2 mt-auto">
                    <div className="flex justify-between text-sm">
                      <span>Progress</span>
                      <span>$1,200 of $5,000</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{width: '24%'}}></div>
                    </div>
                  </div>
                </div>
                <Button className="w-full mt-4">Support Sarah</Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow flex flex-col h-full">
              <CardHeader className="flex-shrink-0">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <GraduationCap className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Marcus J.</CardTitle>
                    <p className="text-sm text-gray-600 flex items-center">
                      <MapPin className="h-3 w-3 mr-1" />
                      Atlanta, GA
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col">
                <div className="space-y-3 flex-grow">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Nursing</span>
                    <Badge variant="secondary">Verified</Badge>
                  </div>
                  <p className="text-sm text-gray-700 min-h-[3rem] line-clamp-3">
                    "First-generation college student pursuing nursing to help my community. Every dollar brings me closer to graduation..."
                  </p>
                  <div className="space-y-2 mt-auto">
                    <div className="flex justify-between text-sm">
                      <span>Progress</span>
                      <span>$850 of $3,500</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-600 h-2 rounded-full" style={{width: '24%'}}></div>
                    </div>
                  </div>
                </div>
                <Button className="w-full mt-4">Support Marcus</Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow flex flex-col h-full">
              <CardHeader className="flex-shrink-0">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <GraduationCap className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Elena R.</CardTitle>
                    <p className="text-sm text-gray-600 flex items-center">
                      <MapPin className="h-3 w-3 mr-1" />
                      Austin, TX
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col">
                <div className="space-y-3 flex-grow">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Education</span>
                    <Badge variant="secondary">Verified</Badge>
                  </div>
                  <p className="text-sm text-gray-700 min-h-[3rem] line-clamp-3">
                    "Teaching is my passion. Your support helps me become the teacher my future students deserve..."
                  </p>
                  <div className="space-y-2 mt-auto">
                    <div className="flex justify-between text-sm">
                      <span>Progress</span>
                      <span>$2,100 of $4,800</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-purple-600 h-2 rounded-full" style={{width: '44%'}}></div>
                    </div>
                  </div>
                </div>
                <Button className="w-full mt-4">Support Elena</Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-6">
            <Button variant="outline" size="lg">
              View All Students
            </Button>
          </div>
        </div>

        {/* Quick Donation */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Donation</CardTitle>
            <CardDescription>
              Make an immediate impact with a general fund donation
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-4">Choose Amount</h3>
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <Button variant="outline" className="h-auto p-4 flex flex-col">
                    <DollarSign className="h-5 w-5 mb-1" />
                    <span className="font-semibold">$25</span>
                    <span className="text-xs text-muted-foreground">Textbook help</span>
                  </Button>
                  <Button variant="outline" className="h-auto p-4 flex flex-col">
                    <DollarSign className="h-5 w-5 mb-1" />
                    <span className="font-semibold">$100</span>
                    <span className="text-xs text-muted-foreground">Monthly payment</span>
                  </Button>
                  <Button variant="outline" className="h-auto p-4 flex flex-col">
                    <DollarSign className="h-5 w-5 mb-1" />
                    <span className="font-semibold">$250</span>
                    <span className="text-xs text-muted-foreground">Semester support</span>
                  </Button>
                  <Button variant="outline" className="h-auto p-4 flex flex-col">
                    <span className="text-sm font-semibold">Custom</span>
                    <span className="text-xs text-muted-foreground">Any amount</span>
                  </Button>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="custom-amount">Custom Amount</Label>
                  <Input id="custom-amount" placeholder="$" type="number" />
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold">Your Information (Optional)</h3>
                <p className="text-sm text-gray-600">
                  Students can reach out to thank you personally if you choose to share your contact info.
                </p>
                <div className="space-y-3">
                  <div>
                    <Label htmlFor="donor-name">Name</Label>
                    <Input id="donor-name" placeholder="Your name" />
                  </div>
                  <div>
                    <Label htmlFor="donor-email">Email</Label>
                    <Input id="donor-email" placeholder="your@email.com" type="email" />
                  </div>
                  <div>
                    <Label htmlFor="donor-message">Message (Optional)</Label>
                    <Textarea
                      id="donor-message"
                      placeholder="Words of encouragement for the student..."
                      rows={3}
                    />
                  </div>
                </div>
                <Button className="w-full" size="lg">
                  <Heart className="h-4 w-4 mr-2" />
                  Donate Now
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Impact Stats */}
        <div className="mt-8 text-center">
          <h2 className="text-2xl font-bold mb-6">Community Impact</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <div className="text-3xl font-bold text-green-600">$45,000</div>
              <div className="text-sm text-gray-600">Donated This Month</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600">127</div>
              <div className="text-sm text-gray-600">Students Helped</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600">23</div>
              <div className="text-sm text-gray-600">Graduations</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600">456</div>
              <div className="text-sm text-gray-600">Active Donors</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}