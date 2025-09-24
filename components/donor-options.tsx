import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  Building,
  Heart,
  Users,
  ArrowRight,
  CheckCircle,
  Info
} from 'lucide-react'

export function DonorOptions() {
  const donationTypes = [
    {
      title: 'General Fund',
      subtitle: 'Tax-Deductible',
      description: 'Support students in need through our verified fund. Get tax receipts and quarterly impact reports.',
      icon: Building,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
      badge: 'Tax Deductible',
      badgeVariant: 'default' as const,
      features: [
        'IRS tax deduction',
        'Quarterly impact reports',
        'Professional fund management',
        'Maximum community impact'
      ]
    },
    {
      title: 'Support a Student',
      subtitle: 'Personal Giving',
      description: 'Choose a specific student to support directly. Build a personal connection and see immediate impact.',
      icon: Heart,
      color: 'text-red-600',
      bgColor: 'bg-red-50',
      borderColor: 'border-red-200',
      badge: 'Personal',
      badgeVariant: 'secondary' as const,
      features: [
        'Choose your recipient',
        'Direct personal impact',
        'Thank you messages',
        'Progress updates'
      ]
    },
    {
      title: 'Support a Group',
      subtitle: 'Targeted Giving',
      description: 'Fund students from specific schools, programs, or causes. Amplify your impact through group campaigns.',
      icon: Users,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      badge: 'Group Impact',
      badgeVariant: 'secondary' as const,
      features: [
        'Target specific causes',
        'Group fundraising goals',
        'Community impact',
        'Varies by campaign'
      ]
    }
  ]

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Three Ways to Make an Impact
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the giving approach that resonates with you. Every dollar makes a real difference in a student's life.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {donationTypes.map((option, index) => (
            <Card
              key={index}
              className={`relative overflow-hidden card-hover-float ${option.borderColor} border-2`}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className={`rounded-lg p-3 ${option.bgColor}`}>
                    <option.icon className={`h-6 w-6 ${option.color}`} />
                  </div>
                  <Badge variant={option.badgeVariant}>
                    {option.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl">{option.title}</CardTitle>
                <p className={`text-sm font-medium ${option.color}`}>
                  {option.subtitle}
                </p>
              </CardHeader>

              <CardContent className="space-y-6">
                <p className="text-muted-foreground">
                  {option.description}
                </p>

                <div className="space-y-3">
                  {option.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4">
                  <Button className="w-full button-hover-lift" variant="outline" asChild>
                    <Link href={`/donate?type=${option.title.toLowerCase().replace(/\s+/g, '-')}`}>
                      Choose This Option
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-2 text-sm text-muted-foreground bg-muted/50 rounded-lg px-4 py-3">
            <Info className="h-4 w-4" />
            <span>
              All donations are processed securely. Tax deductibility varies by donation type.
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}