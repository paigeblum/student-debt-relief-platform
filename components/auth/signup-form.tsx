'use client'

import { useState } from 'react'
import { signIn } from 'next-auth/react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { useToast } from '@/hooks/use-toast'
import { Loader2, GraduationCap, Heart, Users } from 'lucide-react'

interface SignUpFormProps {
  preselectedRole?: string
}

export function SignUpForm({ preselectedRole }: SignUpFormProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [selectedRole, setSelectedRole] = useState(preselectedRole || 'donor')
  const [email, setEmail] = useState('')
  const { toast } = useToast()

  const handleGoogleSignUp = async () => {
    setIsLoading(true)
    try {
      await signIn('google', {
        callbackUrl: `/onboarding?role=${selectedRole}`
      })
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to sign up with Google. Please try again.",
        variant: "destructive",
      })
      setIsLoading(false)
    }
  }

  const handleEmailSignUp = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const result = await signIn('email', {
        email,
        callbackUrl: `/onboarding?role=${selectedRole}`,
        redirect: false,
      })

      if (result?.error) {
        toast({
          title: "Error",
          description: "Failed to send verification email. Please try again.",
          variant: "destructive",
        })
      } else {
        toast({
          title: "Check your email",
          description: "We've sent you a verification link to complete your registration.",
        })
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const roleOptions = [
    {
      id: 'student',
      label: 'Student',
      description: 'Get help with your educational debt',
      icon: GraduationCap,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      id: 'donor',
      label: 'Donor',
      description: 'Support students in need',
      icon: Heart,
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    }
  ]

  return (
    <div className="grid gap-6">
      {/* Role Selection */}
      <Card>
        <CardHeader>
          <CardTitle>Choose your role</CardTitle>
          <CardDescription>
            Select how you'd like to participate in our community
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            {roleOptions.map((role) => (
              <div
                key={role.id}
                className={`relative flex cursor-pointer select-none items-center rounded-lg border p-4 hover:bg-accent ${
                  selectedRole === role.id ? 'border-primary bg-accent' : ''
                }`}
                onClick={() => setSelectedRole(role.id)}
              >
                <div className={`rounded-lg p-3 mr-4 ${role.bgColor}`}>
                  <role.icon className={`h-6 w-6 ${role.color}`} />
                </div>
                <div className="flex-1">
                  <div className="font-medium">{role.label}</div>
                  <div className="text-sm text-muted-foreground">
                    {role.description}
                  </div>
                </div>
                {selectedRole === role.id && (
                  <div className="absolute right-3 top-3">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Authentication Methods */}
      <Card>
        <CardHeader>
          <CardTitle>Create your account</CardTitle>
          <CardDescription>
            Choose your preferred sign-up method
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button
            variant="outline"
            type="button"
            disabled={isLoading}
            onClick={handleGoogleSignUp}
            className="w-full"
          >
            {isLoading ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
              </svg>
            )}
            Continue with Google
          </Button>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                Or
              </span>
            </div>
          </div>

          <form onSubmit={handleEmailSignUp} className="space-y-4">
            <div className="grid gap-2">
              <Label htmlFor="signup-email">Email</Label>
              <Input
                id="signup-email"
                placeholder="name@example.com"
                type="email"
                autoCapitalize="none"
                autoComplete="email"
                autoCorrect="off"
                disabled={isLoading}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <Button disabled={isLoading || !email} type="submit" className="w-full">
              {isLoading && (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              )}
              Create Account as {roleOptions.find(r => r.id === selectedRole)?.label}
            </Button>
          </form>
        </CardContent>
      </Card>

      <p className="text-xs text-center text-muted-foreground">
        By creating an account, you agree to our{' '}
        <a href="/terms" className="underline underline-offset-4 hover:text-primary">
          Terms of Service
        </a>{' '}
        and{' '}
        <a href="/privacy" className="underline underline-offset-4 hover:text-primary">
          Privacy Policy
        </a>
      </p>
    </div>
  )
}