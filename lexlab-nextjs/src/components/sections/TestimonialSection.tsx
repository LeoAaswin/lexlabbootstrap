'use client'

import { useState } from 'react'
import Container from '@/components/ui/Container'
import SectionHeading from '@/components/ui/SectionHeading'
import TestimonialCard from '@/components/ui/TestimonialCard'
import Divider from '@/components/ui/Divider'

interface Testimonial {
  content: string
  author: {
    name: string
    position: string
    image: string
  }
  rating?: number
}

interface TestimonialSectionProps {
  title?: string
  subtitle?: string
  description?: string
  testimonials?: Testimonial[]
  className?: string
}

const defaultTestimonials: Testimonial[] = [
  {
    content: "LexLab provided exceptional legal representation for our corporate merger. Their attention to detail and strategic approach made all the difference.",
    author: {
      name: "Sarah Johnson",
      position: "CEO, TechCorp",
      image: "https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
    },
    rating: 5
  },
  {
    content: "The family law team at LexLab handled our case with compassion and professionalism. We couldn't have asked for better representation.",
    author: {
      name: "Michael Chen",
      position: "Business Owner",
      image: "https://images.pexels.com/photos/5668772/pexels-photo-5668772.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
    },
    rating: 5
  },
  {
    content: "Outstanding criminal defense representation. The team's expertise and dedication resulted in the best possible outcome for our case.",
    author: {
      name: "Jennifer Davis",
      position: "Client",
      image: "https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
    },
    rating: 5
  }
]

export default function TestimonialSection({
  title = "What Our Clients Say",
  subtitle = "Testimonials",
  description = "Don't just take our word for it. Here's what our satisfied clients have to say about our legal services.",
  testimonials = defaultTestimonials,
  className = ""
}: TestimonialSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

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

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <TestimonialCard
                    content={testimonial.content}
                    author={testimonial.author}
                    rating={testimonial.rating}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-primary hover:text-heading transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-primary' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-primary hover:text-heading transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </Container>
      <Divider />
    </section>
  )
}