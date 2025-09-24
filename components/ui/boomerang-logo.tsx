import { cn } from '@/lib/utils'

interface BoomerangLogoProps {
  className?: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
  variant?: 'default' | 'white' | 'dark'
}

export function BoomerangLogo({
  className,
  size = 'md',
  variant = 'default'
}: BoomerangLogoProps) {
  const sizeClasses = {
    sm: 'h-6 w-6',
    md: 'h-8 w-8',
    lg: 'h-12 w-12',
    xl: 'h-16 w-16'
  }

  const colorClasses = {
    default: 'text-blue-600',
    white: 'text-white',
    dark: 'text-gray-900'
  }

  return (
    <svg
      viewBox="0 0 100 100"
      className={cn(sizeClasses[size], colorClasses[variant], className)}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Bouncing ball */}
      <circle
        cx="50"
        cy="30"
        r="14"
        fill="currentColor"
      />

      {/* Simple motion lines */}
      <g opacity="0.3">
        <path d="M20 45 L30 42" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        <path d="M25 52 L35 49" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      </g>
    </svg>
  )
}

interface BoomerangWordmarkProps {
  className?: string
  variant?: 'default' | 'white' | 'dark'
  size?: 'sm' | 'md' | 'lg'
}

export function BoomerangWordmark({
  className,
  variant = 'default',
  size = 'md'
}: BoomerangWordmarkProps) {
  const colorClasses = {
    default: 'text-gray-900',
    white: 'text-white',
    dark: 'text-gray-900'
  }

  const sizeClasses = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl'
  }

  return (
    <div className={cn('flex items-center space-x-3', className)}>
      <BoomerangLogo variant={variant} size={size === 'lg' ? 'lg' : size === 'sm' ? 'sm' : 'md'} />
      <span className={cn('font-bold tracking-tight', colorClasses[variant], sizeClasses[size])}>
        Boomerang
      </span>
    </div>
  )
}