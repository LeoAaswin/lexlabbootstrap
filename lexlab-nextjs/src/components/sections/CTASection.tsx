import Link from 'next/link'
import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'
import Divider from '@/components/ui/Divider'

interface CTASectionProps {
  title?: string
  description?: string
  primaryButton?: {
    text: string
    href: string
  }
  secondaryButton?: {
    text: string
    href: string
  }
  className?: string
}

export default function CTASection({
  title = "Ready to Get Started?",
  description = "Contact us today for a free consultation and let our experienced legal team help you navigate your legal challenges.",
  primaryButton = {
    text: "Schedule Consultation",
    href: "/contact"
  },
  secondaryButton = {
    text: "Call Now: 0-869-878-08-68",
    href: "tel:0-869-878-08-68"
  },
  className = ""
}: CTASectionProps) {
  return (
    <section className={`py-16 lg:py-24 bg-bg ${className}`}>
      <Divider />
      <Container>
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-white font-serif text-3xl lg:text-5xl mb-6">
            {title}
          </h2>
          <p className="text-white/80 text-lg mb-8">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={primaryButton.href}>
              <Button className="w-full sm:w-auto">
                {primaryButton.text}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </Button>
            </Link>
            <Link
              href={secondaryButton.href}
              className="btn bg-transparent border-2 border-white text-white hover:bg-white hover:text-heading inline-flex items-center gap-2"
            >
              {secondaryButton.text}
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </Link>
          </div>
        </div>
      </Container>
      <Divider />
    </section>
  )
}