'use client'

import { signOut } from 'next-auth/react'
import Link from 'next/link'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { generateInitials } from '@/lib/utils'
import { User, Settings, LogOut, Heart, BarChart3, Users } from 'lucide-react'

interface UserNavProps {
  user: {
    id: string
    name?: string | null
    email?: string | null
    image?: string | null
    role: 'ADMIN' | 'STUDENT' | 'DONOR'
  }
}

export function UserNav({ user }: UserNavProps) {
  const getDashboardLink = () => {
    switch (user.role) {
      case 'ADMIN':
        return '/admin'
      case 'STUDENT':
        return '/dashboard/student'
      case 'DONOR':
        return '/dashboard/donor'
      default:
        return '/dashboard'
    }
  }

  const getRoleSpecificMenuItems = () => {
    switch (user.role) {
      case 'ADMIN':
        return (
          <>
            <DropdownMenuItem asChild>
              <Link href="/admin/students">
                <Users className="mr-2 h-4 w-4" />
                <span>Verify Students</span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/admin/analytics">
                <BarChart3 className="mr-2 h-4 w-4" />
                <span>Analytics</span>
              </Link>
            </DropdownMenuItem>
          </>
        )
      case 'STUDENT':
        return (
          <DropdownMenuItem asChild>
            <Link href="/profile">
              <User className="mr-2 h-4 w-4" />
              <span>My Profile</span>
            </Link>
          </DropdownMenuItem>
        )
      case 'DONOR':
        return (
          <DropdownMenuItem asChild>
            <Link href="/donate">
              <Heart className="mr-2 h-4 w-4" />
              <span>Make Donation</span>
            </Link>
          </DropdownMenuItem>
        )
      default:
        return null
    }
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-8 w-8 rounded-full">
          <Avatar className="h-8 w-8">
            <AvatarImage src={user.image || undefined} alt={user.name || 'User'} />
            <AvatarFallback>
              {generateInitials(user.name || user.email || 'User')}
            </AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">{user.name}</p>
            <p className="text-xs leading-none text-muted-foreground">
              {user.email}
            </p>
            <p className="text-xs leading-none text-muted-foreground capitalize">
              {user.role.toLowerCase()} Account
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem asChild>
            <Link href={getDashboardLink()}>
              <BarChart3 className="mr-2 h-4 w-4" />
              <span>Dashboard</span>
            </Link>
          </DropdownMenuItem>
          {getRoleSpecificMenuItems()}
          <DropdownMenuItem asChild>
            <Link href="/settings">
              <Settings className="mr-2 h-4 w-4" />
              <span>Settings</span>
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={() => signOut({ callbackUrl: '/' })}
          className="cursor-pointer"
        >
          <LogOut className="mr-2 h-4 w-4" />
          <span>Log out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}