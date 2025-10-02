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
      subtitle: 'Tax Deductible',
      description: 'One-click donation to all students in the network',
      icon: Building,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-500',
      badge: 'Most Popular',
      badgeVariant: 'default' as const,
      features: [
        'Broadest Impact',
        'Tax Deductible',
        'Browse Students'
      ]
    },
    {
      title: 'Support a Student',
      subtitle: 'Personal Giving',
      description: 'Choose specific students and give to them directly',
      icon: Heart,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      badge: 'Personal',
      badgeVariant: 'secondary' as const,
      features: [
        'Choose your recipient',
        'Track their progress'
      ]
    },
    {
      title: 'Support a Group',
      subtitle: 'Targeted Giving',
      description: 'Give directly to a group of students',
      icon: Users,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200',
      badge: 'Community',
      badgeVariant: 'secondary' as const,
      features: [
        'Choose among existing groups',
        'May be tax deductible'
      ]
    }
  ]

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Three Ways to Give
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Every dollar goes directly to loan servicers. Choose how you want to help.
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
                      {option.title === 'General Fund' ? 'Choose This Option' : option.title === 'Support a Student' ? 'Browse Students' : 'Browse Groups'}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  )
}