import Link from 'next/link'

interface ServiceCardProps {
  title: string
  description: string
  icon: string
  href?: string
  className?: string
}

export default function ServiceCard({ 
  title, 
  description, 
  icon, 
  href = '#',
  className = '' 
}: ServiceCardProps) {
  return (
    <div className={`bg-white p-8 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-2 group ${className}`}>
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-heading mb-3 group-hover:text-primary transition-colors">
        {title}
      </h3>
      <p className="text-text leading-relaxed mb-6">
        {description}
      </p>
      <Link 
        href={href}
        className="inline-flex items-center gap-2 text-primary hover:text-primary-hover transition-colors font-semibold"
      >
        Learn More
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
        </svg>
      </Link>
    </div>
  )
}