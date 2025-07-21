'use client'

import { ButtonHTMLAttributes, ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'dark' | 'link'
  size?: 'sm' | 'md' | 'lg'
  children: ReactNode
  className?: string
}

const Button = ({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  className, 
  ...props 
}: ButtonProps) => {
  const baseClasses = 'btn relative overflow-hidden group transition-all duration-300'
  
  const variants = {
    primary: 'btn-primary',
    secondary: 'bg-secondary text-heading hover:bg-primary hover:text-heading',
    dark: 'btn-dark',
    link: 'btn-link'
  }

  const sizes = {
    sm: 'h-9 px-4 text-sm',
    md: 'h-[54px] px-8',
    lg: 'h-16 px-12 text-lg'
  }

  return (
    <button
      className={cn(
        baseClasses,
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      <span className="flex items-center gap-2 transition-all duration-300 group-hover:-translate-y-12">
        {children}
      </span>
      <span className="flex items-center gap-2 absolute opacity-0 translate-y-12 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
        {children}
      </span>
    </button>
  )
}

export default Button