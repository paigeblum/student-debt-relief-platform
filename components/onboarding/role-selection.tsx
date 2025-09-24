'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { GraduationCap, Heart, Loader2 } from 'lucide-react'

interface RoleSelectionProps {
  onRoleSelect: (role: 'STUDENT' | 'DONOR') => Promise<void>
  isLoading: boolean
  preselectedRole?: string
}

export function RoleSelection({ onRoleSelect, isLoading, preselectedRole }: RoleSelectionProps) {
  const [selectedRole, setSelectedRole] = useState<'STUDENT' | 'DONOR' | null>(
    preselectedRole?.toUpperCase() === 'STUDENT' ? 'STUDENT' :
    preselectedRole?.toUpperCase() === 'DONOR' ? 'DONOR' : null
  )

  const roles = [
    {
      id: 'STUDENT' as const,
      title: 'Student',
      description: 'I need help with my educational debt',
      longDescription: 'Create a profile to share your story and connect with donors who want to support your education. Get help paying off student loans so you can focus on your future career.',
      icon: GraduationCap,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200'
    },
    {
      id: 'DONOR' as const,
      title: 'Donor',
      description: 'I want to help students succeed',
      longDescription: 'Browse verified student profiles and make direct contributions to their educational journey. Track your impact and see how your generosity helps students achieve their goals.',
      icon: Heart,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200'
    }
  ]

  const handleContinue = () => {
    if (selectedRole) {
      onRoleSelect(selectedRole)
    }
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>How do you want to participate?</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            {roles.map((role) => (
              <div
                key={role.id}
                className={`relative cursor-pointer rounded-lg border-2 p-6 transition-all ${
                  selectedRole === role.id
                    ? `${role.borderColor} ${role.bgColor}`
                    : 'border-muted hover:border-border hover:bg-accent/50'
                }`}
                onClick={() => setSelectedRole(role.id)}
              >
                <div className="flex items-start space-x-4">
                  <div className={`rounded-lg p-3 ${role.bgColor}`}>
                    <role.icon className={`h-6 w-6 ${role.color}`} />
                  </div>
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-lg">{role.title}</h3>
                      {selectedRole === role.id && (
                        <div className={`h-3 w-3 rounded-full ${role.color.replace('text-', 'bg-')}`} />
                      )}
                    </div>
                    <p className="text-sm font-medium text-muted-foreground">
                      {role.description}
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {role.longDescription}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex justify-center">
            <Button
              size="lg"
              onClick={handleContinue}
              disabled={!selectedRole || isLoading}
            >
              {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Continue as {selectedRole ? roles.find(r => r.id === selectedRole)?.title : '...'}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}