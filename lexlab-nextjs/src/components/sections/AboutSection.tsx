import Image from 'next/image'
import Container from '@/components/ui/Container'
import SectionHeading from '@/components/ui/SectionHeading'
import Divider from '@/components/ui/Divider'

interface AboutSectionProps {
  title?: string
  subtitle?: string
  description?: string
  features?: string[]
  stats?: Array<{
    number: string
    label: string
  }>
  image?: string
  className?: string
}

export default function AboutSection({
  title = "Your Trusted Legal Partners",
  subtitle = "About LexLab",
  description = "With over 25 years of combined experience, LexLab has been providing exceptional legal services to individuals and businesses. Our team of dedicated attorneys is committed to delivering personalized solutions that protect your interests and achieve your goals.",
  features = [
    "Expert legal consultation",
    "Personalized legal strategies",
    "24/7 client support",
    "Proven track record"
  ],
  stats = [
    { number: "500+", label: "Cases Won" },
    { number: "25+", label: "Years Experience" }
  ],
  image = "https://images.pexels.com/photos/5668882/pexels-photo-5668882.jpeg?auto=compress&cs=tinysrgb&w=600&h=700&fit=crop",
  className = ""
}: AboutSectionProps) {
  return (
    <section className={`py-16 lg:py-24 bg-white ${className}`}>
      <Divider />
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <SectionHeading
              title={title}
              subtitle={subtitle}
              description={description}
            />
            
            {features.length > 0 && (
              <ul className="space-y-3 mb-8">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-heading" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-text">{feature}</span>
                  </li>
                ))}
              </ul>
            )}

            {stats.length > 0 && (
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center p-6 bg-secondary rounded-xl">
                    <div className="text-3xl lg:text-4xl font-serif text-heading mb-2">{stat.number}</div>
                    <p className="text-text">{stat.label}</p>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="relative">
            <div className="relative h-96 lg:h-[500px] rounded-xl overflow-hidden">
              <Image
                src={image}
                alt="About LexLab"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary rounded-xl flex items-center justify-center">
              <svg className="w-12 h-12 text-heading" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            </div>
          </div>
        </div>
      </Container>
      <Divider />
    </section>
  )
}