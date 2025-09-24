import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  Heart,
  Users,
  Target,
  TrendingUp,
  DollarSign,
  Gift,
  Award,
  Settings,
  BarChart3
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Donor Dashboard | Boomerang',
  description: 'Support students and track your impact.',
}

export default function DonorDashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold">Donor Dashboard</h1>
            <p className="text-gray-600 mt-1">Make a difference in students' lives</p>
          </div>
          <Button variant="outline" asChild>
            <Link href="/profile">
              <Settings className="h-4 w-4 mr-2" />
              Settings
            </Link>
          </Button>
        </div>

        {/* Impact Summary */}
        <Card className="mb-6 bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
          <CardContent className="pt-6">
            <div className="grid md:grid-cols-4 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-green-600">$1,250</div>
                <div className="text-sm text-gray-600">Total Donated</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-600">3</div>
                <div className="text-sm text-gray-600">Students Helped</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-600">2</div>
                <div className="text-sm text-gray-600">Graduations</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-orange-600">85%</div>
                <div className="text-sm text-gray-600">Debt Reduced</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Ways to Give */}
        <div className="grid md:grid-cols-3 gap-6 mb-6">
          <Card className="hover:shadow-lg transition-shadow cursor-pointer" asChild>
            <Link href="/students">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle>Browse Students</CardTitle>
                <CardDescription>
                  Support specific students whose stories resonate with you
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Badge variant="secondary" className="mb-3">Most Popular</Badge>
                <p className="text-sm text-gray-600">
                  View verified student profiles, read their stories, and choose who to support
                </p>
              </CardContent>
            </Link>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer" asChild>
            <Link href="/donate">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle>General Fund</CardTitle>
                <CardDescription>
                  Help students with the most urgent needs
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Badge variant="outline" className="mb-3">Highest Impact</Badge>
                <p className="text-sm text-gray-600">
                  Your donation goes to students who need help most urgently
                </p>
              </CardContent>
            </Link>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer" asChild>
            <Link href="/donate">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle>Group Campaigns</CardTitle>
                <CardDescription>
                  Join community efforts for special causes
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Badge variant="outline" className="mb-3">Community Driven</Badge>
                <p className="text-sm text-gray-600">
                  Support underrepresented groups and specific programs
                </p>
              </CardContent>
            </Link>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Recent Activity */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <BarChart3 className="h-5 w-5 mr-2" />
                Your Recent Impact
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Heart className="h-4 w-4 text-red-500" />
                    <div>
                      <p className="font-medium text-sm">Sarah M. graduated!</p>
                      <p className="text-xs text-gray-500">Computer Science • You helped with $500</p>
                    </div>
                  </div>
                  <Badge variant="secondary">Success</Badge>
                </div>

                <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Gift className="h-4 w-4 text-blue-500" />
                    <div>
                      <p className="font-medium text-sm">New donation processed</p>
                      <p className="text-xs text-gray-500">$250 to General Fund • 3 days ago</p>
                    </div>
                  </div>
                  <Badge variant="outline">Processed</Badge>
                </div>

                <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Users className="h-4 w-4 text-purple-500" />
                    <div>
                      <p className="font-medium text-sm">Thank you message</p>
                      <p className="text-xs text-gray-500">From Marcus J. • 1 week ago</p>
                    </div>
                  </div>
                  <Badge variant="outline">Message</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Donation</CardTitle>
              <CardDescription>
                Make a quick impact with preset amounts
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-3 mb-4">
                <Button className="h-auto p-4 flex flex-col" variant="outline">
                  <DollarSign className="h-5 w-5 mb-1" />
                  <span className="font-semibold">$25</span>
                  <span className="text-xs text-muted-foreground">General Fund</span>
                </Button>
                <Button className="h-auto p-4 flex flex-col" variant="outline">
                  <DollarSign className="h-5 w-5 mb-1" />
                  <span className="font-semibold">$100</span>
                  <span className="text-xs text-muted-foreground">General Fund</span>
                </Button>
                <Button className="h-auto p-4 flex flex-col" variant="outline">
                  <DollarSign className="h-5 w-5 mb-1" />
                  <span className="font-semibold">$250</span>
                  <span className="text-xs text-muted-foreground">General Fund</span>
                </Button>
                <Button className="h-auto p-4 flex flex-col" variant="outline">
                  <span className="text-sm font-semibold">Custom</span>
                  <span className="text-xs text-muted-foreground">Any amount</span>
                </Button>
              </div>

              <div className="space-y-2">
                <Button className="w-full" asChild>
                  <Link href="/students">
                    <Users className="h-4 w-4 mr-2" />
                    Browse Students
                  </Link>
                </Button>
                <Button className="w-full" variant="outline" asChild>
                  <Link href="/donate">
                    <Gift className="h-4 w-4 mr-2" />
                    View All Options
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Platform Impact */}
        <Card className="mt-6">
          <CardHeader>
            <CardTitle className="flex items-center">
              <TrendingUp className="h-5 w-5 mr-2" />
              Platform Impact This Month
            </CardTitle>
            <CardDescription>
              See how the entire Boomerang community is making a difference
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-green-600">$45,000</div>
                <div className="text-sm text-gray-600">Donated This Month</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-600">127</div>
                <div className="text-sm text-gray-600">Students Funded</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-600">23</div>
                <div className="text-sm text-gray-600">Graduations</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-orange-600">456</div>
                <div className="text-sm text-gray-600">Active Donors</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}