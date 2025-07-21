interface DividerProps {
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export default function Divider({ size = 'md', className = '' }: DividerProps) {
  const sizeClasses = {
    sm: 'h-12 sm:h-16 md:h-20',
    md: 'h-16 sm:h-20 md:h-24 lg:h-28 xl:h-32 2xl:h-36',
    lg: 'h-20 sm:h-24 md:h-28 lg:h-32 xl:h-36 2xl:h-40'
  }

  return <div className={`w-full block ${sizeClasses[size]} ${className}`} />
}