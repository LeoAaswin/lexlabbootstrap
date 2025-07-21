import Container from '@/components/ui/Container'
import SectionHeading from '@/components/ui/SectionHeading'
import ServiceCard from '@/components/ui/ServiceCard'
import Divider from '@/components/ui/Divider'

interface Service {
  title: string
  description: string
  icon: string
  href?: string
}

interface ServicesSectionProps {
  title?: string
  subtitle?: string
  description?: string
  services?: Service[]
  className?: string
}

const defaultServices: Service[] = [
  {
    title: 'Corporate Law',
    description: 'Comprehensive business legal services including contracts, compliance, and corporate governance.',
    icon: '⚖️',
    href: '/services/corporate-law'
  },
  {
    title: 'Family Law',
    description: 'Sensitive handling of family matters including divorce, custody, and estate planning.',
    icon: '👨‍👩‍👧‍👦',
    href: '/services/family-law'
  },
  {
    title: 'Criminal Defense',
    description: 'Strong defense representation for criminal charges with experienced trial attorneys.',
    icon: '🛡️',
    href: '/services/criminal-defense'
  },
  {
    title: 'Real Estate Law',
    description: 'Property transactions, disputes, and real estate investment legal guidance.',
    icon: '🏠',
    href: '/services/real-estate'
  },
  {
    title: 'Personal Injury',
    description: 'Dedicated representation for accident victims seeking fair compensation.',
    icon: '🏥',
    href: '/services/personal-injury'
  },
  {
    title: 'Immigration Law',
    description: 'Complete immigration services including visas, citizenship, and deportation defense.',
    icon: '🌍',
    href: '/services/immigration'
  }
]

export default function ServicesSection({
  title = "Legal Services We Provide",
  subtitle = "Our Services",
  description = "We offer comprehensive legal solutions tailored to meet your specific needs with professional expertise and personalized attention.",
  services = defaultServices,
  className = ""
}: ServicesSectionProps) {
  return (
    <section className={`py-16 lg:py-24 bg-secondary ${className}`}>
      <Divider />
      <Container>
        <div className="text-center mb-12">
          <SectionHeading
            title={title}
            subtitle={subtitle}
            description={description}
            alignment="center"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              href={service.href}
            />
          ))}
        </div>
      </Container>
      <Divider />
    </section>
  )
}