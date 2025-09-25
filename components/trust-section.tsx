import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  Shield,
  Lock,
  FileText,
  Award,
  Building,
  CheckCircle,
  Star,
  Quote
} from 'lucide-react'

export function TrustSection() {
  const trustIndicators = [
    {
      icon: Shield,
      title: 'Bank-Grade Security',
      description: 'Your data is protected with 256-bit SSL encryption and SOC 2 compliance'
    },
    {
      icon: FileText,
      title: 'IRS Certified',
      description: 'Qualified 501(c)(3) organization providing legitimate tax deductions'
    },
    {
      icon: Lock,
      title: 'Privacy Protected',
      description: 'Your personal information is never shared without explicit consent'
    },
    {
      icon: Award,
      title: 'Verified Partners',
      description: 'Working with licensed loan servicers and financial institutions'
    }
  ]

  const partners = [
    { name: 'Plaid', description: 'Secure account verification' },
    { name: 'Stripe', description: 'Payment processing' },
    { name: 'FedLoan Servicing', description: 'Loan verification partner' },
    { name: 'Great Lakes', description: 'Loan verification partner' },
    { name: 'Nelnet', description: 'Loan verification partner' },
    { name: 'Navient', description: 'Loan verification partner' }
  ]

  const testimonial = {
    text: "I was skeptical at first, but the verification process was thorough and transparent. Seeing $15,000 of my debt disappear changed my entire outlook on my future career in teaching.",
    author: "Sarah M.",
    role: "Education Major, State University",
    verified: true
  }

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Trusted by Students and Donors Nationwide
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We maintain the highest standards of security, compliance, and transparency
            in everything we do.
          </p>
        </div>

        {/* Trust Indicators */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-16">
          {trustIndicators.map((indicator, index) => (
            <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 mb-4">
                  <indicator.icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-semibold mb-2">{indicator.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {indicator.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Testimonial */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="border-2 border-blue-100 bg-blue-50/50">
            <CardContent className="p-8">
              <div className="flex items-start space-x-4">
                <Quote className="h-8 w-8 text-blue-600 flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <p className="text-lg text-muted-foreground italic mb-4">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center space-x-2">
                        <p className="font-semibold">{testimonial.author}</p>
                        {testimonial.verified && (
                          <Badge variant="secondary" className="text-xs">
                            <CheckCircle className="h-3 w-3 mr-1" />
                            Verified Student
                          </Badge>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Partners */}
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-8">Trusted Partners</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {partners.map((partner, index) => (
              <div key={index} className="text-center">
                <div className="bg-white rounded-lg p-4 shadow-sm border mb-2">
                  <Building className="h-6 w-6 text-muted-foreground mx-auto" />
                </div>
                <p className="text-sm font-medium">{partner.name}</p>
                <p className="text-xs text-muted-foreground">{partner.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Compliance Statement */}
        <div className="mt-16 max-w-3xl mx-auto">
          <Card className="bg-muted/30">
            <CardContent className="p-6">
              <div className="text-center">
                <h4 className="font-semibold mb-3">Legal & Tax Status</h4>
                <div className="text-sm text-muted-foreground space-y-2">
                  <p>
                    <strong>General Fund donations</strong> are tax-deductible as charitable contributions to a qualified 501(c)(3) organization.
                  </p>
                  <p>
                    <strong>Individual student support</strong> is considered personal giving and is not tax-deductible.
                  </p>
                  <p>
                    <strong>Group campaign</strong> tax status varies by campaign structure and beneficiary organization.
                  </p>
                  <p className="pt-2 border-t font-medium text-green-700">
                    🔒 <strong>100% Secure Payment Process:</strong> All funds are held in trust and distributed directly to verified loan servicers (Sallie Mae, Nelnet, FedLoan, etc.) or qualified educational institutions.
                    No funds ever go to individual students as cash payments — we pay your servicer directly on your behalf.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}