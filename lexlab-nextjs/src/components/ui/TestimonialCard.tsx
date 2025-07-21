import Image from 'next/image'

interface TestimonialCardProps {
  content: string
  author: {
    name: string
    position: string
    image: string
  }
  rating?: number
  className?: string
}

export default function TestimonialCard({ 
  content, 
  author, 
  rating = 5,
  className = '' 
}: TestimonialCardProps) {
  return (
    <div className={`bg-white p-8 rounded-xl border-2 border-primary ${className}`}>
      {rating && (
        <div className="flex items-center gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              className={`w-5 h-5 ${i < rating ? 'text-warning-hover' : 'text-gray-300'}`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
      )}
      <blockquote className="text-lg leading-relaxed text-text mb-6">
        "{content}"
      </blockquote>
      <div className="flex items-center gap-4">
        <div className="relative w-12 h-12 rounded-full overflow-hidden">
          <Image
            src={author.image}
            alt={author.name}
            fill
            className="object-cover"
          />
        </div>
        <div>
          <div className="font-semibold text-heading">{author.name}</div>
          <div className="text-sm text-text">{author.position}</div>
        </div>
      </div>
    </div>
  )
}