import { Card, CardContent } from '@/components/ui/card'
import { formatCurrency } from '@/lib/utils'
import { Users, DollarSign, GraduationCap, Heart, TrendingUp, Target } from 'lucide-react'
import Link from 'next/link'

export function Stats() {
  const stats = [
    {
      name: 'Students Helped',
      value: '500+',
      description: 'Students have received debt relief',
      icon: GraduationCap,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      name: 'Total Donated',
      value: '$2.5M',
      description: 'In debt relief contributions',
      icon: DollarSign,
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      name: 'Active Donors',
      value: '1,200+',
      description: 'Generous supporters making a difference',
      icon: Heart,
      color: 'text-red-600',
      bgColor: 'bg-red-50'
    },
    {
      name: 'Success Rate',
      value: '95%',
      description: 'Of students complete their programs',
      icon: Target,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      name: 'Average Relief',
      value: '$5,000',
      description: 'Per student debt reduction',
      icon: TrendingUp,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    },
    {
      name: 'Active Students',
      value: '150',
      description: 'Currently seeking support',
      icon: Users,
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-50'
    }
  ]

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Making Real Impact Together
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our platform has facilitated meaningful connections between donors and students,
            creating lasting positive change in educational outcomes.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {stats.map((stat) => (
            <Card key={stat.name} className="relative overflow-hidden border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className={`rounded-lg p-3 ${stat.bgColor}`}>
                    <stat.icon className={`h-6 w-6 ${stat.color}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-muted-foreground truncate">
                      {stat.name}
                    </p>
                    <p className="text-2xl font-bold text-foreground">
                      {stat.value}
                    </p>
                  </div>
                </div>
                <p className="mt-4 text-sm text-muted-foreground">
                  {stat.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to action */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            Ready to be part of this impact?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/auth/signup" className="group">
              <Card className="bg-blue-600 border-0 text-white hover:bg-blue-700 transition-colors">
                <CardContent className="p-4">
                  <div className="text-center">
                    <h3 className="font-semibold mb-1">For Students</h3>
                    <p className="text-sm text-blue-100 mb-3">Get help with your educational debt</p>
                    <div className="text-sm font-medium underline group-hover:no-underline">
                      Get Started →
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
            <Link href="/donate" className="group">
              <Card className="bg-green-600 border-0 text-white hover:bg-green-700 transition-colors">
                <CardContent className="p-4">
                  <div className="text-center">
                    <h3 className="font-semibold mb-1">For Donors</h3>
                    <p className="text-sm text-green-100 mb-3">Support the next generation of leaders</p>
                    <div className="text-sm font-medium underline group-hover:no-underline">
                      Start Giving →
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}