import Image from 'next/image'

export default function About() {
  return (
    <div className="mt-16 lg:mt-28">
      {/* Breadcrumb */}
      <section className="relative bg-bg py-16 lg:py-24 bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-radial from-transparent to-bg/90"></div>
        <div className="absolute inset-0 bg-bg/90"></div>
        
        <div className="container mx-auto relative z-10">
          <div className="text-center">
            <h1 className="text-white font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl mb-4">
              About Us
            </h1>
            <nav className="flex items-center justify-center gap-2 text-white/80">
              <a href="/" className="hover:text-primary transition-colors">Home</a>
              <span>&gt;</span>
              <span>About Us</span>
            </nav>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="section-heading">
                <div className="sub-title text-primary mb-4">
                  <span>About LexLab</span>
                </div>
                <h2 className="text-heading mb-6">
                  Your Trusted Legal Partners
                </h2>
                <p className="text-text mb-6">
                  With over 25 years of combined experience, LexLab has been providing exceptional legal services to individuals and businesses. Our team of dedicated attorneys is committed to delivering personalized solutions that protect your interests and achieve your goals.
                </p>
                <p className="text-text mb-8">
                  We understand that legal matters can be complex and overwhelming. That's why we take the time to listen, understand your unique situation, and develop strategies that work for you.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-secondary rounded-xl">
                  <div className="text-3xl lg:text-4xl font-serif text-heading mb-2">500+</div>
                  <p className="text-text">Cases Won</p>
                </div>
                <div className="text-center p-6 bg-secondary rounded-xl">
                  <div className="text-3xl lg:text-4xl font-serif text-heading mb-2">25+</div>
                  <p className="text-text">Years Experience</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="https://images.pexels.com/photos/5668882/pexels-photo-5668882.jpeg?auto=compress&cs=tinysrgb&w=600&h=700&fit=crop"
                alt="Legal Team"
                width={600}
                height={700}
                className="rounded-xl w-full h-auto"
              />
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary rounded-xl flex items-center justify-center">
                <svg className="w-12 h-12 text-heading" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 lg:py-24 bg-secondary">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <div className="section-heading">
              <div className="sub-title text-primary mb-4">
                <span>Our Values</span>
              </div>
              <h2 className="text-heading">What Drives Us</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Integrity',
                description: 'We maintain the highest ethical standards in all our professional dealings.',
                icon: '🤝'
              },
              {
                title: 'Excellence',
                description: 'We strive for excellence in every case, delivering superior legal representation.',
                icon: '⭐'
              },
              {
                title: 'Dedication',
                description: 'We are committed to our clients success and work tirelessly to achieve their goals.',
                icon: '💪'
              }
            ].map((value, index) => (
              <div key={index} className="text-center p-8 bg-white rounded-xl hover:shadow-lg transition-all duration-300">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-heading mb-3">{value.title}</h3>
                <p className="text-text">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}