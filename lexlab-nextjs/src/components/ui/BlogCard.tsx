import Image from 'next/image'
import Link from 'next/link'

interface BlogCardProps {
  title: string
  excerpt: string
  date: string
  category: string
  image: string
  href: string
  className?: string
}

export default function BlogCard({ 
  title, 
  excerpt, 
  date, 
  category, 
  image, 
  href,
  className = '' 
}: BlogCardProps) {
  return (
    <article className={`bg-secondary rounded-xl overflow-hidden hover:-translate-y-2 transition-all duration-300 ${className}`}>
      <div className="relative h-48 sm:h-56">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center gap-2 text-sm text-text mb-3">
          <span>{category}</span>
          <div className="w-1 h-1 bg-text rounded-full"></div>
          <span>{date}</span>
        </div>
        <h3 className="text-xl font-semibold text-heading mb-3 line-clamp-2 hover:text-primary transition-colors">
          <Link href={href}>{title}</Link>
        </h3>
        <p className="text-text leading-relaxed mb-4 line-clamp-3">
          {excerpt}
        </p>
        <Link 
          href={href}
          className="inline-flex items-center gap-2 text-primary hover:text-primary-hover transition-colors font-semibold"
        >
          Read More
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
          </svg>
        </Link>
      </div>
    </article>
  )
}