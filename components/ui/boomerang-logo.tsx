import { cn } from '@/lib/utils'

// CSS-in-JS animation styles
const bounceAnimation = {
  animation: 'boomerang-bounce 1.5s ease-in-out infinite',
}

// Inject keyframes into the document (only once)
if (typeof document !== 'undefined' && !document.querySelector('#boomerang-keyframes')) {
  const style = document.createElement('style')
  style.id = 'boomerang-keyframes'
  style.textContent = `
    @keyframes boomerang-bounce {
      0% {
        transform: translateX(-30px) translateY(0px) scale(1);
        opacity: 1;
      }
      15% {
        transform: translateX(-10px) translateY(-20px) scale(1.1);
        opacity: 1;
      }
      30% {
        transform: translateX(10px) translateY(0px) scale(1);
        opacity: 1;
      }
      45% {
        transform: translateX(25px) translateY(-15px) scale(1.05);
        opacity: 1;
      }
      60% {
        transform: translateX(35px) translateY(0px) scale(1);
        opacity: 0;
      }
      65% {
        transform: translateX(35px) translateY(0px) scale(1);
        opacity: 0;
      }
      70% {
        transform: translateX(-30px) translateY(0px) scale(1);
        opacity: 0;
      }
      75% {
        transform: translateX(-30px) translateY(0px) scale(1);
        opacity: 0;
      }
      100% {
        transform: translateX(-30px) translateY(0px) scale(1);
        opacity: 1;
      }
    }

    @keyframes boomerang-bounce-subtle {
      0% {
        transform: translateX(-15px) translateY(0px) scale(1);
      }
      25% {
        transform: translateX(0px) translateY(-8px) scale(1.02);
      }
      50% {
        transform: translateX(15px) translateY(0px) scale(1);
      }
      75% {
        transform: translateX(0px) translateY(-8px) scale(1.02);
      }
      100% {
        transform: translateX(-15px) translateY(0px) scale(1);
      }
    }
  `
  document.head.appendChild(style)
}

interface BoomerangLogoProps {
  className?: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
  variant?: 'default' | 'white' | 'dark'
  animate?: boolean
  animationType?: 'bounce' | 'subtle'
}

export function BoomerangLogo({
  className,
  size = 'md',
  variant = 'default',
  animate = true,
  animationType = 'bounce'
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

  const animationStyle = animate ? {
    animation: animationType === 'bounce'
      ? 'boomerang-bounce 2.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite'
      : 'boomerang-bounce-subtle 4s ease-in-out infinite'
  } : {}

  return (
    <div
      className={cn('inline-block', className)}
      style={{
        ...animationStyle,
        padding: animate ? '0 30px 0 30px' : '0',
        overflow: 'visible'
      }}
    >
      <svg
        viewBox="0 0 100 100"
        className={cn(sizeClasses[size], colorClasses[variant])}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ overflow: 'visible' }}
      >
        {/* Simple bouncing ball with gradient */}
        <defs>
          <radialGradient id="ballGradient" cx="0.3" cy="0.3" r="0.8">
            <stop offset="0%" stopColor="currentColor" stopOpacity="1"/>
            <stop offset="100%" stopColor="currentColor" stopOpacity="0.85"/>
          </radialGradient>
        </defs>

        <circle
          cx="50"
          cy="35"
          r="12"
          fill="url(#ballGradient)"
          className="drop-shadow-lg"
        />
      </svg>
    </div>
  )
}

interface BoomerangWordmarkProps {
  className?: string
  variant?: 'default' | 'white' | 'dark'
  size?: 'sm' | 'md' | 'lg'
  animate?: boolean
  animationType?: 'bounce' | 'subtle'
}

export function BoomerangWordmark({
  className,
  variant = 'default',
  size = 'md',
  animate = true,
  animationType = 'bounce'
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
      <BoomerangLogo
        variant={variant}
        size={size === 'lg' ? 'lg' : size === 'sm' ? 'sm' : 'md'}
        animate={animate}
        animationType={animationType}
      />
      <span className={cn('font-bold tracking-tight', colorClasses[variant], sizeClasses[size])}>
        Boomerang
      </span>
    </div>
  )
}