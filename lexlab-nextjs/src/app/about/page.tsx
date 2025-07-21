import Breadcrumb from '@/components/sections/Breadcrumb'
import AboutSection from '@/components/sections/AboutSection'
import ValuesSection from '@/components/sections/ValuesSection'
import StatsSection from '@/components/sections/StatsSection'
import TeamSection from '@/components/sections/TeamSection'
import CTASection from '@/components/sections/CTASection'

export default function AboutPage() {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'About Us' }
  ]

  return (
    <>
      <Breadcrumb
        title="About Us"
        items={breadcrumbItems}
      />
      
      <AboutSection
        title="Your Trusted Legal Partners"
        subtitle="About LexLab"
        description="With over 25 years of combined experience, LexLab has been providing exceptional legal services to individuals and businesses. Our team of dedicated attorneys is committed to delivering personalized solutions that protect your interests and achieve your goals."
        features={[
          "Expert legal consultation and representation",
          "Personalized legal strategies for each client",
          "24/7 client support and communication",
          "Proven track record of successful cases",
          "Comprehensive legal services across multiple practice areas",
          "Transparent pricing and billing practices"
        ]}
      />

      <ValuesSection />
      <StatsSection />
      <TeamSection />
      <CTASection />
    </>
  )
}