import Hero from '@/components/sections/Hero'

export default function Home() {
  return (
    <>
      <Hero />
      
      {/* Services Section Preview */}
      <section className="py-16 lg:py-24 bg-secondary">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <div className="section-heading">
              <div className="sub-title text-primary mb-4">
                <span>Our Services</span>
              </div>
              <h2 className="text-heading">Legal Services We Provide</h2>
              <p className="text-text max-w-2xl mx-auto">
                We offer comprehensive legal solutions tailored to meet your specific needs with professional expertise and personalized attention.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Corporate Law',
                description: 'Comprehensive business legal services including contracts, compliance, and corporate governance.',
                icon: '⚖️'
              },
              {
                title: 'Family Law',
                description: 'Sensitive handling of family matters including divorce, custody, and estate planning.',
                icon: '👨‍👩‍👧‍👦'
              },
              {
                title: 'Criminal Defense',
                description: 'Strong defense representation for criminal charges with experienced trial attorneys.',
                icon: '🛡️'
              },
              {
                title: 'Real Estate Law',
                description: 'Property transactions, disputes, and real estate investment legal guidance.',
                icon: '🏠'
              },
              {
                title: 'Personal Injury',
                description: 'Dedicated representation for accident victims seeking fair compensation.',
                icon: '🏥'
              },
              {
                title: 'Immigration Law',
                description: 'Complete immigration services including visas, citizenship, and deportation defense.',
                icon: '🌍'
              }
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-heading mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-text leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-bg">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-white font-serif text-3xl lg:text-5xl mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-white/80 text-lg mb-8">
              Contact us today for a free consultation and let our experienced legal team help you navigate your legal challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="btn btn-primary inline-flex items-center gap-2"
              >
                Schedule Consultation
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </a>
              <a
                href="tel:0-869-878-08-68"
                className="btn bg-transparent border-2 border-white text-white hover:bg-white hover:text-heading inline-flex items-center gap-2"
              >
                Call Now: 0-869-878-08-68
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}