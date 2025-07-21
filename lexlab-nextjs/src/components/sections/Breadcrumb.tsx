import Link from 'next/link'
import Container from '@/components/ui/Container'
import Divider from '@/components/ui/Divider'

interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbProps {
  title: string
  items: BreadcrumbItem[]
  backgroundImage?: string
  className?: string
}

export default function Breadcrumb({
  title,
  items,
  backgroundImage = "https://images.pexels.com/photos/5668882/pexels-photo-5668882.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop",
  className = ""
}: BreadcrumbProps) {
  return (
    <section 
      className={`relative bg-bg py-16 lg:py-24 bg-cover bg-center mt-16 lg:mt-28 ${className}`}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-gradient-radial from-transparent to-bg/90"></div>
      <div className="absolute inset-0 bg-bg/90"></div>
      
      <Divider />
      <Container>
        <div className="relative z-10 text-center">
          <h1 className="text-white font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl mb-4">
            {title}
          </h1>
          <nav className="flex items-center justify-center gap-2 text-white/80">
            {items.map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                {item.href ? (
                  <Link href={item.href} className="hover:text-primary transition-colors">
                    {item.label}
                  </Link>
                ) : (
                  <span>{item.label}</span>
                )}
                {index < items.length - 1 && <span>></span>}
              </div>
            ))}
          </nav>
        </div>
      </Container>
      <Divider />
    </section>
  )
}