import Link from 'next/link'
import { Mail, Phone, MapPin } from 'lucide-react'
import { BoomerangWordmark } from '@/components/ui/boomerang-logo'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const footerSections = [
    {
      title: 'Platform',
      links: [
        { label: 'How It Works', href: '/how-it-works' },
        { label: 'For Students', href: '/students' },
        { label: 'For Donors', href: '/donors' },
        { label: 'Success Stories', href: '/stories' },
      ]
    },
    {
      title: 'Support',
      links: [
        { label: 'Help Center', href: '/help' },
        { label: 'Contact Us', href: '/contact' },
        { label: 'FAQ', href: '/faq' },
        { label: 'Community', href: '/community' },
      ]
    },
    {
      title: 'Legal',
      links: [
        { label: 'Terms of Service', href: '/terms' },
        { label: 'Privacy Policy', href: '/privacy' },
        { label: 'Cookie Policy', href: '/cookies' },
        { label: 'Tax Information', href: '/tax-info' },
      ]
    },
    {
      title: 'Company',
      links: [
        { label: 'About Us', href: '/about' },
        { label: 'Our Mission', href: '/mission' },
        { label: 'Careers', href: '/careers' },
        { label: 'Press Kit', href: '/press' },
      ]
    }
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container py-16">
        {/* Main Footer Content */}
        <div className="grid gap-8 lg:grid-cols-6">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="mb-4">
              <BoomerangWordmark variant="white" size="lg" />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Together, we can end student debt — one loan at a time.
              Connecting students with donors to create lasting change in education.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-3 text-gray-400">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span>support@boomerang.org</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span>1-800-BOOMERANG</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <MapPin className="h-4 w-4 flex-shrink-0" />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>

          {/* Links Sections */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold text-white mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-gray-400">
            <p>
              © {currentYear} Boomerang. All rights reserved. |
              <span className="font-medium"> 501(c)(3) Nonprofit Organization</span>
            </p>
            <p className="text-xs mt-1">
              EIN: 12-3456789 | Tax-deductible donations available for General Fund contributions.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-4">
            <Link
              href="/social/twitter"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Follow us on Twitter"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </Link>
            <Link
              href="/social/linkedin"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Follow us on LinkedIn"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </Link>
            <Link
              href="/social/facebook"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Follow us on Facebook"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}