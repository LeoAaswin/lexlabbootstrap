interface SectionHeadingProps {
  title: string
  subtitle?: string
  description?: string
  alignment?: 'left' | 'center' | 'right'
  className?: string
}

export default function SectionHeading({ 
  title, 
  subtitle, 
  description, 
  alignment = 'left',
  className = '' 
}: SectionHeadingProps) {
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right'
  }

  return (
    <div className={`section-heading ${alignmentClasses[alignment]} ${className}`}>
      {subtitle && (
        <div className="sub-title text-primary mb-4 flex items-center gap-2">
          <span className="uppercase font-semibold text-sm tracking-wide">{subtitle}</span>
        </div>
      )}
      <h2 className="text-heading mb-6 font-serif text-3xl sm:text-4xl lg:text-5xl xl:text-6xl leading-tight">
        {title}
      </h2>
      {description && (
        <p className="text-text text-lg leading-relaxed max-w-3xl">
          {description}
        </p>
      )}
    </div>
  )
}