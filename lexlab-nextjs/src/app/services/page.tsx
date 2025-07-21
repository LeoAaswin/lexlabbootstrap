import Breadcrumb from '@/components/sections/Breadcrumb'
import ServicesSection from '@/components/sections/ServicesSection'
import CTASection from '@/components/sections/CTASection'

export default function ServicesPage() {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Services' }
  ]

  const services = [
    {
      title: 'Corporate Security',
      description: 'Comprehensive business legal services including contracts, compliance, and corporate governance.',
      icon: '🏢',
      href: '/services/corporate'
    },
    {
      title: 'Bankruptcy Law',
      description: 'Expert guidance through bankruptcy proceedings and debt restructuring solutions.',
      icon: '📊',
      href: '/services/bankruptcy'
    },
    {
      title: 'Education Law',
      description: 'Legal services for educational institutions, students, and education-related matters.',
      icon: '🎓',
      href: '/services/education'
    },
    {
      title: 'Real Estate Law',
      description: 'Property transactions, disputes, and real estate investment legal guidance.',
      icon: '🏠',
      href: '/services/real-estate'
    },
    {
      title: 'Health Care Law',
      description: 'Legal representation for healthcare providers and medical malpractice cases.',
      icon: '🏥',
      href: '/services/healthcare'
    },
    {
      title: 'Family Violence',
      description: 'Sensitive handling of domestic violence cases with compassionate legal support.',
      icon: '👨‍👩‍👧‍👦',
      href: '/services/family-violence'
    },
    {
      title: 'Insurance Law',
      description: 'Insurance claim disputes and coverage issues resolved by experienced attorneys.',
      icon: '🛡️',
      href: '/services/insurance'
    },
    {
      title: 'Travel Accident',
      description: 'Legal representation for travel-related accidents and injury claims.',
      icon: '✈️',
      href: '/services/travel-accident'
    }
  ]

  return (
    <>
      <Breadcrumb
        title="Our Services"
        items={breadcrumbItems}
      />
      
      <ServicesSection
        title="Comprehensive Legal Services"
        subtitle="What We Offer"
        description="Our experienced legal team provides a wide range of services to meet all your legal needs with professional expertise and personalized attention."
        services={services}
      />

      <CTASection />
    </>
  )
}