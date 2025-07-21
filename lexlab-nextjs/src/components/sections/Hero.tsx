'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Button from '@/components/ui/Button'

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative z-10 bg-bg mt-16 lg:mt-28 py-0 xl:py-8 2xl:py-16 bg-cover bg-center bg-no-repeat">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-bg opacity-90 z-[-10]"></div>
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-bg z-[-10]"></div>

      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[500px] lg:min-h-[600px]">
          {/* Left Content */}
          <div className={`space-y-6 lg:space-y-8 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <div className="space-y-4">
              <h1 className="text-white font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl leading-tight tracking-tight">
                Expert Legal
                <br />
                <span className="text-primary">Solutions</span>
              </h1>
              <p className="text-white/80 text-lg xl:text-xl max-w-lg">
                Providing comprehensive legal services with integrity, expertise, and dedication to achieving the best outcomes for our clients.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <Link href="/contact">
                <Button className="w-full sm:w-auto">
                  Get Free Consultation
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </Button>
              </Link>

              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-heading" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-semibold text-xl">4.9/5</p>
                  <p className="text-white/70 text-sm">Client Rating</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className={`relative ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '200ms' }}>
            <div className="relative">
              <Image
                src="https://images.pexels.com/photos/5668882/pexels-photo-5668882.jpeg?auto=compress&cs=tinysrgb&w=600&h=700&fit=crop"
                alt="Legal Professional"
                width={600}
                height={700}
                className="rounded-xl w-full h-auto"
                priority
              />
              
              {/* Floating Card */}
              <div className="absolute bottom-4 right-4 lg:bottom-8 lg:right-8 bg-white rounded-xl p-4 lg:p-6 text-center shadow-lg">
                <div className="text-2xl lg:text-4xl font-serif text-heading mb-2">25+</div>
                <p className="text-sm lg:text-base text-text">Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero