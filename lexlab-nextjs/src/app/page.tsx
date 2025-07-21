import Hero from '@/components/sections/Hero'
import ServicesSection from '@/components/sections/ServicesSection'
import AboutSection from '@/components/sections/AboutSection'
import StatsSection from '@/components/sections/StatsSection'
import TeamSection from '@/components/sections/TeamSection'
import TestimonialSection from '@/components/sections/TestimonialSection'
import BlogSection from '@/components/sections/BlogSection'
import CTASection from '@/components/sections/CTASection'

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <AboutSection />
      <StatsSection />
      <TeamSection />
      <TestimonialSection />
      <BlogSection />
      <CTASection />
    </>
  )
}